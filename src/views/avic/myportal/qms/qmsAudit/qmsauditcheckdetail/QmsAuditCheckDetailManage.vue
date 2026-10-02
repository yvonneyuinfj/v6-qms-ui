<template>
  <div class="content-wrapper">
    <!-- 表格组件 -->
    <div class="table-wrapper">
      <AvicTable
        ref="qmsAuditCheckDetail"
        table-key="qmsAuditCheckDetail"
        :columns="columns"
        :row-key="record => record.id"
        :data-source="list"
        :loading="loading"
        :pageParameter="queryParam.pageParameter"
        :total="totalPage"
        :customRow="
          record => {
            return {
              onClick: () => {
                handleRowSelection(record);
              }
            };
          }
        "
        @change="handleTableChange"
        @refresh="getList"
      >
        <template #toolBarLeft>
          <div class="aecc-leftbar-title">检查明细</div>
        </template>
        <template #toolBarRight>
          <div></div>
          <a-space>
            <a-button
              title="添加"
              type="primary"
              @click="handleAdd"
            >
              <template #icon>
                <plus-outlined/>
              </template>
              添加
            </a-button>
          </a-space>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
          <template v-else-if="column.dataIndex === 'checkContent'">
            <a @click.stop="handleDetail(record)">
              {{ record.checkContent }}
            </a>
          </template>
          <template v-if="column.dataIndex === 'action'">
            <a-button
              type="link"
              class="inner-btn"
              @click="handleEdit(record.id)"
            >
              编辑
            </a-button>
            <a-button
              type="link"
              class="inner-btn"
              @click="handleDelete([record.id], 'row')"
            >
              删除
            </a-button>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 编辑页面弹窗 -->
    <qms-audit-check-detail-edit
      v-if="showEditModal"
      ref="editModal"
      :form-id="formId"
      @reloadData="getList"
      @close="showEditModal = false"
    />
    <qms-audit-check-detail
      v-if="showDetailModal"
      :form-id="formId"
      @close="showDetailModal = false"
    />
    <qms-audit-check-detail-add
      v-if="showAddModal"
      @close="showAddModal = false"
      :mainId="mainId"
    />
  </div>
</template>
<script lang="ts" setup>
import { delQmsAuditCheckDetail, listQmsAuditCheckDetailByPage } from '@/api/avic/myportal/qms/QmsAuditCheckDetailApi'; // 引入模块API
import QmsAuditCheckDetailEdit from './QmsAuditCheckDetailEdit.vue';
import QmsAuditCheckDetail from '@/views/avic/myportal/qms/qmsAudit/qmsauditcheckdetail/QmsAuditCheckDetail.vue';
import QmsAuditCheckDetailAdd from '@/views/avic/myportal/qms/qmsAudit/qmsauditcheckdetail/QmsAuditCheckDetailAdd.vue'; // 引入编辑页面组件
const { proxy } = getCurrentInstance();
const props = defineProps({
  // 主表选中项的keys集合
  mainId: {
    type: String,
    default: ''
  }
});
const columns = [
  {
    title: '序号',
    dataIndex: 'sequenceCode',
    key: 'sequenceCode',
    width: 50,
    resizable: true,
    align: 'center'
  },
  {
    title: '条款号',
    dataIndex: 'clauseNo',
    key: 'clauseNo',
    ellipsis: true,
    width: 80,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查内容',
    dataIndex: 'checkContent',
    key: 'checkContent',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查型号',
    dataIndex: 'checkModel',
    key: 'checkModel',
    ellipsis: true,
    width: 200,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查记录',
    dataIndex: 'checkRecord',
    key: 'checkRecord',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '符合情况',
    dataIndex: 'conformityResultName',
    key: 'conformityResultName',
    ellipsis: true,
    width: 150,
    resizable: true,
    align: 'center'
  },
  {
    title: '建议内容',
    dataIndex: 'adviceContent',
    key: 'adviceContent',
    ellipsis: true,
    width: 150,
    resizable: true,
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    width: 120,
    align: 'center',
    fixed: 'right'
  }
];
const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 20 // 每页条数
  },
  searchParams: {
    recordId: ''
  },
  keyWord: ref(''), // 快速查询数据
  sidx: null, // 排序字段
  sord: null // 排序方式: desc降序 asc升序
});
const list = ref([]); // 表格数据集合
const selectedRows = ref([]); // 选中行集合
const selectedRowKeys = ref([]); // 选中数据主键集合
const loading = ref(false);
const delLoading = ref(false);
const totalPage = ref(0);
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
  selectedRows.value = [];
  loading.value = true;
  queryParam.searchParams.recordId = props.mainId ? props.mainId : '-1';
  listQmsAuditCheckDetailByPage(queryParam)
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

/** 快速查询逻辑 */
function handleKeyWordQuery(value) {
  const keyWord = {
    planId: value,
    noticeId: value
  };
  queryParam.keyWord = JSON.stringify(keyWord);
  queryParam.pageParameter.page = 1;
  getList();
}

/** 子表删除 */
function handleDelete(ids, type) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  proxy.$confirm({
    title: `确认要删除${type == 'row' ? '当前行的' : '选择的'}数据吗？`,
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsAuditCheckDetail(ids)
        .then(res => {
          if (res.success) {
            proxy.$message.success('删除成功！');
            // 清空选中
            selectedRowKeys.value = [];
            selectedRows.value = [];
            getList();
          }
          delLoading.value = false;
        })
        .catch(() => {
          delLoading.value = false;
        });
    }
  });
}

/** 勾选复选框时触发 */
function onSelectChange(rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
}

/** 表头排序 */
function handleTableChange(pagination, _filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}

/** 表格行选中 */
function handleRowSelection(record) {
  let selectIds = [...selectedRowKeys.value];
  // 多选
  if (!selectIds.includes(record.id)) {
    // 选中
    selectedRowKeys.value.push(record.id);
  } else {
    // 取消选中
    selectedRowKeys.value = selectedRowKeys.value.filter(item => item != record.id);
  }
}

const formId = ref('');
const showEditModal = ref(false);

function handleEdit(id) {
  formId.value = id;
  showEditModal.value = true;
}

const showDetailModal = ref(false);

/** 详细 */
function handleDetail(record) {
  formId.value = record.id;
  showDetailModal.value = true;
}

const showAddModal = ref(false); // 是否展示添加弹窗
/** 添加 */
function handleAdd() {
  if(!props.mainId){
    proxy.$message.error('请选择一条检查记录');
    return;
  }
  showAddModal.value = true;
}

const mainId = ref('');
watch(
  () => props.mainId,
  newVal => {
    if (newVal) {
      mainId.value = newVal;
      getList(); // 查询表格数据
    } else {
      mainId.value = '';
      selectedRowKeys.value = []; // 清空选中
      selectedRows.value = [];
      list.value = [];
      totalPage.value = 0;
    }
  },
  { immediate: true }
);
</script>

