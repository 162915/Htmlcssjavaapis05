// variable to store and loop through scheduler
var myDay = [
    {
        id: "9",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "10",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "11",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id:"12",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "13",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "14",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "15",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "16",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: "" 
    },
    {
        id:"17",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
    
]
getHeaderDate();
displayReminders();
// gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// saves data to localStorage
function saveReminder() {
    localStorage.setItem("myDay", Json.stringfy(myDay));

}
// sets any data to localStorage to the view
function displayReminders() {
    var storedMyDay =  JSON.parse(localStorage.getItem("myDay"));
    if(storedMyDay != null){
    myDay = storedMyDay;
    }
    myDay.forEach(function (_thisHour) {
      var currentHour = moment().format('HH');
      var hourDiv = "hour-"+_thisHour.id;
      $("#"+hourDiv).find("textarea").text(_thisHour.reminder);
      if(_thisHour.time < currentHour){
        $("#"+hourDiv).addClass("past");
      }
      else if(_thisHour.time == currentHour){
        $("#"+hourDiv).addClass("present");
      }
      else if(_thisHour.time > currentHour){
        $("#"+hourDiv).addClass("future");
      }     
       
    })
}

// sets any existing localStorage data to the view if it exists
    function init() {
        var storedDay = Json.parse(localStorage.getItem("myDay"));
    }

function saveReminder(hour){ 
  myDay.forEach(function (_thisHour) {    
    if(_thisHour.id == hour){
      var hourDiv = "hour-"+_thisHour.id;   
      _thisHour.reminder =  $("#"+hourDiv).find("textarea").val();
    }
    localStorage.setItem("myDay", JSON.stringify(myDay))
    
  }) 

}
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page. 

  