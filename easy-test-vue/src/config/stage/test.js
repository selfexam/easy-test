const testRouter = {
  route: null,
  name: null,
  title: '测试结果',
  type: 'folder',
  icon: 'iconfont icon-caseStore',
  filePath: 'views/test/',
  order: null,
  inNav: true,
  children: [
    {
      title: '用例日志',
      type: 'view',
      name: 'caseLogs',
      route: '/test/log',
      filePath: 'views/test/log/LogList.vue',
      inNav: true,
      icon: 'iconfont icon-caseGroup',
      keepAlive: true,
      permission: ['用例日志列表'],
    },
    {
      title: '运行记录',
      type: 'view',
      name: 'testRecord',
      route: '/test/record',
      filePath: 'views/test/record/RecordList',
      inNav: true,
      icon: 'iconfont icon-caseGroup',
      keepAlive: true,
      permission: ['运行记录'],
    },
    {
      title: '运行详情',
      type: 'view',
      name: 'testDetail',
      route: '/test/detail',
      filePath: 'views/test/detail/TestDetail.vue',
      inNav: true,
      icon: 'iconfont icon-caseGroup',
      keepAlive: true,
      permission: ['运行详情'],
    },
  ],
}

export default testRouter
