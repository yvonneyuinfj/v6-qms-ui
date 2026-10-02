import type { QmsAuditCheckRecordDto } from '@/api/avic/myportal/qms/QmsAuditCheckRecordApi'; // 引入模块DTO
import {
  getQmsAuditCheckRecord,
  saveFormAndStartProcess,
  saveQmsAuditCheckRecord
} from '@/api/avic/myportal/qms/QmsAuditCheckRecordApi'; // 引入模块API
import {
  closeFlowLoading,
  default as flowUtils,
  getFieldAuth,
  getFieldDisabled,
  getFieldRequired,
  getFieldVisible,
  openFlowDetail,
  startFlowByFormCode
} from '@/views/avic/bpm/bpmutils/FlowUtils.js';
import { QmsAuditCheckDetailDto } from '@/api/avic/myportal/qms/QmsAuditCheckDetailApi';

export const emits = ['reloadData', 'close'];

export function useQmsAuditCheckRecordForm({ props: props, emit: emit }) {
  const { proxy } = getCurrentInstance();
  const form = ref<QmsAuditCheckRecordDto>({});
  const formRef = ref(null);
  const formCode = 'QmsAuditCheckRecord';
  const openType = ref('add'); // 流程表单的打开方式，add: 流程中心打开, edit: 待办打开
  const bpmParams = ref<any>({}); // 存储来自prop或者url的参数信息
  const bpmButtonParams = ref<any>({}); // 提交按钮传递的参数
  const bpmResult = ref(null); // 表单驱动方式启动流程的流程数据
  const rules: Record<string, Rule[]> = {
    secretLevel: [
      { required: true, message: '密级不能为空', trigger: 'change' }
    ]
  };
  const qmsAuditCheckDetailEdit = ref();
  const list = ref([]);
  const layout = {
    labelCol: { flex: '140px' },
    wrapperCol: { flex: '1' }
  };
  const colLayout = proxy.$colLayout2; // 调用布局公共方法
  const loading = ref(false);
  const uploadFile = ref(null); // 附件ref
  const secretLevelList = ref([]); // 密级通用代码
  const authJson = ref(null);
  const lookupParams = [{ fieldName: 'confirmityResult', lookUpType: 'QMS_CHECK_CONFORMITY_RESULT' }];
  const conformityResultList = ref([]);

  if (props.params) {
    bpmParams.value = props.params;
  } else {
    if (proxy.$route) {
      bpmParams.value = proxy.$route.query;
    }
  }
  if (bpmParams) {
    //加载流程数据
    form.value.id = bpmParams.value.id;
    openType.value = bpmParams.value.id ? 'edit' : 'add';
  }

  onMounted(() => {
    // 获取当前用户对应的文档密级
    getUserFileSecretList();
    // 加载所需通用代码
    getLookupList();
    if (props.formId || form.value.id) {
      // 编辑详情页面加载数据
      getFormData(props.formId || form.value.id);
    } else {
      // 添加表单的初始值
      initForm();
    }
  });

  /** 获取通用代码  */
  function getLookupList() {
    proxy.$getLookupByType(lookupParams, result => {
      conformityResultList.value = result.confirmityResult;
    });
  }

  /** 获取当前用户对应的文档密级 */
  function getUserFileSecretList() {
    proxy.$getUserFileSecretLevelList(result => {
      secretLevelList.value = result;
    });
  }

  /**
   * 编辑详情页面加载数据
   * @param {String} id 行数据的id
   */
  function getFormData(id) {
    if (!id) {
      return;
    }
    loading.value = true;
    getQmsAuditCheckRecord(id)
      .then(async res => {
        if (res.data) {
          console.log(res.data);
          form.value = res.data;
          // 处理数据
          loading.value = false;
        } else {
          initForm();
          loading.value = false;
        }
      })
      .catch(() => {
        proxy.$message.warning('获取表单数据失败！');
        loading.value = false;
      });
  }

  /** 保存 */
  function saveForm(params) {
    formRef.value
      .validate()
      .then(async () => {
        qmsAuditCheckDetailEdit.value
          .validate(async validate => {
            if (!validate) {
              return;
            }
            // 附件密级校验
            const validateResult = validateUploaderFileSecret();
            if (!validateResult) {
              return;
            }
            loading.value = true;
            const postData = proxy.$lodash.cloneDeep(form.value);
            const subInfoList = qmsAuditCheckDetailEdit.value.getChangedData(); // 获取子表数据
            // 处理数据
            postData.qmsAuditCheckDetailList = subInfoList; // 挂载子表数据
            // 发送请求
            saveQmsAuditCheckRecord(postData)
              .then(res => {
                if (res.success) {
                  if (props.bpmInstanceObject) {
                    bpmButtonParams.value = { params, result: res.data };
                  }
                  if (!form.value.id) {
                    form.value.id = res.data;
                  }
                  uploadFile.value.upload(form.value.id || res.data); // 附件上传
                } else {
                  loading.value = false;
                }
              })
              .catch(() => {
                loading.value = false;
              });
          })
          .catch(error => {
            console.log('error', error);
            loading.value = false;
          });
      })
      .catch(error => {
        // 定位校验失败元素
        proxy.$scrollToFirstErrorField(formRef, error);
      });
  }

  /** 设置添加表单的初始值 */
  function initForm() {
    // 初始化表单数据
    initFormData();
    // 初始化光标定位
    nextTick(() => {
      closeFlowLoading(props.bpmInstanceObject);
    });
  }

  /**
   * 初始化表单数据
   */
  const initFormData = () => {
    if (props.planObj) {
      console.log('props.planObj', props.planObj);
      const planObj = props.planObj;
      form.value.planId = planObj?.id;
      form.value.auditeeDeptId = planObj?.auditeeDeptId; // 受审核部门
      form.value.auditeeDeptCode = planObj?.auditeeDeptCode;
      form.value.auditeeDeptName = planObj?.auditeeDeptName;
      form.value.auditeeUserId = planObj?.auditeeUserId; // 陪同人员
      form.value.auditeeUserCode = planObj?.auditeeUserCode;
      form.value.auditeeUserName = planObj?.auditeeUserName;
      form.value.auditorId = planObj?.auditorId; // 审核人员
      form.value.auditorCode = planObj?.auditorCode;
      form.value.auditorName = planObj?.auditorName;
      form.value.auditTime = planObj?.auditTime; // 审核时间
      form.value.auditClause = planObj?.auditClause; // 条款
      form.value.secretLevel = planObj.secretLevel; // 密级
      //  TODO: 根据审核信息自动生成检查项
      generateCheckDetailList(form.value.auditClause);
    }
    // TODO 自动生成检查记录编号
    // if(!form.value.recordCode){
    //   form.value.recordCode = ''
    // }
    if (!form.value.treeSort) {
      form.value.treeSort = 0;
    }
  };

  /**
   * 根据审核信息自动生成检查项
   */
  function generateCheckDetailList(auditClause) {
    if (!auditClause) return;
    const arr = auditClause.split(/[^\d.]+/g); // 非数字和.
    arr.forEach(clause => {
      console.log(clause);
      const item = ref<QmsAuditCheckDetailDto>({});
      item.value.clauseNo = clause;
      list.value.push(item);
    });

  }


  /** 校验通过后，读取要启动的流程模板 */
  function getBpmDefine() {
    formRef.value
      .validate()
      .then(() => {
        qmsAuditCheckDetailEdit.value
          .validate(validate => {
            if (!validate) {
              return;
            }
            // 附件密级校验
            const validateResult = validateUploaderFileSecret();
            if (!validateResult) {
              return;
            }
            startFlowByFormCode({
              formCode: formCode,
              callback: bpmDefinedInfo => {
                saveAndStartProcess(bpmDefinedInfo);
              }
            });
          })
          .catch(error => {
            console.log('error', error);
          });
      })
      .catch(error => {
        if (props.bpmInstanceObject) {
          closeFlowLoading(props.bpmInstanceObject);
        }
        // 定位校验失败元素
        proxy.$scrollToFirstErrorField(formRef, error);
      });
  }

  /** 保存并启动流程 */
  async function saveAndStartProcess(params) {
    // 点击保存并启动流程按钮触发
    if (!props.bpmInstanceObject && !params.dbid) {
      // 校验表单并选择需要启动的流程模板
      getBpmDefine();
    } else {
      // 附件密级校验
      const validateResult = validateUploaderFileSecret();
      if (!validateResult) {
        return;
      }
      const subInfoList = qmsAuditCheckDetailEdit.value.getChangedData(); // 获取子表数据
      loading.value = true;
      // 处理数据
      const postData = proxy.$lodash.cloneDeep(form.value);
      postData.qmsAuditCheckDetailList = subInfoList; // 挂载子表数据
      const param = {
        processDefId: params.dbid || bpmParams.value.defineId,
        formCode: formCode,
        postData
      };
      // 发送请求
      saveFormAndStartProcess(param)
        .then(res => {
          if (res.success) {
            if (props.bpmInstanceObject) {
              bpmButtonParams.value = { params, result: res.data };
            }
            bpmResult.value = res.data;
            if (!form.value.id) {
              form.value.id = res.data.formId;
            }
            uploadFile.value.upload(form.value.id || res.data); // 附件上传
          } else {
            errorCallback();
          }
        })
        .catch(() => {
          errorCallback();
        });
    }
  }

  /** 保存、保存并启动流程处理成功后的逻辑 */
  function successCallback() {
    if (props.bpmInstanceObject) {
      closeFlowLoading(props.bpmInstanceObject);
      // 刷新表单版本
      getFormData(form.value.id);
      // 回调选人等流程按钮事件
      if (bpmButtonParams.value.params.callback) {
        bpmButtonParams.value.params.callback(bpmButtonParams.value.result);
        bpmButtonParams.value = {};
      }
    } else {
      // 添加页面-保存并启动流程后，打开流程详情页
      if (bpmResult.value) {
        openFlowDetail(bpmResult.value, props.bpmOperatorRefresh);
      }
      proxy.$message.success('保存成功！');
      emit('reloadData');
      emit('close');
    }
  }

  /** 数据保存失败的回调 */
  function errorCallback() {
    if (props.bpmInstanceObject) {
      closeFlowLoading(props.bpmInstanceObject);
    } else {
      loading.value = false;
      proxy.$message.error('保存失败！');
      emit('reloadData');
      emit('close');
    }
  }

  /** 附件上传完之后的回调函数 */
  function afterUploadEvent(successFile, errorFile) {
    if (errorFile.length > 0) {
      // 有附件保存失败的处理
      errorCallback();
    } else {
      // 所有附件都保存成功的处理
      successCallback();
    }
  }

  /** 返回关闭事件 */
  function closeModal() {
    emit('close');
  }

  /** 点击流程按钮的前置事件 */
  function beforeClickBpmButtons() {
    return new Promise(resolve => {
      resolve(true);
    });
  }

  /** 点击流程按钮的后置事件 */
  function afterClickBpmButtons() {
    return new Promise(resolve => {
      resolve(true);
    });
  }

  /** 表单字段是否显示 */
  function fieldVisible(fieldName) {
    checkAuthJson();
    return getFieldVisible(authJson.value, fieldName);
  }

  /** 表单字段是否可编辑 */
  function fieldDisabled(fieldName) {
    checkAuthJson();
    return getFieldDisabled(authJson.value, fieldName, props.bpmInstanceObject);
  }

  /** 表单字段是否显示 */
  function fieldRequired(fieldName) {
    checkAuthJson();
    return getFieldRequired(authJson.value, fieldName, rules, props.bpmInstanceObject);
  }

  /** 校验表单附件密级 */
  function validateUploaderFileSecret() {
    const errorMessage = uploadFile.value.validateUploaderFileSecret(form.value.secretLevel);
    if (errorMessage) {
      closeFlowLoading(props.bpmInstanceObject);
      return false;
    }
    return true;
  }

  /** 表单附件是否必填(按elementId) */
  function attachmentRequired(fieldName) {
    const res = flowUtils.attachmentRequired(props.bpmInstanceObject, fieldName);
    return res;
  }

  function checkAuthJson() {
    if (authJson.value == null) {
      authJson.value = getFieldAuth(props.bpmInstanceObject);
    }
  }

  /**
   * 选择审核计划
   * @param e
   * @param record
   */
  const handlePlanSelect = (e, record) => {
    record.auditeeDeptId = e[0].auditeeDeptId;
    record.auditeeDeptCode = e[0].auditeeDeptCode;
    record.auditeeDeptName = e[0].auditeeDeptName;
    record.auditorId = e[0].auditorId;
    record.auditorCode = e[0].auditorCode;
    record.auditorName = e[0].auditorName;
    record.auditTime = e[0].auditTime;
    record.auditTime = e[0].auditTime;
    record.forYear = e[0].forYear;
    record.secretLevel = e[0].secretLevel;
    record.auditClause = e[0].auditClause;
    record.attribute01 = `${record.forYear}年${record.auditeeDeptName}的审核实施计划`;
  };

  return {
    form,
    formRef,
    bpmParams,
    rules,
    layout,
    colLayout,
    loading,
    secretLevelList,
    uploadFile,
    afterUploadEvent,
    attachmentRequired,
    saveForm,
    saveAndStartProcess,
    closeModal,
    fieldVisible,
    fieldDisabled,
    fieldRequired,
    beforeClickBpmButtons,
    afterClickBpmButtons,
    qmsAuditCheckDetailEdit,
    handlePlanSelect,
    list,
    conformityResultList
  };
}

