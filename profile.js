// 日常更新只需修改这个文件；空链接会显示“待补充”，不会产生无效跳转。
// 所有文本按纯文本渲染，不需要编写 HTML。
window.PROFILE = {
  name: '你的姓名',
  englishName: 'Your Name',
  role: '你的职位 / 学校或研究机构 · 待填写',
  photo: '', // 例如 'assets/portrait.jpg'
  monogram: 'YN',
  bio: [
    '这里是你的个人介绍。建议用三到五句话说明当前身份、研究方向，以及你希望解决的问题。当前文字为占位说明，不代表真实个人经历。',
    '这里可以补充教育背景、研究方法或近期工作。与其堆砌关键词，不如告诉读者：你研究什么、为什么重要，以及有哪些可验证的成果。'
  ],
  interests: ['研究方向一 · 待填写', '研究方向二 · 待填写', '研究方向三 · 待填写'],
  links: [
    {label: 'Email', url: ''}, // 例如 'mailto:you@example.com'
    {label: 'GitHub', url: ''},
    {label: 'Google Scholar', url: ''},
    {label: 'CV / 简历 PDF', url: ''} // 上传 PDF 后填 'assets/cv.pdf'
  ],
  publications: [
    {
      title: '代表论文标题 · 待替换',
      venue: '会议 / 期刊名称 · 待填写', year: '年份待填',
      authors: '作者一，你的姓名，作者三 · 作者顺序待核对',
      summary: '用一句话描述研究问题、你的方法与主要贡献。这里不放虚构的实验指标。',
      selected: true, preprint: false,
      links: [{label:'Paper',url:''},{label:'Code',url:''},{label:'Project',url:''}],
      bibtex: '' // 可选：粘贴正式 BibTeX，引文未提供时不显示此入口。
    },
    {
      title: '另一项研究成果 · 待替换',
      venue: '会议 / 期刊名称 · 待填写', year: '年份待填',
      authors: '你的姓名，合作者 · 待填写',
      summary: '简要解释这项工作与第一篇论文的区别，以及它解决的具体问题。',
      selected: true, preprint: false,
      links: [{label:'Paper',url:''},{label:'Code',url:''}], bibtex: ''
    },
    {
      title: '预印本标题 · 示例占位',
      venue: '预印本 · 待替换', year: '年份待填',
      authors: '作者列表 · 待填写',
      summary: '这里演示预印本的展示方式。真实使用时请注明版本，勿将未录用论文标为正式发表。',
      selected: false, preprint: true,
      links: [{label:'arXiv',url:''}], bibtex: ''
    }
  ],
  experience: [
    {period:'起止时间待填',title:'当前职位 / 研究经历 · 待填写',organization:'单位或实验室 · 待填写',description:'填写你的职责、参与的研究以及个人贡献。'},
    {period:'起止时间待填',title:'博士 / 硕士学位 · 待填写',organization:'学校与专业 · 待填写',description:'可补充导师、论文方向；不需要的条目可直接删除。'},
    {period:'起止时间待填',title:'本科学位 · 待填写',organization:'学校与专业 · 待填写',description:'填写教育信息，荣誉和成绩仅在真实且适合公开时补充。'}
  ],
  projects: [
    {type:'RESEARCH PROJECT / 项目占位',title:'代表项目名称 · 待填写',description:'项目解决什么问题？你负责哪一部分？最终有哪些可展示的代码、系统或研究成果？',links:[{label:'项目介绍',url:''},{label:'源代码',url:''}]},
    {type:'OPEN SOURCE / 项目占位',title:'开源或工程实践 · 待填写',description:'可放开源工具、数据集或技术实践。没有第二个项目时，删除这个对象即可。',links:[{label:'Repository',url:''}]}
  ],
  news: [
    {date:'日期待填',text:'论文录用动态 · 示例占位。请替换为真实时间、论文和会议名称。'},
    {date:'日期待填',text:'项目发布动态 · 示例占位。可附项目名称或版本说明。'}
  ]
};
