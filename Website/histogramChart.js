let histogramCtx = [];

function makeHistogramChart(histogramData) {
    var data = formatHistogramData(histogramData);
    var labels = Object.keys(histogramData)
    histogramCtx = document.getElementById("histogramChart").getContext("2d");
    var gradientStroke = histogramCtx.createLinearGradient(0, 660, 0, 0);
    gradientStroke.addColorStop(1, "#FD626A");
    gradientStroke.addColorStop(0.75, "#FFBF63");
    gradientStroke.addColorStop(0.5, "#D5F960");
    gradientStroke.addColorStop(0.25, "#52D499");
    gradientStroke.addColorStop(1, "#5E84DB");
    var myChart = new Chart(histogramCtx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                data:data,
                label: 'People',
                backgroundColor: gradientStroke,
                borderColor: gradientStroke,
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Histogram of People Queueing",
                fontSize: 24
            },
            scales: {
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0,
                    scaleLabel: {
                        display: true,
                        labelString: "People",
                        fontSize: 16
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 150,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Frequency",
                        fontSize: 16
                    }
                }]
            }
        }

    });
}

function formatHistogramData(d) {
    var data = [];
    for (const key in d) {
        data.push(d[key]);
    }
    return data;
}
