<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('model')">
          <a-form-item name="model" label="型号" :rules="fieldRequired('model')" has-feedback>
            <a-input
              v-model:value="form.model"
              :auto-focus="true"
              :disabled="fieldDisabled('model')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('managerdept')">
          <a-form-item name="managerdept" label="总师单位" :rules="fieldRequired('managerdept')" has-feedback>
            <a-input
              v-model:value="form.managerdept"
              :disabled="fieldDisabled('managerdept')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('productdept')">
          <a-form-item name="productdept" label="总承单位" :rules="fieldRequired('productdept')" has-feedback>
            <a-input
              v-model:value="form.productdept"
              :disabled="fieldDisabled('productdept')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('armyRepresentative')">
          <a-form-item name="armyRepresentative" label="军代表" :rules="fieldRequired('armyRepresentative')" has-feedback>
            <a-input
              v-model:value="form.armyRepresentative"
              :disabled="fieldDisabled('armyRepresentative')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('zlbFzs')">
          <a-form-item name="zlbFzs" label="副总师" :rules="fieldRequired('zlbFzs')" has-feedback>
            <a-input
              v-model:value="form.zlbFzs"
              :disabled="fieldDisabled('zlbFzs')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('kybMasterId')">
          <a-form-item name="kybMasterId" label="科研部主管ID" :rules="fieldRequired('kybMasterId')" has-feedback>
            <a-input
              v-model:value="form.kybMasterId"
              :disabled="fieldDisabled('kybMasterId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('kybMasterCode')">
          <a-form-item name="kybMasterCode" label="科研部主管CODE" :rules="fieldRequired('kybMasterCode')" has-feedback>
            <a-input
              v-model:value="form.kybMasterCode"
              :disabled="fieldDisabled('kybMasterCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('kybMasterName')">
          <a-form-item name="kybMasterName" label="科研部主管" :rules="fieldRequired('kybMasterName')" has-feedback>
            <a-input
              v-model:value="form.kybMasterName"
              :disabled="fieldDisabled('kybMasterName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('zlbMasterId')">
          <a-form-item name="zlbMasterId" label="质量部主管ID" :rules="fieldRequired('zlbMasterId')" has-feedback>
            <a-input
              v-model:value="form.zlbMasterId"
              :disabled="fieldDisabled('zlbMasterId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('zlbMasterCode')">
          <a-form-item name="zlbMasterCode" label="质量部主管CODE" :rules="fieldRequired('zlbMasterCode')" has-feedback>
            <a-input
              v-model:value="form.zlbMasterCode"
              :disabled="fieldDisabled('zlbMasterCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('zlbMasterName')">
          <a-form-item name="zlbMasterName" label="质量部主管" :rules="fieldRequired('zlbMasterName')" has-feedback>
            <a-input
              v-model:value="form.zlbMasterName"
              :disabled="fieldDisabled('zlbMasterName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('secretLevel')">
          <a-form-item name="secretLevel" label="密级" :rules="fieldRequired('secretLevel')" has-feedback>
            <a-select
              v-model:value="form.secretLevel"
              :get-popup-container="triggerNode => triggerNode.parentNode"
              option-filter-prop="children"
              :show-search="true"
              :allow-clear="true"
              :disabled="fieldDisabled('secretLevel')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynDeleted')">
          <a-form-item name="ynDeleted" label="是否已删除" :rules="fieldRequired('ynDeleted')" has-feedback>
            <a-input
              v-model:value="form.ynDeleted"
              :disabled="fieldDisabled('ynDeleted')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('remark')">
          <a-form-item name="remark" label="备注" :rules="fieldRequired('remark')" has-feedback>
            <a-input
              v-model:value="form.remark"
              :disabled="fieldDisabled('remark')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('orderBy')">
          <a-form-item name="orderBy" label="排序" :rules="fieldRequired('orderBy')" has-feedback>
            <a-input-number
              v-model:value="form.orderBy"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('orderBy')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('parentId')">
          <a-form-item name="parentId" label="父节点ID" :rules="fieldRequired('parentId')" has-feedback>
            <a-input
              v-model:value="form.parentId"
              :disabled="fieldDisabled('parentId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('treeSort')">
          <a-form-item name="treeSort" label="本级排序" :rules="fieldRequired('treeSort')" has-feedback>
            <a-input-number
              v-model:value="form.treeSort"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('treeSort')"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsBasicModelInfoForm, emits } from './ts/QmsBasicModelInfoForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  bpmInstanceObject: {
    type: Object
  },
  params: {
    type: Object,
    required: false,
    default: null
  },
  bpmOperatorRefresh: {
    type: Function
  }
});
const emit = defineEmits(emits);
const {
  form,
  formRef,
  layout,
  colLayout,
  secretLevelList,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsBasicModelInfoForm({
  props: props,
  emit: emit
});
defineExpose({
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
});
</script>
