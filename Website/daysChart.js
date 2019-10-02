let daysCtx = [];

function makeDaysChart(daysData) {
    daysCtx = document.getElementById("daysChart").getContext("2d");
    var myChart = new Chart(daysCtx, {
        type: "bar",
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [
                {
                    label: "Average Busyness (People)",
                    data: [
                        daysData[0],
                        daysData[1],
                        daysData[2],
                        daysData[3],
                        daysData[4]
                    ],
                    backgroundColor: [
                        "#f18984",
                        "#ba7bf0",
                        "#b2f07d",
                        "#88edf1",
                        "#f0ba7b"
                    ],
                    borderColor: [
                        "#e5231a",
                        "#881AE5",
                        "#77E51A",
                        "#1ADCE5",
                        "#E5881C"
                    ],
                    borderWidth: 4
                }
            ]
        },
        options: {            
            title: {
                display: true,
                text: "Daily",
                fontSize: 24
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
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