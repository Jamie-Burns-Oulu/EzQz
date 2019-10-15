function updateQ(queueTime, colour, bk, onlineBool) {
    let queueSpan = document.getElementsByClassName("currentQueue");
    let queueSpan1 = document.getElementById("queueMain");
    queueSpan1.style.border = "3px solid " + bk;
    queueSpan1.style.backgroundColor = colour;
    if (onlineBool) {
        var actualQueueTime =
            queueTime > 0
                ? "EzQz: " + String(queueTime) + "mins"
                : "EzQz: No queue";
        $("title").text(actualQueueTime);

        return queueTime > 0
            ? (queueSpan[0].innerHTML = queueSpan[1].innerHTML =
                  "live: " + String(queueTime) + " mins")
            : (queueSpan[0].innerHTML = queueSpan[1].innerHTML = "No queue");
    } else {
        $("title").text("EzQz: Offline ");
        queueSpan[0].innerHTML = queueSpan[1].innerHTML = "Offline";
        queueSpan1.style.backgroundColor = "#FE0006";
        queueSpan1.style.border = "3px solid #C40E00";
    }
}
