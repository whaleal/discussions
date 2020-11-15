const initState = {
  list: [
    {
      id: 1,
      name: 'latest_post',
      show: true,
      title: '最近更新',
      subtitle: 'Last Update',
      type: 'list',
      content: []
    }, {
      id: 2,
      name: 'tags',
      show: true,
      title: '标签云',
      subtitle: 'Tags Cloud',
      type: 'tags',
      content: []
    }, {
      id: 2,
      name: "introduct",
      show: true,
      title: '简介',
      subtitle: 'Intructor',
      type: 'text',
      content: `网址数据来源于 
        <a href="http://github.com/${config.github.user}" class="button-block"><i class="fa fa-github"></i> Github 主页</a>
        <a href="http://github.com/${config.github.user}/${config.github.user}.github.io" class="button-block"><i class="fa fa-code-fork"></i> 网站源码</a>
        <a href="http://github.com/${config.github.user}/${config.github.repo}" class="button-block">博客原文</a>
        <a href="https://github.com/JinMuInfo/discussion-for-mongo/issues/new" class="button-block">我要提问</a>
        <a href="https://docs.jinmu.info" class="button-block">锦木信息文档专栏</a>
        <a href="https://docs.jinmu.info/MongoDB-Manual-zh/#/" class="button-block">MongoDB中文手册</a>
      `
    }
  ]
}

export default createReducer(initState)({
  UPDATE_SIDEBAR: (state, action) => {
    if(action.name){
      const block = _.find(state.list, item => item.name === action.name);
      block.content = action.data;
      return {
        ...state,
        list: [
          ...state.list
        ]
      }
    } 
    return {
      ...state,
      list: [
        ...state.list,
        action.data
      ]
    }
  }
})

