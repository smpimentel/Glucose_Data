var json = require('./cleaned_csv/cleaned_data.json'); //with path
var time = json.Time;
var glucose = json.Glucose;

var trace1 = {
    x: time,
   y: glucose,
   type: 'scatter'
};

var data = [trace1];

var layout = {
   title: 'Scroll and Zoom',
   showlegend: false};

Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
