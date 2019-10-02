function updateQ(queueTime) {
    let queueSpan = document.getElementsByClassName("currentQueue");
        return queueTime > 0
        ? (queueSpan[0].innerHTML = queueSpan[1].innerHTML = 
             "live: " + String(queueTime) + " mins")
        : (queueSpan[0].innerHTML = queueSpan[1].innerHTML = "No queue");
    }
 
