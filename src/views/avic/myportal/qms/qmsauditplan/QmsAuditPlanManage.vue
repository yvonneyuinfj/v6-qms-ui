<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item label="审核计划计划编号">
              <a-input
                v-model:value="queryForm.planCode"
                placeholder="请输入审核计划计划编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="审核活动名称">
              <a-input
                v-model:value="queryForm.planName"
                placeholder="请输入审核活动名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="年度">
              <a-input
                v-model:value="queryForm.forYear"
                placeholder="请输入年度"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门ID">
              <a-input
                v-model:value="queryForm.auditType"
                placeholder="请输入责任部门ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门编号">
              <a-input
                v-model:value="queryForm.auditName"
                placeholder="请输入责任部门编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门">
              <a-input
                v-model:value="queryForm.auditMonth"
                placeholder="请输入责任部门"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="受审部门ID">
              <a-input
                v-model:value="queryForm.auditeeDeptId"
                placeholder="请输入受审部门ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="受审部门CODE">
              <a-input
                v-model:value="queryForm.auditeeDeptCode"
                placeholder="请输入受审部门CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="受审部门">
              <a-input
                v-model:value="queryForm.auditeeDeptName"
                placeholder="请输入受审部门"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核依据">
              <a-input
                v-model:value="queryForm.auditBasis"
                placeholder="请输入审核依据"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核条款">
              <a-input
                v-model:value="queryForm.auditClause"
                placeholder="请输入审核条款"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="型号/项目">
              <a-input
                v-model:value="queryForm.modelProject"
                placeholder="请输入型号/项目"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核范围">
              <a-input
                v-model:value="queryForm.auditScope"
                placeholder="请输入审核范围"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核员ID">
              <a-input
                v-model:value="queryForm.auditorId"
                placeholder="请输入审核员ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核员CODE">
              <a-input
                v-model:value="queryForm.auditorCode"
                placeholder="请输入审核员CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审核员">
              <a-input
                v-model:value="queryForm.auditorName"
                placeholder="请输入审核员"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="计划状态">
              <a-input
                v-model:value="queryForm.planStatus"
                placeholder="请输入计划状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="计划来源">
              <a-input
                v-model:value="queryForm.planSource"
                placeholder="请输入计划来源"
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
    <!-- 树形表格 -->
    <div class="table-wrapper">
      <AvicTable
        ref="qmsAuditPlan"
        class="treegrid"
        table-key="qmsAuditPlan"
        :columns="columns"
        :row-key="record => record.id"
        :data-source="list"
        :loading="loading"
        :pagination="false"
        :expand-row-by-click="true"
        lineField="planName"
        :indent-size="25"
        v-model:expanded-row-keys="expandedRowKeys"
        @handleRowSelection="handleRowSelection"
        @expand="handleExpand"
      >
        <template #toolBarLeft>
          <a-space>
            <a-button
              type="primary"
              title="添加"
              @click="handleAdd(rootTree)"
            >
              <template #icon>
                <plus-outlined />
              </template>
              添加
            </a-button>
          </a-space>
        </template>
        <template #toolBarRight>
          <a-input-search
            class="opt-btn-commonsearch"
            style="width: 200px"
            v-model:value="searchKeyWord"
            placeholder="请输入审核计划计划编号或审核活动名称"
            :allow-clear="true"
            @search="handleKeyWordQuery"
          />
        </template>
        <template #bodyCell="{ column, text, record }">
          <!-- 显示字段 -->
          <template v-if="column.dataIndex === 'planCode'">
            <AvicIcon
              v-if="!record.expanded && record.treeLeaf == 'N'"
              svg="avic-folder-3-fill"
              color="#ffb800"
            />
            <AvicIcon
              v-if="record.expanded && record.treeLeaf == 'N'"
              svg="avic-folder-open-fill"
              color="#ffb800"
            />
            <avic-icon v-if="record.treeLeaf == 'Y'" svg="avic-file-fill" color="#3370ff" />
            <a
              href="javascript:;"
              class="table-detail-link"
              :title="record.demoTitle"
              @click.stop="handleDetail(record)"
            >
              {{ record.planCode }}
            </a>
          </template>
          <template v-else-if="column.dataIndex === 'action'">
            <a-button
              type="link"
              class="inner-btn"
              @click.stop="handleAdd(record)">
              添加
            </a-button>
            <a-button
              type="link"
              class="inner-btn"
              @click.stop="handleEdit(record)">
              编辑
            </a-button>
            <a-button
              v-hasPermi="['qmsAuditPlan:del']"
              v-if="record.treeLeaf == 'Y'"
              type="link"
              class="inner-btn"
              @click.stop="handleDelete(record)">
              删除
            </a-button>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 添加页面弹窗 -->
    <QmsAuditPlanAdd
      v-if="showAddModal"
      ref="addModal"
      :default-tree-level="treeLevel"
      :parent-id="parentNodeId"
      :parent-title="parentTitle"
      @reloadData="reloadData"
      @close="showAddModal = false"
    />
    <!-- 编辑页面弹窗 -->
    <QmsAuditPlanEdit
      v-if="showEditModal"
      ref="editModal"
      :parent-id="parentNodeId"
      :parent-title="parentTitle"
      :form-id="formId"
      @reloadData="reloadData"
      @close="showEditModal = false"
    />
    <!-- 详情页面弹窗 -->
    <QmsAuditPlanDetail
      v-if="showDetailModal"
      ref="detailModal"
      :parent-id="parentNodeId"
      :parent-title="parentTitle"
      :form-id="formId"
      @close="showDetailModal = false"
    />
  </div>
