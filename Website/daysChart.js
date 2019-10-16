let daysCtx = [];

function makeDaysChart(daysData) {
    daysCtx = document.getElementById("daysChart").getContext("2d");
    var myChart = new Chart(daysCtx, {
        type: "bar",
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [
                {
                    data: [
                        daysData[0],
                        daysData[1],
                        daysData[2],
                        daysData[3],
                        daysData[4]
                    ],
                    backgroundColor: [
                        "#FD626A",
                        "#FFBF63",
                        "#D5F960",
                        "#52D499",
                        "#5E84DB"
                    ],
                    borderColor: [
                        "#FC353F",
                        "#FFAD36",
                        "#C9F734",
                        "#2BCA82",
                        "#3868D5"
                    ],
                    borderWidth: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Historic Daily",
                fontSize: 24
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Average busyness (people)",
                            fontSize: 16
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                            max: Math.max(...daysData) + 1
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Time (day)",
                            fontSize: 16
                        }
                    }
                ]
            }
        },
        animation: {
            onProgress: function(animation) {
                progress.value =
                    animation.animationObject.currentStep /
                    animation.animationObject.numSteps;
            }
        }
    });
}
