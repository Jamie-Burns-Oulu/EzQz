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
            //    for (j = 0; j == hoursMaxData.length; j++) {
            //         if (hoursMaxData[j].length == 0) {
            //             hoursAllMax.push(0);
            //         } else {
            //             hoursAllMax.push(Math.max.apply(Math, hoursMaxData[j]));
            //         }
            //     }
        }
        // console.log(hoursAllMax);
        let queueMin = 2;
        let queueMid = 5;
        let queueMax = 8;
        hoursQueueData = [];
        hoursData.forEach(el => {
            if (el > 0) {
                if (el == 1) {
                    hoursQueueData.push(1);
                } else if (el > 1 && el <= queueMin) {
                    hoursQueueData.push(3);
                } else if (el > queueMin && el <= queueMid) {
                    hoursQueueData.push(5);
                } else if (el > queueMid && el <= queueMax) {
                    hoursQueueData.push(7);
                } else if (el > queueMax) {
                    hoursQueueData.push(10);
                }
            } else {
                hoursQueueData.push(0);
            }
        });
        return hoursQueueData;
    }
    //
    //
    dayStats();
    hourlyStats();
    //
    //
    makeDaysChart(dailyData);
    makeHoursChart(hoursQueueData);
}
