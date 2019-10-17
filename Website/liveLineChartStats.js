function fix(x) {
    return x < 10 ? "0" + x : x;
}
function liveStats(allData) {
    //Checking if online
    var today = new Date();
    var date = String(fix(today.getDate())) + String(fix(today.getMonth() + 1));
    var time = String(fix(today.getHours())) + String(fix(today.getMinutes()));
    let onlineBool = false;
    allData.forEach(el => {
        if (
            (time == el.Time.substring(0, 4) ||
                time - 1 == el.Time.substring(0, 4)) &&
            date == el.Time.substring(6, 10)
        ) {
            onlineBool = true;
        } 
    });

    var liveData = [];
    var day = new Date();
    var TODAY = fix(day.getDate()) + "" + fix(day.getMonth() + 1);
    allData.forEach(el => {
        var current = el.Time.substring(6, 10);
        if (current === TODAY) {
            liveData.push(el);
        }
    });
    if (onlineBool) {
        $("#liveChartContainer").show();
        makeLiveChart(liveData);
    } else {
        $("#liveChartContainer").hide();
    }
}
