// 👉 Đây là file riêng: bieudoDoanhthu.js

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Hạng vé', 'Vé đã đặt'],
    ['VIP', 145],
    ['Standard', 290]
  ]);

  var options = {
    title: '',
    pieHole: 0.4, // Hiển thị dạng Doughnut
    width: '100%',
    height: 300,
    chartArea: { width: '90%', height: '90%' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
