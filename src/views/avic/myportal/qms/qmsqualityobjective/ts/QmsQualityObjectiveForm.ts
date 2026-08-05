import type { QmsQualityObjectiveDto } from '@/api/avic/myportal/qms/QmsQualityObjectiveApi'; // 引入模块DTO
import {
  getQmsQualityObjective,
  saveQmsQualityObjective,
  getTreeSortById,
  basePath
} from '@/api/avic/myportal/qms/QmsQualityObjectiveApi'; // 引入模块API
export const emits = ['reloadData', 'close'];

export function useQmsQualityObjectiveForm({ props: props, emit: emit }) {
  const { proxy } = getCurrentInstance();
  const form = ref<QmsQualityObjectiveDto>({});
  const formRef = ref(null);  // 表单ref
  const rules: Record<string, Rule[]> = {
    objectiveName: [
      { required: true, message: '考核/衡量指标不能为空', trigger: 'change' }
    ],
    secretLevel: [
      { required: true, message: '密级不能为空', trigger: 'change' }
    ],
    parentId: [
      { required: true, message: '父节点ID不能为空', trigger: 'change' }
    ],
    treeSort: [
      { required: true, message: '本级排序不能为空', trigger: 'change' }
    ]
  };
  const layout = {
    labelCol: { flex: '0 0 100px' },
    wrapperCol: { flex: '1 1 0' }
  };
  const colLayout = proxy.$colLayout2; // 调用布局公共方法
  const baseUrl = basePath; // 树选择组件的baseUrl
  const loading = ref(false);
  const uploadFile = ref(null); // 附件ref
  const secretLevelList = ref([]); // 密级通用代码
  const objectiveLevelList = ref([]);
  const dataStatCycleList = ref([]);
  const lookupParams = [
    { fieldName: 'objectiveLevel', lookUpType: 'QMS_OBJECTIVE_LEVEL' },
    { fieldName: 'dataStatCycle', lookUpType: 'QMS_OBJECT_DATA_STAT_CYCLE' }
  ];
  onMounted(() => {
    // 加载所需通用代码
    getLookupList();
    // 获取当前用户对应的文档密级
    getUserFileSecretList();
    // 获取年份列表
    getYearList();
    if (props.formId) {
      // 编辑、详情页面加载数据
      getFormData(props.formId);
    } else {
      initFormData();
    }
  });

  // 初始化表单数据
  const initFormData = () => {
    if (!form.value.forYear) {
      // 获取当年年份
      form.value.forYear = proxy.$dayjs().format('YYYY');
    }
    if (!form.value.treeSort) {
      getTreeSortById(form.value.parentId).then(res => {
        if (res.success) {
          form.value.treeSort = res.data;
        }
      });
    }
  };

  /** 获取通用代码  */
  function getLookupList() {
    proxy.$getLookupByType(lookupParams, result => {
      objectiveLevelList.value = result.objectiveLevel;
      dataStatCycleList.value = result.dataStatCycle;
    });
  }

  /** 获取当前用户对应的文档密级 */
  function getUserFileSecretList() {
    proxy.$getUserFileSecretLevelList(result => {
      secretLevelList.value = result;
    });
  }

  /**
   * 编辑、详情页面加载数据
   * @param {String} id 行数据的id
   */
  function getFormData(id) {
    loading.value = true;
    getQmsQualityObjective(id)
      .then(async (res) => {
        if (res.success) {
          form.value = res.data;
          // 处理数据
          loading.value = false;
        }
      })
      .catch(() => {
        proxy.$message.warning('获取表单数据失败！');
        loading.value = false;
      });
  }

  /** 保存 */
  function saveForm() {
    formRef.value
      .validate()
      .then(() => {
        // 附件密级校验 先判断
        const errorMessage = uploadFile.value.validateUploaderFileSecret(
          form.value.secretLevel
        );
        if (errorMessage) {
          return;
        }
        loading.value = true;
        // 处理数据
        const postData = proxy.$lodash.cloneDeep(form.value);
        // 发送请求
        saveQmsQualityObjective(postData)
          .then((res) => {
            if (res.success) {
              uploadFile.value.upload(form.value.id || res.data.id); // 附件上传
            } else {
              loading.value = false;
            }
          })
          .catch(() => {
            loading.value = false;
          });
      })
      .catch(error => {
        // 定位校验失败元素
        proxy.$scrollToFirstErrorField(formRef, error);
      });
  }

  /** 数据保存成功的回调 */
  function successCallback() {
    proxy.$message.success('保存成功！');
    emit('reloadData', props.parentId);
    emit('close');
  }

  /** 数据保存失败的回调 */
  function errorCallback() {
    emit('reloadData');
    emit('close');
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

  const yearList = ref([]);
  const getYearList = () => {
    const currentYear = proxy.$dayjs().year();
    yearList.value = [
      (currentYear - 1).toString(),
      currentYear.toString(),
      (currentYear + 1).toString()
    ];
    return yearList;
  };

  return {
    form,
    formRef,
    rules,
    layout,
    colLayout,
    loading,
    secretLevelList,
    objectiveLevelList,
    dataStatCycleList,
    yearList,
    uploadFile,
    afterUploadEvent,
    baseUrl,
    saveForm,
    closeModal
  };
}

