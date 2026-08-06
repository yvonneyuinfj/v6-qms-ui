<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item label="检查编号;检查编号+3位数流水号">
              <a-input
                v-model:value="queryForm.inspectionCode"
                placeholder="请输入检查编号;检查编号+3位数流水号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="所属年份">
              <a-input
                v-model:value="queryForm.forYear"
                placeholder="请输入所属年份"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="检查名称;对XXX的专项检查">
              <a-input
                v-model:value="queryForm.inspectName"
                placeholder="请输入检查名称;对XXX的专项检查"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="被检查单位ID;检查单位名称/代号">
              <a-input
                v-model:value="queryForm.inspectedDeptId"
                placeholder="请输入被检查单位ID;检查单位名称/代号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="被检查单位CODE">
              <a-input
                v-model:value="queryForm.inspectedDeptCode"
                placeholder="请输入被检查单位CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="被检查单位">
              <a-input
                v-model:value="queryForm.inspectedDeptName"
                placeholder="请输入被检查单位"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="涉及型号;多选，逗号分隔">
              <a-input
                v-model:value="queryForm.model"
                placeholder="请输入涉及型号;多选，逗号分隔"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查时间(起)">
              <a-date-picker
                v-model:value="queryForm.inspectionTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择检查时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.inspectionTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查时间(止)">
              <a-date-picker
                v-model:value="queryForm.inspectionTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择检查时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.inspectionTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组长ID">
              <a-input
                v-model:value="queryForm.leaderStaffId"
                placeholder="请输入检查组长ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组长CODE">
              <a-input
                v-model:value="queryForm.leaderStaffCode"
                placeholder="请输入检查组长CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组长">
              <a-input
                v-model:value="queryForm.leaderStaffName"
                placeholder="请输入检查组长"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组成员ID">
              <a-input
                v-model:value="queryForm.memberStaffId"
                placeholder="请输入检查组成员ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组成员CODE">
              <a-input
                v-model:value="queryForm.memberStaffCode"
                placeholder="请输入检查组成员CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检查组成员">
              <a-input
                v-model:value="queryForm.memberStaffName"
                placeholder="请输入检查组成员"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="完成时间(起)">
              <a-date-picker
                v-model:value="queryForm.completeTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择完成时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.completeTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="完成时间(止)">
              <a-date-picker
                v-model:value="queryForm.completeTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择完成时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.completeTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="业务状态">
              <a-input
                v-model:value="queryForm.status"
                placeholder="请输入业务状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="密级">
              <a-select
                v-model:value="queryForm.secretLevel"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                :show-search="true"
                :allow-clear="true"
                placeholder="请选择密级"
              >
                <a-select-option
                  v-for="item in secretLevelList"
                  :key="item.sysLookupTlId"
                  :value="item.lookupCode"
                >
                  {{ item.lookupName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="是否已删除">
              <a-input
                v-model:value="queryForm.ynDeleted"
                placeholder="请输入是否已删除"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="备注">
              <a-input
                v-model:value="queryForm.remark"
                placeholder="请输入备注"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col
            v-bind="colLayout.cols"
            style="margin-left: auto"
          >
            <div class="table-page-search-submitButtons">
              <a-space>
                <a-button type="primary" @click="handleQuery">
                  <search-outlined />
                  查询
                </a-button>
                <a-button type="primary" @click="resetQuery" ghost>
                  <redo-outlined />
                  重置
                </a-button>
                <a-button type="link" @click="toggleAdvanced" style="margin: 0">
                  {{ advanced ? '收起' : '展开' }}
                  <up-outlined v-if="advanced" />
                  <down-outlined v-else />
                </a-button>
              </a-space>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 表格组件 -->
    <div class="table-wrapper">
      <AvicTable
        ref="qmsQualityInspectionSelect"
        table-key="qmsQualityInspectionSelect"
        :columns="columns"
        :row-key="record => record.id"
        :data-source="list"
        :loading="loading"
        :show-table-setting="false"
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
          columnWidth: 40,
          fixed: true
        }"
        :pageParameter="queryParam.pageParameter"
        :total="totalPage"
        :customRow="customRow"
        @change="handleTableChange"
        @refresh="getList"
      >
        <template #toolBarRight>
          <a-input-search
            class="opt-btn-commonsearch"
            style="width: 200px"
            placeholder="请输入检查编号;检查编号+3位数流水号或所属年份"
            :allow-clear="true"
            @search="handleKeyWordQuery"
          />
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
        </template>
      </AvicTable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { QmsQualityInspectionDto } from '@/api/avic/myportal/qms/QmsQualityInspectionApi'; // 引入模块DTO
import { listQmsQualityInspectionByPage } from '@/api/avic/myportal/qms/QmsQualityInspectionApi'; // 引入模块API
const $emit = defineEmits(['select', 'handleRowDblClick']);
const qmsQualityInspectionSelect = ref();
const { proxy } = getCurrentInstance();
const layout = {
  labelCol: { flex: '0 0 120px' },
  wrapperCol: { flex: '1 1 0' }
};
const colLayout = proxy.$colLayout4; // 页面表单响应式布局对象
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    ellipsis: true,
    width: 60,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '检查编号;检查编号+3位数流水号',
    dataIndex: 'inspectionCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '所属年份',
    dataIndex: 'forYear',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查名称;对XXX的专项检查',
    dataIndex: 'inspectName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '被检查单位ID;检查单位名称/代号',
    dataIndex: 'inspectedDeptId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '被检查单位CODE',
    dataIndex: 'inspectedDeptCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '被检查单位',
    dataIndex: 'inspectedDeptName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '涉及型号;多选，逗号分隔',
    dataIndex: 'model',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查时间',
    dataIndex: 'inspectionTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查投入',
    dataIndex: 'inspectionWorkload',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '检查组长ID',
    dataIndex: 'leaderStaffId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组长CODE',
    dataIndex: 'leaderStaffCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组长',
    dataIndex: 'leaderStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组成员ID',
    dataIndex: 'memberStaffId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组成员CODE',
    dataIndex: 'memberStaffCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组成员',
    dataIndex: 'memberStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '问题数',
    dataIndex: 'problemCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '完成整改数',
    dataIndex: 'completeCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '完成时间',
    dataIndex: 'completeTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '业务状态',
    dataIndex: 'status',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '密级',
    dataIndex: 'secretLevelName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '是否已删除',
    dataIndex: 'ynDeleted',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '排序',
    dataIndex: 'orderBy',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    visible: false,
    width: 120,
    fixed: 'right'
  }
];
const queryForm = ref<QmsQualityInspectionDto>({});
const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 20 // 每页条数
  },
  searchParams: {
    ...queryForm
  },
  keyWord: ref(''), // 快速查询数据
  sidx: null, // 排序字段
  sord: null // 排序方式: desc降序 asc升序
});
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]); // 选中行集合
const loading = ref(false);
const  totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码

