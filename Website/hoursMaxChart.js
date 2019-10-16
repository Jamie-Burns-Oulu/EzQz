let hoursMaxCtx = [];

function makeHoursMaxChart(hoursMaxData) {
    let today = new Date();
    hoursMaxCtx = document.getElementById("hoursMaxChart").getContext("2d");
    var myChart = new Chart(hoursMaxCtx, {
        type: "line",
        data: {
            labels: [
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30"
            ],
            datasets: [
                {
                    label: "Mondays",
                    data: [
                        hoursMaxData[0],
                        hoursMaxData[1],
                        hoursMaxData[2],
                        hoursMaxData[3],
                        hoursMaxData[4],
                        hoursMaxData[5],
                        hoursMaxData[6],
                        hoursMaxData[7],
                        hoursMaxData[8]
                    ],
                    backgroundColor: "#FD626A",
                    borderColor: "#FC353F",
                    borderWidth: 4,
                    hidden: !(1 == today.getDay()),
                    fill: false
                },
                {
                    label: "Tuesdays",
                    data: [
                        hoursMaxData[9],
                        hoursMaxData[10],
                        hoursMaxData[11],
                        hoursMaxData[12],
                        hoursMaxData[13],
                        hoursMaxData[14],
                        hoursMaxData[15],
                        hoursMaxData[16],
                        hoursMaxData[17]
                    ],
                    backgroundColor: "#FFBF63",
                    borderColor: "#FFAD36",
                    borderWidth: 4,
                    hidden: !(2 == today.getDay()),
                    fill: false
                },
                {
                    label: "Wednesdays",
                    data: [
                        hoursMaxData[18],
                        hoursMaxData[19],
                        hoursMaxData[20],
                        hoursMaxData[21],
                        hoursMaxData[22],
                        hoursMaxData[23],
                        hoursMaxData[24],
                        hoursMaxData[25],
                        hoursMaxData[26]
                    ],
                    backgroundColor: "#D5F960",
                    borderColor: "#C9F734",
                    borderWidth: 4,
                    hidden: !(3 == today.getDay()),
                    fill: false
                },
                {
                    label: "Thursdays",
                    data: [
                        hoursMaxData[27],
                        hoursMaxData[28],
                        hoursMaxData[29],
                        hoursMaxData[30],
                        hoursMaxData[31],
                        hoursMaxData[32],
                        hoursMaxData[33],
                        hoursMaxData[34],
                        hoursMaxData[35]
                    ],
                    backgroundColor: "#52D499",
                    borderColor: "#2BCA82",
                    borderWidth: 4,
                    hidden: !(4 == today.getDay()),
                    fill: false
                },
                {
                    label: "Fridays",
                    data: [
                        hoursMaxData[36],
                        hoursMaxData[37],
                        hoursMaxData[38],
                        hoursMaxData[39],
                        hoursMaxData[40],
                        hoursMaxData[41],
                        hoursMaxData[42],
                        hoursMaxData[43],
                        hoursMaxData[44]
                    ],
                    backgroundColor: "#5E84DB",
                    borderColor: "#3868D5",
                    borderWidth: 4,
                    hidden: !(5 == today.getDay()),
                    fill: false
                },
                {
                    label: "All",
                    data: [
                        hoursMaxData[45],
                        hoursMaxData[46],
                        hoursMaxData[47],
                        hoursMaxData[48],
                        hoursMaxData[49],
                        hoursMaxData[50],
                        hoursMaxData[51],
                        hoursMaxData[52],
                        hoursMaxData[53]
                    ],
                    backgroundColor: "#a352bd",
                    borderColor: "#994cb3",
                    borderWidth: 4,
                    hidden: true,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Historic Hourly Maximum",
                fontSize: 24
            },

            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Max queue time (mins)",
                            fontSize: 16
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                            max: Math.max(...hoursMaxData) + 1
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Time (hours)",
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
