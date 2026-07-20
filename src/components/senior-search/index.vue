<template>
  <a-dropdown>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1" @click="saveModal">保存查询模板</a-menu-item>
        <a-menu-item key="2" @click="chooseModals">选择查询模板</a-menu-item>
      </a-menu>
    </template>
    <a-button shape="circle" type="primary">
      <search-outlined/>
    </a-button>
  </a-dropdown>
  <searchSave v-if="showSave" :tabName="tabName" @close="closeshowSave" :queryData="queryData"></searchSave>
  <searchChoose v-if="showChoose" :tabName="tabName" @close="closeShowChoose" @getBack="getBack"></searchChoose>
</template>
<script setup lang="ts">
import { listMdsAdvancedQuerySchemeByPage } from '@/api/avic/mms/mds/MdsAdvancedQuerySchemeApi';

const props = defineProps({
  modelValue: String,//绑定的内容
  // tab页名称
  tabName: {
    type: String,
    default: ''
  }
});

onMounted(() => {
  /**
   * 初始化获取默认方案
   * **/
  getDefault();
});

const emits = defineEmits(['refresh', 'update:modelValue']);
const { proxy } = getCurrentInstance();

const queryData = computed(() => {

  return props.modelValue;
});

import searchSave from './searchSave.vue';
import searchChoose from './searchChoose.vue';

const showSave = ref<boolean>(false);
const showChoose = ref<boolean>(false);

/**
 * 保存模板
 * **/
const saveModal = () => {
  showSave.value = true;
};

/**
 * 选择模板
 * **/
const chooseModals = () => {
  showChoose.value = true;
};

/**
 * 关闭选择模板
 * */
const closeShowChoose = () => {
  showChoose.value = false;
};

/**
 * 关闭保存框
 * */
const closeshowSave = () => {
  showSave.value = false;
};

/**
 * 勾选返回值
 * */
const getBack = (selectRow) => {
  if (Object.keys(JSON.parse(selectRow.queryCondition)).length === 0) {
    proxy.$message.error('当前条目没有搜索条件！');
    return;
  }
  emits('update:modelValue', JSON.parse(selectRow.queryCondition));
  nextTick(() => {
    emits('refresh');
  });
  // emits('getBack', JSON.parse(selectRow.queryCondition));
};

/** 获取默认方案 **/
const getDefault = () => {
  const url = window.location.href.split('/');
  const queryParam = {
    // 请求表格数据参数
    pageParameter: {
      page: 1, // 页数
      rows: 5 // 每页条数
    },
    searchParams: {
      schemeMenu: url[url.length - 2] + '/' + url[url.length - 1],
      schemeTab: props.tabName || null,
      attribute01: 'Y'
    }
  };
  listMdsAdvancedQuerySchemeByPage(queryParam)
    .then(response => {
      if (response.code == 200) {
        if (response.data.result.length > 0) {
          response.data.result.map(item => {
            if (item.attribute01 === 'Y') {
              getBack(item);
            }
          });
        }
      }
    });
};
</script>
<style scoped lang="less">

</style>
