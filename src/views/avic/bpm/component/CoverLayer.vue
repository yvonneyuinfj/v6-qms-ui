<template>
  <div v-if="showCover" class="coverBody">
    <div class="coverMessage">
      您的密级低于该流程的数据密级，暂时无法查看!
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';

const showCover = ref(false);
const appStore = useAppStore();
const detailCover = computed(() => appStore.detailCover);
// 监听state.count的变化
watch(() => detailCover.value, (newValue) => {
  showCover.value= newValue;
});


window.addEventListener('beforeunload', (event) => {
  appStore.SET_DETAIL_COVER(false);
});

</script>
<style lang="less" scoped>
.coverBody {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,1);
  top: 0;
  left: 0;
  z-index: 100;
}

.coverMessage {
  width: 500px;
  height: 100px;
  text-align: center;
  background: white;
  border-radius: 20px;
  margin-top: -20%;
  font-size: 20px;
  font-weight: bold;
  line-height: 100px;
  color: red;
}
</style>
