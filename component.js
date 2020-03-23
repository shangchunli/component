var data = [
    ['Java', 1, '降', '-0.01%'],
    ['C', 2, '升', '+2.44%'],
    ['Python', 3, '升', '+1.41%'],
    ['C++', 4, '降', '-2.58%'],
    ['C#', 5, '升', '+2.07%'],
    ['Visual Basic .NET', 6, '降', '-1.17%'],
    ['JavaScript', 7, '降', '-0.85%'],
  ];
  
var container = document.getElementById('example');
var hot = new Handsontable(container, {
  data: data,
  rowHeaders: false,
  colHeaders: ['语言名称', '排名', '升或降', '变化幅度'],
  rowHeights: 40,
  filters: true,
  dropdownMenu: false,
  autoColumnSize:true,
  colWidths:150,
  customBorders: [
    
    {
        row: 3,
        col: 1,
        top: {width: 2, color: '#7687c5'},
        right: {width: 2, color: '#7687c5'},
        bottom: {width: 2, color: '#7687c5'},
        left: {width: 2, color: '#7687c5'}
    }
  ],
  className: 'htCenter htMiddle',
});

var dom = document.getElementById("container");
var myChart = echarts.init(dom);
option = {
  title: {
      // text: "",
      text: "JavaScript语言排名变化",
      textStyle:{
        fontSize:18,
        fontWeight:'bold',
      },
      left:'3%',
      padding:5
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      },
      formatter: function (params) {
          let firstParams = params[0];
          let sndParams = params[1];
          return '排名'+'<br/>'+firstParams.name + ' ： ' +firstParams.data;
      }
  },
  xAxis: {
      type: 'category',
      data: [2000, 2005, 2010, 2015, 2020]
  },
  yAxis: {
      type: 'value'
  },
  series: [{
    data: [6,9,8,8,7],
    type: 'line'
  }]
};
myChart.setOption(option, true);