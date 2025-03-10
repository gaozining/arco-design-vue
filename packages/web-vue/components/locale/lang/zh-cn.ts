import { ArcoCalendarLang, ArcoLang } from '../interface';

const calendarLang: ArcoCalendarLang = {
  formatYear: 'YYYY 年',
  formatMonth: 'YYYY 年 MM 月',
  today: '今天',
  view: {
    month: '月',
    year: '年',
    week: '周',
    day: '日',
  },
  month: {
    long: {
      January: '一月',
      February: '二月',
      March: '三月',
      April: '四月',
      May: '五月',
      June: '六月',
      July: '七月',
      August: '八月',
      September: '九月',
      October: '十月',
      November: '十一月',
      December: '十二月',
    },
    short: {
      January: '一月',
      February: '二月',
      March: '三月',
      April: '四月',
      May: '五月',
      June: '六月',
      July: '七月',
      August: '八月',
      September: '九月',
      October: '十月',
      November: '十一月',
      December: '十二月',
    },
  },
  week: {
    long: {
      self: '周',
      monday: '周一',
      tuesday: '周二',
      wednesday: '周三',
      thursday: '周四',
      friday: '周五',
      saturday: '周六',
      sunday: '周日',
    },
    short: {
      self: '周',
      monday: '一',
      tuesday: '二',
      wednesday: '三',
      thursday: '四',
      friday: '五',
      saturday: '六',
      sunday: '日',
    },
  },
};

const lang: ArcoLang = {
  locale: 'zh-CN',
  empty: {
    description: '暂无数据',
  },
  drawer: {
    okText: '确定',
    cancelText: '取消',
  },
  popconfirm: {
    okText: '确定',
    cancelText: '取消',
  },
  modal: {
    okText: '确定',
    cancelText: '取消',
  },
  pagination: {
    goto: '前往',
    page: '页',
    countPerPage: '条/页',
    total: '共 {0} 条',
  },
  table: {
    okText: '确定',
    resetText: '重置',
  },
  upload: {
    start: '开始',
    cancel: '取消',
    delete: '删除',
    retry: '点击重试',
    buttonText: '点击上传',
    preview: '预览',
    drag: '点击或拖拽文件到此处上传',
    dragHover: '释放文件并开始上传',
    error: '上传失败',
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: '请选择日期',
      week: '请选择周',
      month: '请选择月份',
      year: '请选择年份',
      quarter: '请选择季度',
      time: '请选择时间',
    },
    rangePlaceholder: {
      date: ['开始日期', '结束日期'],
      week: ['开始周', '结束周'],
      month: ['开始月份', '结束月份'],
      year: ['开始年份', '结束年份'],
      quarter: ['开始季度', '结束季度'],
      time: ['开始时间', '结束时间'],
    },
    selectTime: '选择时间',
    today: '今天',
    now: '此刻',
    ok: '确定',
  },
  image: {
    loading: '加载中',
  },
  imagePreview: {
    fullScreen: '全屏',
    rotateRight: '向右旋转',
    rotateLeft: '向左旋转',
    zoomIn: '放大',
    zoomOut: '缩小',
    originalSize: '原始尺寸',
  },
  typography: {
    copied: '已复制',
    copy: '复制',
    expand: '展开',
    collapse: '折叠',
    edit: '编辑',
  },
};

export default lang;
