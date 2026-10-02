<template>
  <div class="content-container">
    <a-spin :spinning="loading"></a-spin>
    <a-row :gutter="12">
      <a-col :span="14">
        <div ref="pieRef" style="height: 360px; background: #fff"/>
      </a-col>
    </a-row>
    <div
      style="
        border-top: 4px solid #1e89ff;
        background: #fff;
        height: 56px;
        line-height: 56px;
        text-align: center;
        margin: 0 -8px -8px -8px;
      "
    >
      <span style="margin-right: 16px">中国航发动力所 版权所有</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';

const pieRef = ref<HTMLDivElement | null>(null);
const barRef = ref<HTMLDivElement | null>(null);
const charts: ReturnType<typeof echarts.init>[] = [];

function handleResize() {
  charts.forEach(chart => chart.resize());

}

onMounted(() => {
  const pie = echarts.init(pieRef.value!);
  pie.setOption({
    title: { text: '年度质量问题处理情况', left: 'center' },
    tooltip: {},
    legend: { bottom: 0 },
    series: [
      {
        type: 'pie',
        radius: '55%',
        label: { formatter: '{b}\n{c}' },
        data: [
          { name: '已闭环', value: 7543 },
          { name: '未闭环', value: 752 }
        ]
      }
    ]
  });
  charts.push(pie);

  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  charts.forEach(chart => chart.dispose());
});


</script>
<style lang="less" scoped>

</style>
