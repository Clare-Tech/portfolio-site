
 const d = new Date();
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = week[d.getUTCDate()]

    document.getElementById("ctime").innerHTML =d.getUTCDate()
    document.getElementById("cday").innerHTML = day