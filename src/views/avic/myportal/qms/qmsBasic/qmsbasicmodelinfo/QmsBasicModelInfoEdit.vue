<template>
  <AvicModal
    :visible="true"
    title="编辑"
    width="960px"
    height="520px"
    :centered="true"
    @cancel="closeModal"
  >
    <a-spin :spinning="loading">
      <a-form
        ref="formRef"
        :model="form"
        :rules="rules"
        v-bind="layout"
        layout="horizontal"
       >
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="型号">
              <a-input
                v-model:value="form.model"
                :maxLength="200"
                :auto-focus="true"
                placeholder="请输入型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="secretLevel" label="密级" has-feedback>
              <a-select
                v-model:value="form.secretLevel"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynDeleted" label="是否已删除">
              <a-input
                v-model:value="form.ynDeleted"
                :maxLength="2"
                placeholder="请输入是否已删除"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="remark" label="备注">
              <a-input
                v-model:value="form.remark"
                :maxLength="2000"
                placeholder="请输入备注"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="orderBy" label="排序">
              <a-input-number
                v-model:value="form.orderBy"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入排序"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="managerDept" label="总师单位">
              <a-input
                v-model:value="form.managerDept"
                :maxLength="200"
                placeholder="请输入总师单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="productDept" label="总承单位">
              <a-input
                v-model:value="form.productDept"
                :maxLength="200"
                placeholder="请输入总承单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="milRepId" label="军代表ID">
              <a-input
                v-model:value="form.milRepId"
                :maxLength="2000"
                placeholder="请输入军代表ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="milRepCode" label="军代表CODE">
              <a-input
                v-model:value="form.milRepCode"
                :maxLength="500"
                placeholder="请输入军代表CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="milRepName" label="军代表">
              <a-input
                v-model:value="form.milRepName"
                :maxLength="1000"
                placeholder="请输入军代表"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefDesignerId" label="副总师ID">
              <a-input
                v-model:value="form.deputyChiefDesignerId"
                :maxLength="2000"
                placeholder="请输入副总师ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefDesignerCode" label="副总师CODE">
              <a-input
                v-model:value="form.deputyChiefDesignerCode"
                :maxLength="500"
                placeholder="请输入副总师CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefDesignerName" label="副总师">
              <a-input
                v-model:value="form.deputyChiefDesignerName"
                :maxLength="1000"
                placeholder="请输入副总师"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rdManagerId" label="科研部主管ID">
              <a-input
                v-model:value="form.rdManagerId"
                :maxLength="2000"
                placeholder="请输入科研部主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rdManagerCode" label="科研部主管CODE">
              <a-input
                v-model:value="form.rdManagerCode"
                :maxLength="500"
                placeholder="请输入科研部主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rdManagerName" label="科研部主管">
              <a-input
                v-model:value="form.rdManagerName"
                :maxLength="1000"
                placeholder="请输入科研部主管"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qaManagerId" label="质量部主管ID">
              <a-input
                v-model:value="form.qaManagerId"
                :maxLength="2000"
                placeholder="请输入质量部主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qaManagerCode" label="质量部主管CODE">
              <a-input
                v-model:value="form.qaManagerCode"
                :maxLength="500"
                placeholder="请输入质量部主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qaManagerName" label="质量部主管">
              <a-input
                v-model:value="form.qaManagerName"
                :maxLength="1000"
                placeholder="请输入质量部主管"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="保存" type="primary" :loading="loading" @click="saveForm">保存</a-button>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
</template>
<script lang="ts" setup>
import { useQmsBasicModelInfoForm, emits } from './ts/QmsBasicModelInfoForm'; // 引入表单ts
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
  rules,
  layout,
  colLayout,
  loading,
  secretLevelList,
  saveForm,
  closeModal
} = useQmsBasicModelInfoForm({
  props: props,
  emit: emit
});
</script>


