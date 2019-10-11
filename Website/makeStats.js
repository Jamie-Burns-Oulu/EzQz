function makeAllStats(allData) {
    //
    //
    function dayStats() {
        daysData = [];
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
        daysData.push(
            Math.round(mont / mon),
            Math.round(tuet / tue),
            Math.round(wedt / wed),
            Math.round(thut / thu),
            Math.round(frit / fri)          
        );
        return daysData;
    }
    //
    //
    function hourlyStats() {
        hoursData = [];
        let ten = (tent = ele = elet = twe = twet = one = onet = two = twot = 0);
        allData.forEach(el => {
            let hour = el.Time.substring(0, 2);
            if (hour == "10") {
                ten++, (tent += Number(el.People));
            } else if (hour == "11") {
                ele++, (elet += Number(el.People));
            } else if (hour == "12") {
                twe++, (twet += Number(el.People));
            } else if (hour == "13") {
                one++, (onet += Number(el.People));
            } else if (hour == "14") {
                two++, (twot += Number(el.People));
            }
        });
        hoursData.push(
            Math.round(tent / ten),
            Math.round(elet / ele),
            Math.round(twet / twe),
            Math.round(onet / one),
            Math.round(twot / two)
        );
        return hoursData;
    }
    //
    //
    // function fix(x) {
    //     return x < 10 ? "0" + x : x;
    // }
    //
    //
    // function currentQueueStats(allData) {
    //     queueTime = "3";
    //     var today = new Date();     
    //     var date = String(fix(today.getDate())) + String(fix(today.getMonth() + 1));
    //     var time = String(fix(today.getHours())) + String(fix(today.getMinutes()));
    //     queueTime = time;
    //     allData.forEach(el => {
    //         if (
    //             // time == el.Time.substring(0, 4)
    //             el.Time.substring(0, 4) == 1112 &&
    //             date == el.Time.substring(6, 10)
    //         ) {
    //         //   console.log(el)
    //         //   console.log(time, date)
            
    //             // currentPeople += Number(el.People);
    //         }
    //         else{

    //         }
    //     });
    //     return queueTime;
    // }
    //
    //
    dayStats();
    hourlyStats();
    // currentQueueStats();

    
    // updateQ(queueTime)
    makeDaysChart(daysData);
    makeHoursChart(hoursData);

}
