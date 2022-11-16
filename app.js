function buildCharts(sample) {
    d3.json("cleaned_data.json").then((d) => {
        var Time = d.Time;
        var Glucose = d.Glucose;


        var trace1 = {
            x: Time,
            y: Glucose,
            type: 'scatter'
        };

        var data = [trace1];

        var layout = {
            title: 'Scroll and Zoom',
            showlegend: false
        };
    };

    Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
}