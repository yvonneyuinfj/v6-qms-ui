<template>
  <div class="content-container dashboard-container">
    <!--<div class="dashboard-header">-->
    <!--  <h2>质量管理看板</h2>-->
    <!--  <span class="update-time">数据更新时间：{{ updateTime }}</span>-->
    <!--</div>-->

    <div class="dashboard-content">
      <div class="top-row">
        <div class="card top10-card">
          <div class="card-header">
            <i class="el-icon-warning-outline"></i>
            <span>TOP10 质量问题</span>
          </div>
          <div class="card-body">
            <a-table :dataSource="top10ProblemList" :columns="columns" :pagination="pagination"
                     style="overflow-y: scroll;"/>
          </div>
        </div>
        <div class="card gauge-card">
          <div class="card-header">
            <i class="el-icon-data-analysis"></i>
            <span>质量问题统计</span>
          </div>
          <div class="card-body">
            <div ref="gaugeChart" class="chart-container"></div>
            <div class="gauge-stats">
              <div class="stat-item">
                <span class="stat-label">问题总数</span>
                <span class="stat-value">{{ gaugeData.totalIssues }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">已归零</span>
                <span class="stat-value success">{{ gaugeData.resolvedIssues }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">未归零</span>
                <span class="stat-value warning">{{ gaugeData.pendingIssues }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-row">
        <div class="card plan-card">
          <div class="card-header">
            <i class="el-icon-s-order"></i>
            <span>质量计划执行情况</span>
          </div>
          <div class="card-body">
            <div ref="planChart" class="chart-container"></div>
          </div>
        </div>

        <!--<div class="card eval-card">-->
        <!--  <div class="card-header">-->
        <!--    <i class="el-icon-star-on"></i>-->
        <!--    <span>总体质量评价</span>-->
        <!--  </div>-->
        <!--  <div class="card-body">-->
        <!--    <div ref="evalChart" class="chart-container"></div>-->
        <!--  </div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { getTop10Problem, getQualityGauge, getQualityPlanStats, getOverallEvaluation } from '@/mock/dashboard';

const { proxy } = getCurrentInstance();
const updateTime = ref('');
const top10ProblemList = ref([]);
const gaugeData = ref({ totalIssues: 0, resolvedIssues: 0, pendingIssues: 0, resolutionRate: 0 });
const planData = ref([]);
const evalData = ref([]);
const gaugeChart = ref(null);
const planChart = ref(null);
const evalChart = ref(null);
const pagination = ref({
  current: 1,
  pageSize: 5,
  total: 10,
  showTotal: (total) => `共${total}条`
});
const columns = [
  {
    title: '序号',
    dataIndex: 'rank',
    ellipsis: true,
    width: 30,
    align: 'center'
  }, {
    title: '问题名称',
    dataIndex: 'name',
    ellipsis: true,
    width: 200,
    align: 'center'
  }, {
    title: '责任部门',
    dataIndex: 'department',
    ellipsis: true,
    width: 80,
    align: 'center'
  }, {
    title: '状态',
    dataIndex: 'status',
    ellipsis: true,
    width: 50,
    align: 'center'
  }
];

onMounted(() => {
  updateTime.value = proxy.$dayjs();
  fetchData();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (gaugeCharInstance) gaugeCharInstance.dispose();
  if (planChartInstance) planChartInstance.dispose();
  if (planChartInstance) planChartInstance.dispose();
});

const fetchData = () => {
  const top10Res = getTop10Problem();
  top10ProblemList.value = top10Res.data;
  const gaugeRes = getQualityGauge();
  gaugeData.value = gaugeRes.data;
  console.log(gaugeData.value);
  nextTick(() => {
    initGaugeChart();
  });
  const planRes = getQualityPlanStats();
  planData.value = planRes.data;
  nextTick(() => {
    initPlanChart();
  });

};
let gaugeCharInstance = null;
const initGaugeChart = () => {
  if (!gaugeChart.value) return;
  if (gaugeCharInstance) {
    gaugeCharInstance.dispose();
  }
  gaugeCharInstance = echarts.init(gaugeChart.value);
  const option = {
    series: [{
      type: 'gauge',
      min: 0,
      max: 100,
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          width: 20,
          color: [
            [0.6, '#fd666d'], // 0-60% 红色
            [0.8, '#67e0e3'], // 0.6-0.8 青色
            [1, '#37a2da'] // 0.8-1.0 蓝色
          ]
        }
      },
      pointer: { itemStyle: { color: 'auto' } },
      axisTick: { distance: -30, length: 8, lineStyle: { color: '#fff', width: 2 } },
      splitLine: { distance: -30, length: 25, lineStyle: { color: '#fff', width: 4 } },
      axisLabel: { color: 'inherit', distance: 10, fontSize: 12 },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
        color: 'inherit',
        fontSize: 24,
        offsetCenter: [0, '10%']
      },
      data: [{ value: gaugeData.value.resolutionRate.toFixed(1), name: '归零率' }],
      title: { offsetCenter: [0, '40%'], fontSize: 14 }
    }]
  };
  option && gaugeCharInstance.setOption(option);
};

