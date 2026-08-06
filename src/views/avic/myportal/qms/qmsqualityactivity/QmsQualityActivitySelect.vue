<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item label="活动编号;自动生成，QC/BZ/GG年份号-3位流水号">
              <a-input
                v-model:value="queryForm.activityCode"
                placeholder="请输入活动编号;自动生成，QC/BZ/GG年份号-3位流水号"
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
            <a-form-item label="活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目">
              <a-input
                v-model:value="queryForm.activityType"
                placeholder="请输入活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="课题/班组/项目名称">
              <a-input
                v-model:value="queryForm.activityName"
                placeholder="请输入课题/班组/项目名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="成员ID">
              <a-input
                v-model:value="queryForm.membebrId"
                placeholder="请输入成员ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="成员CODE">
              <a-input
                v-model:value="queryForm.memberCode"
                placeholder="请输入成员CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="成员">
              <a-input
                v-model:value="queryForm.memberName"
                placeholder="请输入成员"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="小组名称;QC小组使用">
              <a-input
                v-model:value="queryForm.groupName"
                placeholder="请输入小组名称;QC小组使用"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="活动结束时间;月度进展生成截止依据(起)">
              <a-date-picker
                v-model:value="queryForm.deadlineBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择活动结束时间;月度进展生成截止依据(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.deadlineEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="活动结束时间;月度进展生成截止依据(止)">
              <a-date-picker
                v-model:value="queryForm.deadlineEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择活动结束时间;月度进展生成截止依据(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.deadlineBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请人ID">
              <a-input
                v-model:value="queryForm.applyStaffId"
                placeholder="请输入申请人ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请人CODE">
              <a-input
                v-model:value="queryForm.applyStaffCode"
                placeholder="请输入申请人CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请人姓名">
              <a-input
                v-model:value="queryForm.applyStaffName"
                placeholder="请输入申请人姓名"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请部门ID">
              <a-input
                v-model:value="queryForm.applyDeptId"
                placeholder="请输入申请部门ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请部门CODE">
              <a-input
                v-model:value="queryForm.applyDeptCode"
                placeholder="请输入申请部门CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请部门">
              <a-input
                v-model:value="queryForm.applyDeptName"
                placeholder="请输入申请部门"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请时间(起)">
              <a-date-picker
                v-model:value="queryForm.applyTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择申请时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.applyTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="申请时间(止)">
              <a-date-picker
                v-model:value="queryForm.applyTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择申请时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.applyTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="组长/负责人ID">
              <a-input
                v-model:value="queryForm.leaderStaffId"
                placeholder="请输入组长/负责人ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="组长/负责人CODE">
              <a-input
                v-model:value="queryForm.leaderStaffCode"
                placeholder="请输入组长/负责人CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="组长/负责人">
              <a-input
                v-model:value="queryForm.leaderStaffName"
                placeholder="请输入组长/负责人"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="涉及型号/项目">
              <a-input
                v-model:value="queryForm.modelProject"
                placeholder="请输入涉及型号/项目"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="课题类型;QC小组：问题解决型/创新型">
              <a-input
                v-model:value="queryForm.topicType"
                placeholder="请输入课题类型;QC小组：问题解决型/创新型"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="课题来源;QC小组：指令型课题、指导型课题、自选课题">
              <a-input
                v-model:value="queryForm.topicSource"
                placeholder="请输入课题来源;QC小组：指令型课题、指导型课题、自选课题"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="选题理由;QC小组填写">
              <a-input
                v-model:value="queryForm.selectionReason"
                placeholder="请输入选题理由;QC小组填写"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="活动目标">
              <a-input
                v-model:value="queryForm.activityGoal"
                placeholder="请输入活动目标"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他">
              <a-input
                v-model:value="queryForm.projectCategory"
                placeholder="请输入攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他">
              <a-input
                v-model:value="queryForm.projectSource"
                placeholder="请输入项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="班组基本情况;质量信得过班组">
              <a-input
                v-model:value="queryForm.teamBasicInfo"
                placeholder="请输入班组基本情况;质量信得过班组"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="识别需求;质量信得过班组">
              <a-input
                v-model:value="queryForm.requirmentIdentification"
                placeholder="请输入识别需求;质量信得过班组"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="明确目标;质量信得过班组">
              <a-input
                v-model:value="queryForm.objectiveDefinition"
                placeholder="请输入明确目标;质量信得过班组"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="有效实施;质量信得过班组">
              <a-input
                v-model:value="queryForm.effectiveImplementation"
                placeholder="请输入有效实施;质量信得过班组"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="成效检查;质量信得过班组">
              <a-input
                v-model:value="queryForm.effectCheck"
                placeholder="请输入成效检查;质量信得过班组"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="攻关项目简介;攻关项目">
              <a-input
                v-model:value="queryForm.projectIntro"
                placeholder="请输入攻关项目简介;攻关项目"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="攻关目标;攻关项目">
              <a-input
                v-model:value="queryForm.projectGoal"
                placeholder="请输入攻关目标;攻关项目"
                :allow-clear="true"
                @pressEnter="handleQuery"
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
            <a-form-item label="流程实例ID">
              <a-input
                v-model:value="queryForm.processInstanceId"
                placeholder="请输入流程实例ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="流程状态">
              <a-input
                v-model:value="queryForm.processStatus"
                placeholder="请输入流程状态"
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
        ref="qmsQualityActivitySelect"
        table-key="qmsQualityActivitySelect"
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
            placeholder="请输入活动编号;自动生成，QC/BZ/GG年份号-3位流水号或所属年份"
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
import type { QmsQualityActivityDto } from '@/api/avic/myportal/qms/QmsQualityActivityApi'; // 引入模块DTO
import { listQmsQualityActivityByPage } from '@/api/avic/myportal/qms/QmsQualityActivityApi'; // 引入模块API
const $emit = defineEmits(['select', 'handleRowDblClick']);
const qmsQualityActivitySelect = ref();
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
    title: '活动编号;自动生成，QC/BZ/GG年份号-3位流水号',
    dataIndex: 'activityCode',
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
    title: '活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目',
    dataIndex: 'activityType',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '课题/班组/项目名称',
    dataIndex: 'activityName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '成员ID',
    dataIndex: 'membebrId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '成员CODE',
    dataIndex: 'memberCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '成员',
    dataIndex: 'memberName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '人数',
    dataIndex: 'memberCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  {
    title: '小组名称;QC小组使用',
    dataIndex: 'groupName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '活动结束时间;月度进展生成截止依据',
    dataIndex: 'deadline',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '申请人ID',
    dataIndex: 'applyStaffId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请人CODE',
    dataIndex: 'applyStaffCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请人姓名',
    dataIndex: 'applyStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门ID',
    dataIndex: 'applyDeptId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门CODE',
    dataIndex: 'applyDeptCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门',
    dataIndex: 'applyDeptName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '组长/负责人ID',
    dataIndex: 'leaderStaffId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '组长/负责人CODE',
    dataIndex: 'leaderStaffCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '组长/负责人',
    dataIndex: 'leaderStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '涉及型号/项目',
    dataIndex: 'modelProject',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '课题类型;QC小组：问题解决型/创新型',
    dataIndex: 'topicType',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '课题来源;QC小组：指令型课题、指导型课题、自选课题',
    dataIndex: 'topicSource',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '选题理由;QC小组填写',
    dataIndex: 'selectionReason',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '活动目标',
    dataIndex: 'activityGoal',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他',
    dataIndex: 'projectCategory',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他',
    dataIndex: 'projectSource',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '班组基本情况;质量信得过班组',
    dataIndex: 'teamBasicInfo',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '识别需求;质量信得过班组',
    dataIndex: 'requirmentIdentification',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '明确目标;质量信得过班组',
    dataIndex: 'objectiveDefinition',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '有效实施;质量信得过班组',
    dataIndex: 'effectiveImplementation',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '成效检查;质量信得过班组',
    dataIndex: 'effectCheck',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '攻关项目简介;攻关项目',
    dataIndex: 'projectIntro',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '攻关目标;攻关项目',
    dataIndex: 'projectGoal',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
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
    title: '流程实例ID',
    dataIndex: 'processInstanceId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '流程状态',
    dataIndex: 'processStatus',
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
const queryForm = ref<QmsQualityActivityDto>({});
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
  listQmsQualityActivityByPage(queryParam)
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
    activityCode: value,
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


