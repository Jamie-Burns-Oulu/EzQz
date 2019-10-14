function updateQ(queueTime, colour, bk) {
    let queueSpan = document.getElementsByClassName("currentQueue");
    let queueSpan1 = document.getElementById("queueMain");
    queueSpan1.style.border = "3px solid "+bk ;
    queueSpan1.style.backgroundColor = colour;
    return queueTime > 0
        ? (queueSpan[0].innerHTML = queueSpan[1].innerHTML =
              "live: " + String(queueTime) + " mins")
        : (queueSpan[0].innerHTML = queueSpan[1].innerHTML = "No queue");
}
