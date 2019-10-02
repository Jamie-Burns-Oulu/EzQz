let hoursCtx = [];

function makeHoursChart(hoursData) {
    hoursCtx = document.getElementById("hoursChart").getContext("2d");
    var myChart = new Chart(hoursCtx, {
        type: "bar",
        data: {
            labels: ["10:00", "11:00", "12:00", "13:00", "14:00"],
            datasets: [
                {
                    label: "Average Queue Time (mins)",
                    data: [
                        hoursData[0],
                        hoursData[1],
                        hoursData[2],
                        hoursData[3],
                        hoursData[4]
                    ],
                    backgroundColor: [
                        "#d083cd",
                        "#d1d48e",
                        "#9ad9bc",
                        "#b38dd4",
                        "#cfab81"
                    ],
                    borderColor: [
                        "#BD52B9",
                        "#B9BD52",
                        "#52BD8C",
                        "#8C52BD",                    
                        "#BD8C52"
                    ],                  
                    borderWidth: 4
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: "Hourly",
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
