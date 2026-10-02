export interface Top10ProblemItem {
  name: string,
  dept: string,
  rate: number,
  date: string,
  overdue: boolean
}

export interface WarningProblemItem {
  index: number,
  name: string,
  model: string,
  dept: string,
  deadline: string
}


/** 饼图数据项 */
export interface PieItem {
  name: string,
  value: number
}

/** 统计卡片项 */
export interface StatCardItem {
  title: string,
  count: number,
  icon: string
}

/** 仪表盘 */
export interface GaugeItem {
  title: string,
  current: number;
  last: number,
  target: number
}

export interface QmsDashBoardData {
  top10ProblemItems: Top10ProblemItem[];
  annualHandling: PieItem[];
  closedProblems: PieItem[];
  unclosedProblems: PieItem[];
  warningProblems: PieItem[];
  statCards: StatCardItem[];
  gauges: GaugeItem[];
}

const mockData: QmsDashBoardData = {
  top10ProblemItems: [],
  annualHandling: [],
  closedProblems: [],
  unclosedProblems: [],
  warningProblems: [],
  statCards: [],
  gauges: [
    { title: '质量计划完成率', current: 91.8, last: 92, target: 90 },
    { title: '内部审核进展', current: 76, last: 80, target: 100 },
    { title: '质量目标达成率', current: 88.5, last: 85, target: 90 },
    { title: '管理评审计划完成率', current: 65, last: 70, target: 100 }
  ]
};

export function fetchQmsDashboardData(): Promise<QmsDashBoardData> {
  return new Promise<QmsDashBoardData>(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(mockData)));
    }, 300);
  });
}
