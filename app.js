// mousewheel or two-finger scroll zooms the plot

var trace1 = {
    x:['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter'
};

var data = [trace1];

var layout = {
    title: 'Scroll and Zoom',
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});