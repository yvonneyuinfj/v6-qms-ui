<template>
  <AvicModal
    :visible="true"
    title="详情"
    width="1200px"
    height="600px"
    :centered="true"
    @cancel="closeModal"
  >
    <a-spin :spinning="loading">
      <a-form
        ref="formRef"
        :model="form"
        v-bind="layout"
        layout="horizontal"
       >
        <a-row :gutter="16">
          <!--年度-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年度">
              <a-select
                v-model:value="form.forYear"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                placeholder="请选择所属年度"
                disabled
              >
                <a-select-option
                  v-for="item in yearList"
                  :key="item"
                  :value="item"
                  disabled
                >
                  {{ item }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <!--目标层级-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveLevel" label="目标层级">
              <a-select
                v-model:value="form.objectiveLevel"
                style="width: 100%"
                placeholder="请选择层级"
                allowClear
                disabled
              >
                <a-select-option
                  v-for="select in objectiveLevelList"
                  :key="select.sysLookupTlId"
                  :value="select.lookupCode"
                  :title="select.lookupName"
                >
                  {{ select.lookupName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <!--目标来源-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveSource" label="目标来源" has-feedback>
              <a-input
                v-model:value="form.objectiveSource"
                placeholder="请输入目标来源"
                disabled
              />
            </a-form-item>
          </a-col>
          <!--统计周期-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="dataStatCycle" label="统计周期">
              <a-select
                v-model:value="form.dataStatCycle"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                placeholder="请选择统计周期"
                disabled
              >
                <a-select-option
                  v-for="item in dataStatCycleList"
                  :key="item.sysLookupTlId"
                  :value="item.lookupCode"
                >
                  {{ item.lookupName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <!--考核/衡量指标-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="objectiveName" label="考核指标" has-feedback>
              <a-input
                v-model:value="form.objectiveName"
                :maxLength="256"
                placeholder="请输入考核/衡量指标"
                disabled
              />
            </a-form-item>
          </a-col>
          <!--指标说明-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="objectiveContent" label="指标说明">
              <a-textarea
                v-model:value="form.objectiveContent"
                :maxLength="512"
                :auto-size="{ minRows: 3}"
                placeholder="请输入指标说明"
                disabled
              />
            </a-form-item>
          </a-col>
          <!--指标属性-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="indicatorType" label="指标属性">
              <a-select
                v-model:value="form.indicatorType"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                placeholder="请选择指标属性"
                disabled
              >
                <a-select-option
                  v-for="item in indicatorTypeList"
                  :key="item.sysLookupTlId"
                  :value="item.lookupCode"
                >
                  {{ item.lookupName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <!--统计部门-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="统计部门">
              <AvicCommonSelect
                v-model:value="form.responsibleDeptId"
                type="deptSelect"
                placeholder="请选择统计部门"
                select-model="single"
                :defaultShowValue="form.responsibleDeptName"
                @callback="
                      result => {
                        form.responsibleDeptName = result.names;
                        form.responsibleDeptIdAlias = result.names;
                      }
                    "
                disabled
              />
            </a-form-item>
          </a-col>
          <!--建议承接部门-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="suggestAcceptDeptId" label="建议承接部门">
              <AvicCommonSelect
                v-model:value="form.suggestAcceptDeptId"
                type="deptSelect"
                placeholder="请选择建议承接部门"
                select-model="multi"
                :defaultShowValue="form.suggestAcceptDeptName"
                @callback="
                      result => {
                        form.suggestAcceptDeptName = result.names;
                        form.suggestAcceptDeptIdAlias = result.names;
                      }
                    "
                disabled
              />
            </a-form-item>
          </a-col>
          <!-- 排序 -->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="treeSort" label="排序" has-feedback>
              <a-input-number
                v-model:value="form.treeSort"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入本级排序"
                disabled
              />
            </a-form-item>
          </a-col>
          <!--密级-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="secretLevel" label="密级" has-feedback>
              <a-select
                v-model:value="form.secretLevel"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                :show-search="true"
                :allow-clear="true"
                placeholder="请选择密级"
                disabled
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
          <a-col v-bind="colLayout.cols2">
            <a-form-item label="附件">
              <AvicUploader
                element-id="1"
                form-type="detail"
                :allow-add="false"
                :allow-download="true"
                :allow-preview="true"
                :form-id="form.id"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
</template>
<script lang="ts" setup>
import { useQmsQualityObjectiveForm, emits } from './ts/QmsQualityObjectiveForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(emits);
const {
  form,
  formRef,
  layout,
  colLayout,
  loading,
  secretLevelList,
  closeModal,
  yearList,
  dataStatCycleList,
  objectiveLevelList,
  indicatorTypeList
} = useQmsQualityObjectiveForm({
  props: props,
  emit: emit
});
</script>


