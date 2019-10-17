function makeAllStats(allData) {
    //
    //
    function dayStats() {
        dailyData = [];
        let mon = (mont = tue = tuet = wed = wedt = thu = thut = fri = frit = 0);
        allData.forEach(el => {
            let day = el.Time.substr(el.Time.length - 3);
            if (day == "Mon") {
                mon++, (mont += Number(el.People));
            } else if (day == "Tue") {
                tue++, (tuet += Number(el.People));
            } else if (day == "Wed") {
                wed++, (wedt += Number(el.People));
            } else if (day == "Thu") {
                thu++, (thut += Number(el.People));
            } else if (day == "Fri") {
                fri++, (frit += Number(el.People));
            }
        });
        dailyData.push(
            Math.round(mont / mon),
            Math.round(tuet / tue),
            Math.round(wedt / wed),
            Math.round(thut / thu),
            Math.round(frit / fri)
        );
        return dailyData;
    }
    //
    //
    function hourlyStats() {
        daysData = [[], [], [], [], []];
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        days.forEach((day, index) => {
            allData.forEach(data => {
                let dataDay = data.Time.substr(data.Time.length - 3);
                if (day === dataDay) {
                    daysData[index].push(data);
                }
            });
        });
        hoursData = [];
        hoursAllMax = [];
        for (i = 0; i <= 4; i++) {
            hoursMaxData = [[], [], [], [], [], [], [], [], []];
            let ele = (elet = twe = twet = one = onet = two = twot = tenH = tenHt = eleH = eleHt = tweH = tweHt = oneH = oneHt = twoH = twoHt = 0);
            daysData[i].forEach(el => {
                let time = Number(el.Time.substring(0, 4));
                if (time >= 1030 && time <= 1100) {
                    tenH++,
                        (tenHt += Number(el.People)),
                        hoursMaxData[0].push(Number(el.People));
                } else if (time >= 1101 && time <= 1130) {
                    ele++,
                        (elet += Number(el.People)),
                        hoursMaxData[1].push(Number(el.People));
                } else if (time >= 1131 && time <= 1200) {
                    eleH++,
                        (eleHt += Number(el.People)),
                        hoursMaxData[2].push(Number(el.People));
                } else if (time >= 1201 && time <= 1230) {
                    twe++,
                        (twet += Number(el.People)),
                        hoursMaxData[3].push(Number(el.People));
                } else if (time >= 1231 && time <= 1300) {
                    tweH++,
                        (tweHt += Number(el.People)),
                        hoursMaxData[4].push(Number(el.People));
                } else if (time >= 1301 && time <= 1330) {
                    one++,
                        (onet += Number(el.People)),
                        hoursMaxData[5].push(Number(el.People));
                } else if (time >= 1331 && time <= 1400) {
                    oneH++,
                        (oneHt += Number(el.People)),
                        hoursMaxData[6].push(Number(el.People));
                } else if (time >= 1401 && time <= 1430) {
                    two++,
                        (twot += Number(el.People)),
                        hoursMaxData[7].push(Number(el.People));
                } else if (time >= 1431 && time <= 1500) {
                    twoH++,
                        (twoHt += Number(el.People)),
                        hoursMaxData[8].push(Number(el.People));
                }
            });
            hoursData.push(
                Math.round(tenHt / tenH),
                Math.round(elet / ele),
                Math.round(eleHt / eleH),
                Math.round(twet / twe),
                Math.round(tweHt / tweH),
                Math.round(onet / one),
                Math.round(oneHt / oneH),
                Math.round(twot / two),
                Math.round(twoHt / twoH)
            );
            hoursAllMax.push(hoursMaxData);
        }

        hourlyMaximums = [];
        for (j = 0; j < hoursAllMax.length; j++) {
            for (k = 0; k < hoursAllMax[j].length; k++) {
                if (hoursAllMax[j][k].length) {
                    hourlyMaximums.push(
                        Math.max.apply(Math, hoursAllMax[j][k])
                    );
                } else {
                    hourlyMaximums.push(0);
                }
            }
        }

        let accumulatedMax = [[], [], [], [], [], [], [], [], []];
        for (i = 0; i < hourlyMaximums.length; i += 9) {
            for (j = 0; j < 9; j++) {
                accumulatedMax[j].push(hourlyMaximums[i + j]);
            }
        }
        accumulatedMax.forEach(obtainMax);
        function obtainMax(el, index, array) {
            array[index] = Math.max(...el);
        }
        hourlyMaximums = hourlyMaximums.concat(accumulatedMax);
        return (
            hoursData.forEach(queueConversion),
            hourlyMaximums.forEach(queueConversion)
        );
    }

    function queueConversion(el, index, array) {
        let queueMin = 2;
        let queueMid = 5;
        let queueMax = 8;
        if (el > 0) {
            if (el == 1) {
                array[index] = 1;
            } else if (el > 1 && el <= queueMin) {
                array[index] = 3;
            } else if (el > queueMin && el <= queueMid) {
                array[index] = 5;
            } else if (el > queueMid && el <= queueMax) {
                array[index] = 7;
            } else if (el > queueMax) {
                array[index] = 10;
            }
        } else {
            array[index] = 0;
        }
    }

    function histogramStats() {
        histogramValues = {};
        for (let i = 0; i < allData.length; i++) {
            let currentPeople = String(allData[i].People);
            let objKeys = Object.keys(histogramValues);
            let ifSpaceInString =
                currentPeople.indexOf(" ") > -1 ? true : false;
            if (objKeys.includes(currentPeople) || ifSpaceInString) {
                let propertyName = currentPeople.replace(/\s/g, "");
                histogramValues[propertyName]++;
            } else {
                histogramValues[currentPeople] = 1;
            }
        }
        return histogramValues;
    }
    //
    //
    dayStats();
    hourlyStats();
    histogramStats();
    //
    //
    makeDaysChart(dailyData);
    makeHoursChart(hoursData);
    makeHoursMaxChart(hourlyMaximums);
    makeHistogramChart(histogramValues);
}
