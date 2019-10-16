function fix(x) {
    return x < 10 ? "0" + x : x;
}

function queueStats(allData) {
    var today = new Date();
    var date = String(fix(today.getDate())) + String(fix(today.getMonth() + 1));
    var time = String(fix(today.getHours())) + String(fix(today.getMinutes()));
    let currentPeople = 0;
    let queueMin = 2;
    let queueMid = 5;
    let queueMax = 8;
    let counter = 0;
    let onlineBool = false;
    allData.forEach(el => {
        if (
            (time == el.Time.substring(0, 4) ||
                time - 1 == el.Time.substring(0, 4)) &&
            date == el.Time.substring(6, 10)
        ) {
            counter++;
            currentPeople += Number(el.People);
            onlineBool = true;
        }
    });
    currentPeople = currentPeople / counter;
    let queueTime = 0;
    let colour = "#029DB2";
    let bk = "rgba(4, 95, 96, 1)";
    if (currentPeople > 0) {
        if (currentPeople == 1) {
            queueTime = 1;
            colour = "#94F000";
            bk = "#108B31";
        }
        if (currentPeople > 1 && currentPeople <= queueMin) {
            queueTime = 3;
            colour = "#94F000";
            bk = "#108B31";
        } else if (currentPeople > queueMin && currentPeople <= queueMid) {
            queueTime = 5;
            colour = "#FF8E00";
            bk = "#B66908";
        } else if (currentPeople > queueMid && currentPeople <= queueMax) {
            queueTime = 7;
            colour = "#FF6A00";
            bk = "#BD4E00";
        } else if (currentPeople > queueMax) {
            queueTime = 10;
            colour = "#FF1300";
            bk = "#C40E00";
        }
    }
    updateQ(queueTime, colour, bk, onlineBool);
}
