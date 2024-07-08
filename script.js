
 function myFunction(){
   const currentUTCDate = new Date();
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   let utcDayOfWeek = daysOfWeek[currentUTCDate.getDay()]
   const utcTime = currentUTCDate.toISOString().split("T")[1].split(".")[0]

   document.getElementById("utcDayOfWeek").textContent =utcDayOfWeek
   document.getElementById("utcTime").textContent = utcTime
 }
 myFunction()
 setInterval(myFunction,1000)