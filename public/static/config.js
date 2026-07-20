window.$config = {
  /** 控制台地址,配置该地址后默认开启根据用户跳转控制台 */
  consolePath: '',
  appName: '协同运营平台v1.0',
  // appName: '门户系统v1.0',
  secretLevel: '秘密',
  // secretLevel: '机密',
  /** 菜单过滤关键词 */
  menuFilterKeyWord: '',
  /** 表格默认参数配置 */
  table: {
    /** 表格大小 */
    size: 'middle',
    /** 每页条数可选项 */
    pageSizeOptions: ['10', '20', '30', '40', '50', '100', '200']
  },
  /** 附件默认参数 */
  uploader: {
    /** 文件存储方式 */
    saveType: 'Disk'
  },
  ssoConfig: {
    /** 单点登录方式，未开启单点和多种单点方式配置空，其余按照具体单点方式配置 */
    ssoFlag: ''
  }
};
