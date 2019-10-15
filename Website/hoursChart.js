let hoursCtx = [];

function makeHoursChart(hoursData) {
    let today = new Date();
    hoursCtx = document.getElementById("hoursChart").getContext("2d");
    var myChart = new Chart(hoursCtx, {
        type: "bar",
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
                        hoursData[0],
                        hoursData[1],
                        hoursData[2],
                        hoursData[3],
                        hoursData[4],
                        hoursData[5],
                        hoursData[6],
                        hoursData[7],
                        hoursData[8]
                    ],
                    backgroundColor: "#FD626A",
                    borderColor: "#FC353F",
                    borderWidth: 4,
                    hidden: !(1 == today.getDay())
                },
                {
                    label: "Tuesdays",
                    data: [
                        hoursData[9],
                        hoursData[10],
                        hoursData[11],
                        hoursData[12],
                        hoursData[13],
                        hoursData[14],
                        hoursData[15],
                        hoursData[16],
                        hoursData[17]
                    ],
                    backgroundColor: "#FFBF63",
                    borderColor: "#FFAD36",
                    borderWidth: 4,
                    hidden: !(2 == today.getDay())
                },
                {
                    label: "Wednesdays",
                    data: [
                        hoursData[18],
                        hoursData[19],
                        hoursData[20],
                        hoursData[21],
                        hoursData[22],
                        hoursData[23],
                        hoursData[24],
                        hoursData[25],
                        hoursData[26]
                    ],
                    backgroundColor: "#D5F960",
                    borderColor: "#C9F734",
                    borderWidth: 4,
                    hidden: !(3 == today.getDay())
                },
                {
                    label: "Thursdays",
                    data: [
                        hoursData[27],
                        hoursData[28],
                        hoursData[29],
                        hoursData[30],
                        hoursData[31],
                        hoursData[32],
                        hoursData[33],
                        hoursData[34],
                        hoursData[35]
                    ],
                    backgroundColor: "#52D499",
                    borderColor: "#2BCA82",
                    borderWidth: 4,
                    hidden: !(4 == today.getDay())
                },
                {
                    label: "Fridays",
                    data: [
                        hoursData[36],
                        hoursData[37],
                        hoursData[38],
                        hoursData[39],
                        hoursData[40],
                        hoursData[41],
                        hoursData[42],
                        hoursData[43],
                        hoursData[44]
                    ],
                    backgroundColor: "#5E84DB",
                    borderColor: "#3868D5",
                    borderWidth: 4,
                    hidden: !(5 == today.getDay())
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Hourly",
                fontSize: 24
            },

            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Average Queue Time (mins)",
                            fontSize: 16
                        },
                        ticks: {
                            beginAtZero: true
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