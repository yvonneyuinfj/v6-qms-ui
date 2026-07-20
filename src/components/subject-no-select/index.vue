<template>
  <a-modal :visible="projectNameOpen" @cancel="projectNameCancel" :body-style="bodyStyle" @ok="projectNameSummit">
    <div style="height: 100%;overflow: scroll">
      <a-tree
        :tree-data="treeData"
        :default-expand-all="true"
        show-icon
        :show-line="true && { showLeafIcon: false }"
        @select="onSelect"
      >
        <template #icon="{ expanded, dataRef }">
          <AvicIcon v-if="dataRef.isLeaf" svg="avic-file-fill" color="#3370ff"/>
          <AvicIcon v-if="!expanded && !dataRef.isLeaf" svg="avic-folder-3-fill" color="#ffb800"/>
          <AvicIcon
            v-if="expanded && !dataRef.isLeaf"
            svg="avic-folder-open-fill"
            color="#ffb800"
          />
        </template>
      </a-tree>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import {getProjectName} from "@/api/avic/mms/fam/FamOverhaulRequireApi";

const projectNameOpen = ref<boolean>(false);
const treeLoading = ref(false);
const treeNodeId = ref('');
const treeData = ref([]);
const expandedKeys = ref([]); //树节点validateRules
const emit = defineEmits(['confirm', 'close']);

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
});
watch(
  () => props.show,
  value => {
    projectNameOpen.value = value;
    if (value) {
      getTreeList();
    }
  },
  { immediate: true }
);
const bodyStyle = {
  height: '400px',
  overflow: 'hidden',
  overflowY: 'scroll'
};

/** 查询数据 */
function getTreeList() {
  treeLoading.value = true;
  treeData.value = [];
  expandedKeys.value = [];
  getProjectName().then(response => {
    treeData.value = response.data;
    treeLoading.value = false;
  });
}

const onSelect = (selectedKeys: string[], info: any) => {
  if(!info.node.dataRef.isLeaf) return
  treeNodeId.value = info.node.dataRef.title;
};
const projectNameClick = () => {
  projectNameOpen.value = true;
};

function projectNameSummit() {
  emit('confirm', treeNodeId.value);
  emit('close');
}

const projectNameCancel = () => {
  emit('close');
}
</script>
<style scoped>

</style>
