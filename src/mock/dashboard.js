import Mock from 'mockjs';

const issueTypes = ['尺寸超差', '表面缺陷', '材料不合格', '装配误差', '焊接缺陷', '涂层不良', '电气故障', '密封失效', '加工精度不足', '热处理异常'];
const departments = ['航机总体部', '燃机总体部', '先进动力部', '数智部', '内流传热部', '压气机部', '燃烧部', '涡轮部', '机械系统部', '控制系统部', '强度部', '材料工艺部', '通用部', '叶轮机试验部', '燃烧试验部', '强度试验部', '测试计量部', '装配部', '整机试验部', '检验中心', '信息中心', '情档中心', '快反中心', '服保中心', '总师办/院士办', '科技委', '综管部', '计划部', '科研部', '质量部', '采购部', '人力部', '运行支持部', '党建部', '纪审部', '财务部/经济中心', '条保部', '安环部', '保密部', '保卫部', '工会'];
const evaluationDimensions = ['来料合格率', '过程合格率', '成品合格率', '客户满意度', '返工率', '报废率'];

export function getTop10Problem() {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      rank: i + 1,
      issueType: issueTypes[i],
      count: Mock.Random.integer(50, 500),
      name: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      department: Mock.Random.pick(departments),
      status: Mock.Random.pick(['处理中', '已归零', '待处理'])
    });
  }
  list.sort((a, b) => b.count - a.count);
  list.forEach((item, index) => {
    item.rank = index + 1;
  });
  return { code: 200, data: list };
}

export function getQualityGauge() {
  return {
    code: 200,
    data: {
      totalIssues: Mock.Random.integer(800, 2000),
      resolvedIssues: Mock.Random.integer(600, 1800),
      pendingIssues: Mock.Random.integer(50, 300),
      resolutionRate: Mock.Random.float(75, 98, 1, 2)
    }
  };
}

export function getQualityPlanStats() {
  const list = [];
  for (let i = 0; i < departments.length; i++) {
    const total = Mock.Random.integer(100, 500);
    const completed = Mock.Random.integer(Math.floor(total * 0.6), total);
    list.push({
      departments: departments[i],
      total: total,
      completed: completed,
      pending: total - completed,
      completionRate: ((completed / total) * 100).toFixed(2)
    });
  }
  return { code: 200, data: list };
}

export function getOverallEvaluation() {
  const list = [];
  for (let i = 0; i < evaluationDimensions.length; i++) {
    list.push({
      dimension: evaluationDimensions[i],
      score: Mock.Random.float(70, 99, 1, 2),
      trend: Mock.Random.pick(['up', 'down', 'stable'])
    });
  }
  return { code: 200, data: list };
}

export default {
  getTop10Problem,
  getQualityGauge,
  getQualityPlanStats,
  getOverallEvaluation
};
