function fix(x) {
    return x < 10 ? "0" + x : x;
}
function liveStats(allData) {
    var liveData = [];
    var day = new Date();
    var TODAY = fix(day.getDate()) + "" +(fix(day.getMonth() +1));
    allData.forEach( el => {
        var current = el.Time.substring(6, 10)
        if(current === TODAY) {
            liveData.push(el);
        }
    });
    makeLiveChart(liveData);
}