onMounted(() => {
  // 加载表格数据
  getList();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
});
/** 查询数据  */
function getList() {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = []; // 清空选中
  loading.value = true;
  listQmsQualityInspectionByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      totalPage.value = 0;
      loading.value = false;
    });
}
/** 获取当前用户对应的文档密级 */
function getUserFileSecretList() {
  proxy.$getUserFileSecretLevelList(result => {
    secretLevelList.value = result;
  });
}
/** 高级查询 查询按钮操作 */
function handleQuery() {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}
/** 高级查询 重置按钮操作 */
function resetQuery() {
  queryForm.value = {};
  handleQuery();
}
/** 高级查询 展开/收起 */
function toggleAdvanced() {
  advanced.value = !advanced.value;
}
/** 快速查询逻辑 */
function handleKeyWordQuery(value) {
  const keyWord = {
    inspectionCode: value,
    forYear: value
  };
  queryParam.keyWord = JSON.stringify(keyWord);
  queryParam.pageParameter.page = 1;
  getList();
}

/** 勾选复选框时触发 */
function onSelectChange(rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
  // 传出选中项
  $emit('select', selectedRows.value);
}
/** 表格排序 */
function handleTableChange(pagination, _filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}
/** 行双击事件 */
function customRow (record) {
  return {
    on: {
      dblclick: (event, record, index) => {
        $emit('handleRowDblClick', [record]);
      }
    }
  };
}
</script>


