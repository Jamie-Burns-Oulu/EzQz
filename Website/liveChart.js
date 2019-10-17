let liveCtx = [];

function makeLiveChart(liveData) {
    liveCtx = document.getElementById("liveChart").getContext("2d");
    var [time, people] = formatData(liveData);
    var sliceAmount = 35;
    var minTime = time[time.length - sliceAmount] || time[0];
    var maxTime = time[time.length - 1];
    var slicedTime = time.slice(-sliceAmount);
    var slicedPeople = people.slice(-sliceAmount);
    var gradientStroke = liveCtx.createLinearGradient(0, 0, 1000, 0);
    gradientStroke.addColorStop(0, "#FD626A");
    gradientStroke.addColorStop(0.25, "#FFBF63");
    gradientStroke.addColorStop(0.5, "#D5F960");
    gradientStroke.addColorStop(0.75, "#52D499");
    gradientStroke.addColorStop(1, "#5E84DB");

    var myChart = new Chart(liveCtx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "People",
                    data: slicedPeople,
                    fill: false,
                    borderColor: gradientStroke,
                    backgroundColor: gradientStroke,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                fontSize: 24,
                text: "Live Queue"
            },
            scales: {
                xAxes: [
                    {
                        type: "category",
                        scaleLabel: {
                            display: true,
                            fontSize: 16,
                            labelString: "Time of day"
                        },
                        labels: slicedTime,
                        ticks: {
                            fontSize: 10,
                            min: minTime,
                            max: maxTime
                        }
                    }
                ],
                yAxes: [
                    {
                        labels: slicedPeople,

                        ticks: {
                            stepSize: 1,
                            max: Math.max(...slicedPeople) + 1,
                            min: 0
                        },
                        scaleLabel: {
                            display: true,
                            fontSize: 16,
                            labelString: "Number of people"
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
function formatData(data) {
    var formattedData = formatDate(data);
    var sortedData = sortData(formattedData);

    var time = [],
        people = [];
    for (var i = 0; i < sortedData.length; i++) {
        if (sortedData[i].People) {
            people.push(sortedData[i].People);
        }
        if (sortedData[i].Time) {
            var formattedTime =
                fix(sortedData[i].Time.getHours()) +
                ":" +
                fix(sortedData[i].Time.getMinutes()) +
                ":" +
                fix(sortedData[i].Time.getSeconds());
            time.push(formattedTime);
        }
    }

    return [time, people];
}
function fix(x) {
    return x < 10 ? "0" + x : x;
}

function sortData(data) {
    data.sort(function(a, b) {
        return a.Time.getTime() - b.Time.getTime();
    });
    return data;
}
function formatDate(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].Time = new Date(
            2019,
            parseInt(data[i].Time.substring(8, 10) - 1),
            parseInt(data[i].Time.substring(6, 8)),
            parseInt(data[i].Time.substring(0, 2)),
            parseInt(data[i].Time.substring(2, 4)),
            parseInt(data[i].Time.substring(4, 6))
        );
    }
    return data;
}
function averageData(data) {
    var avgTime = [],
        avgPeople = [];

    for (let i = 0; i < data.length; ) {
        var firstI = i;
        var secondI = data[i + 1] ? i + 1 : i;
        var thirdI = data[i + 2] ? i + 2 : i;
        var first = parseInt(data[firstI].People);
        var second = parseInt(data[secondI].People);
        var third = parseInt(data[thirdI].People);
        var avg = Math.ceil((first + second + third) / 3);
        avgPeople.push(avg);

        avgTime.push(data[i].Time);
        i += 3;
    }
    return [avgTime, avgPeople];
}