</template>
<script lang="ts" setup>
import type { QmsAuditPlanDto } from '@/api/avic/myportal/qms/QmsAuditPlanApi'; // 引入模块DTO
import { getQmsAuditPlanNode, searchQmsAuditPlan, delQmsAuditPlan, expandQmsAuditPlan } from '@/api/avic/myportal/qms/QmsAuditPlanApi'; // 引入模块API
import { expendNodeForTreegrid, getAllNodeForTreegrid, findNodeForTreegrid, deleteNodeForTreegrid, getExpandedKeys } from '@/utils/tree-util'; // 引入树公共方法
import QmsAuditPlanAdd from './QmsAuditPlanAdd.vue'; // 引入添加页面组件
import QmsAuditPlanEdit from './QmsAuditPlanEdit.vue'; // 引入编辑页面组件
import QmsAuditPlanDetail from './QmsAuditPlanDetail.vue'; // 引入详情页面组件
const { proxy } = getCurrentInstance();
const layout = {
  labelCol: { flex: '0 0 120px' },
  wrapperCol: { flex: '1 1 0' }
};
const colLayout = proxy.$colLayout4; // 页面表单响应式布局对象
const columns = [
  {
    title: '审核计划计划编号',
    dataIndex: 'planCode',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核活动名称',
    dataIndex: 'planName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '年度',
    dataIndex: 'forYear',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '责任部门ID',
    dataIndex: 'auditType',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '责任部门编号',
    dataIndex: 'auditName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '责任部门',
    dataIndex: 'auditMonth',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '受审部门ID',
    dataIndex: 'auditeeDeptId',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '受审部门CODE',
    dataIndex: 'auditeeDeptCode',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '受审部门',
    dataIndex: 'auditeeDeptName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核依据',
    dataIndex: 'auditBasis',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核条款',
    dataIndex: 'auditClause',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '型号/项目',
    dataIndex: 'modelProject',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核范围',
    dataIndex: 'auditScope',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核员ID',
    dataIndex: 'auditorId',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核员CODE',
    dataIndex: 'auditorCode',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '审核员',
    dataIndex: 'auditorName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '计划状态',
    dataIndex: 'planStatus',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '计划来源',
    dataIndex: 'planSource',
    ellipsis: true,
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
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    ellipsis: true,
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
    width: 150,
    fixed: 'right'
  }
];
const queryForm = ref<QmsAuditPlanDto>({}); // 高级查询对象
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
const showAddModal = ref(false); // 是否展示添加弹窗
const showEditModal = ref(false); // 是否展示编辑弹窗
const showDetailModal = ref(false); // 是否展示详情弹窗
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]); // 选中数据行集合
const loading = ref(false);
const searchKeyWord = ref(''); // keyword信息
const isSearchByKeyWord = ref(false); // keyword查询标识
const isAdvancedSearch = ref(false); // 高级查询标识
const expandedRowKeys = ref([]); // 展开数据集合
const rootTree = ref(null); // 树结构根节点
const parentNodeId = ref(''); // 添加节点的初始父节点
const parentTitle = ref(''); // 初始父节点名称
const treeLevel = ref(1);
const secretLevelList = ref([]); // 密级通用代码