let planChartInstance = null;
const initPlanChart = () => {
  if (!planChart.value) return;
  if (planChartInstance) {
    planChartInstance.dispose();
  }
  planChartInstance = echarts.init(planChart.value);
  const option = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['计划总数', '已完成', '完成率'], bottom: 0 },
    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: planData.value.map(item => item.departments),
      axisLabel: { interval: 0, rotate: 45 }
    },
    yAxis: [
      { type: 'value', name: '数量', min: 0 },
      { type: 'value', name: '完成率(%)', min: 0, max: 100 }
    ],
    series: [
      {
        name: '计划总数',
        type: 'bar',
        data: planData.value.map(item => item.total),
        itemStyle: { color: '#5470c6' }
      },
      {
        name: '已完成',
        type: 'bar',
        data: planData.value.map(item => item.completed),
        itemStyle: { color: '#91cc75' }
      },
      {
        name: '完成率',
        type: 'line',
        yAxisIndex: 1,
        data: planData.value.map(item => parseFloat(item.completionRate)),
        itemStyle: { color: '#fac858' },
        label: { show: true, position: 'top', formatter: '{c}%' }
      }
    ]
  };
  option && planChartInstance.setOption(option);
};

function handleResize() {
  if (gaugeChart.value) gaugeChart.value.resize();
  if (planChart.value) planChart.value.resize();
}

</script>
<style lang="less" scoped>
.dashboard-container {
  padding: 8px;
  background: #f0f2f5;
  min-height: calc(100vh - 84px);

  //.dashboard-header {
  //  display: flex;
  //  justify-content: space-between;
  //  align-items: center;
  //  margin-bottom: 16px;
  //
  //  h2 {
  //    margin: 0;
  //    font-size: 22px;
  //    color: #303133;
  //    font-weight: 600;
  //  }
  //
  //  .update-time {
  //    font-size: 13px;
  //    color: #909399;
  //  }
  //}

  .dashboard-content {
    .top-row {
      display: flex;
      gap: 16px;
      margin-bottom: 8px;
    }

    .bottom-row {
      display: flex;
      gap: 16px;
    }

    .card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;

      .card-header {
        display: flex;
        align-items: center;
        padding: 14px 16px;
        border-bottom: 1px solid #ebeef5;
        font-size: 16px;
        font-weight: 500;
        color: #303133;

        i {
          margin-right: 8px;
          font-size: 18px;
          color: #409eff;
        }
      }

      .card-body {

        padding: 8px;
      }
    }

    .top10-card {
      flex: 1;
      min-width: 0;
    }

    .gauge-card {
      flex: 1;
      min-width: 0;

      .chart-container {
        height: 260px;
      }

      .gauge-stats {
        display: flex;
        justify-content: space-around;
        padding-top: 8px;
        border-top: 1px dashed #ebeef5;

        .stat-item {
          text-align: center;

          .stat-label {
            display: block;
            font-size: 12px;
            color: #909399;
            margin-bottom: 4px;
          }

          .stat-value {
            display: block;
            font-size: 20px;
            font-weight: 600;
            color: #303133;

            &.success {
              color: #67c23a;
            }

            &.warning {
              color: #e6a23c;
            }
          }
        }
      }
    }

    .plan-card {
      flex: 1.2;
      min-width: 0;

      .chart-container {
        height: 340px;
      }
    }

    .eval-card {
      flex: 0.8;
      min-width: 0;

      .chart-container {
        height: 340px;
      }
    }
  }
}

.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  background: #f0f0f0;
  color: #606266;

  &.top3 {
    background: #f56c6c;
    color: #fff;
  }
}
</style>