onMounted(() => {
  // 加载表格数据
  getRootNode();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
});

/** 加载树表格数据  */
function getRootNode() {
  rootTree.value = null;
  loading.value = true;
  const expandLevel = 2;
  list.value = [];
  expandedRowKeys.value = [];
  getQmsAuditPlanNode(expandLevel, '-1')
    .then(res => {
      if (res.success && res.data.length === 1) {
        rootTree.value = res.data[0];
        list.value = res.data[0].children;
        getExpandedKeys(list.value, expandLevel, expandedRowKeys.value);
        loading.value = false;
      } else {
        proxy.$message.error('初始化根节点失败！');
        loading.value = false;
      }
    })
    .catch(() => {
      console.error('获取根节点失败！');
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
  // 查询区内容全部为空时不进行查询操作
  if (proxy.$checkJsonIsAllBlank(queryForm.value)) {
    proxy.$message.warning('请输入查询条件！');
    return;
  }
  loading.value = true;
  isSearchByKeyWord.value = false;
  isAdvancedSearch.value = true;
  // 高级查询数据处理
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  searchTreegrid(null);
}
/** 高级查询 重置按钮操作 */
function resetQuery() {
  queryForm.value = {};
  getRootNode();
}
/** 高级查询 展开/收起 */
function toggleAdvanced() {
  advanced.value = !advanced.value;
}
/** 快速查询逻辑  */
function handleKeyWordQuery() {
  loading.value = true;
  isSearchByKeyWord.value = true;
  isAdvancedSearch.value = false;
  let value = searchKeyWord.value.trim();
  if (value.length) {
    const keyWord = {
      planCode: value,
      planName: value
    };
    queryParam.keyWord = JSON.stringify(keyWord);
    searchTreegrid(null);
  } else {
    isSearchByKeyWord.value = false;
    getRootNode();
  }
}
/** 添加 */
function handleAdd(parentTree) {
  treeLevel.value = parentTree.treeLevel;
  parentTitle.value = parentTree.planName;
  parentNodeId.value = parentTree.id;
  showAddModal.value = true;
}
/** 编辑 */
function handleEdit(row) {
  // 编辑节点
  parentNodeId.value = row.parentId;
  const parentNodes = findNodeForTreegrid(list.value, 'id', row.parentId);
  const parentNode = parentNodes.length == 1 ? parentNodes[0] : null;
  if (parentNode == null || parentNode.length == 0) {
    parentTitle.value = '根节点';
  } else {
    parentTitle.value = parentNode.planName;
  }
  formId.value = row.id;
  showEditModal.value = true;
}
/** 详情 */
function handleDetail(row) {
  parentNodeId.value = row.parentId;
  const parentNodes = findNodeForTreegrid(list.value, 'id', row.parentId);
  const parentNode = parentNodes.length == 1 ? parentNodes[0] : null;

  if (parentNode == null || parentNode.length == 0) {
    parentTitle.value = '根节点';
  } else {
    parentTitle.value = parentNode.planName;
  }
  formId.value = row.id;
  showDetailModal.value = true;
}
/** 删除 */
function handleDelete(treeNode) {
  proxy.$confirm({
    title: '确认要删除选择的数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      loading.value = true;
      delQmsAuditPlan(treeNode.id)
        .then(res => {
          if (res.success) {
            // 匹配第一层节点并删除
            if (treeNode.treeLevel == 2) {
              let beforeLength = list.value.length;
              list.value = list.value.filter(item => item.id !== treeNode.id);
              if (beforeLength != list.value.length) {
                loading.value = false;
                return;
              }
            } else {
              // 递归删除
              deleteNodeForTreegrid(list.value, treeNode);
            }
            proxy.$message.success('删除成功！'); // 提示成功
          }
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    }
  });
}
/** 添加、编辑、删除、配置权限后默认展开至已修改项 */
function setExpandedRowKeys(treeId) {
  const nodes = findNodeForTreegrid(list.value, 'id', treeId);
  const node = nodes.length == 1 ? nodes[0] : null;
  if (!node) {
    expandedRowKeys.value = [];
  } else {
    let rowKeys = node.treePath.split('/');
    'Y' == node.treeLeaf || !node.children ? rowKeys.pop() : rowKeys;
    expandedRowKeys.value = rowKeys;
  }
}
/** 搜索树 */
function searchTreegrid(expandTreeId) {
  list.value = [];
  expandedRowKeys.value = [];

  searchQmsAuditPlan(queryParam)
    .then(res => {
      if (res.success) {
        list.value = res.data[0].children || [];
        //查询后展开全部节点
        expandedRowKeys.value = getAllNodeForTreegrid(list.value, 'id');
        if (proxy.$objIsNotBlank(expandTreeId)) {
          setExpandedRowKeys(expandTreeId);
        }
      } else {
        list.value = [];
      }
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      loading.value = false;
    });
}
/** 重载数据 */
function reloadData(expandTreeId) {
  loading.value = true;
  if (isSearchByKeyWord.value) {
    let value = searchKeyWord.value.trim();
    const keyWord = {
      planCode: value,
      planName: value
    };
    queryParam.keyWord = JSON.stringify(keyWord);
    searchTreegrid(expandTreeId);
  } else if (isAdvancedSearch.value) {
    // 高级查询数据处理
    queryParam.searchParams = queryForm.value;
    queryParam.keyWord = '';
    searchTreegrid(expandTreeId);
  } else {
    expandQmsAuditPlan(expandTreeId)
      .then(res => {
        if (res.success && res.data && res.data.length) {
          rootTree.value = res.data[0];
          list.value = res.data[0].children || [];
          setExpandedRowKeys(expandTreeId);
        } else {
          list.value = [];
        }
        loading.value = false;
      })
      .catch(() => {
        list.value = [];
        loading.value = false;
      });
  }
}
/** 展开父级 */
function handleExpand(expanded, record) {
  record.expanded = expanded;
  if (expanded) {
    if (record.treeLeaf == 'N' && (!record.children || !record.children.length)) {
      loading.value = true;

      getQmsAuditPlanNode(1, `${record.id}`)
        .then(res => {
          if (res.success) {
            expendNodeForTreegrid(list.value, record.id, res.data);
            expandedRowKeys.value.push(record.id);
          }
          loading.value = false;
        })
        .catch(() => {
          list.value = [];
        });
    } else {
      expandedRowKeys.value.push(record.id);
    }
  } else {
    expandedRowKeys.value = expandedRowKeys.value.filter(item => item != record.id);
  }
}
/** 记录选中项 */
function handleRowSelection(obj) {
  if (obj.selectedRowKeys) {
    selectedRowKeys.value = obj.selectedRowKeys;
  }
  if (obj.selectedRows) {
    selectedRows.value = obj.selectedRows;
  }
}
</script>
