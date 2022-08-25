let customText = document.querySelector('.custom-text')
let currentDay = document.getElementById('currentDay');
let calenderTimes = [09, 10, 11, 12, 13, 14, 15, 16, 17,]
let nineBtn = document.getElementById('9-btn')
let tenBtn = document.getElementById('10-btn')
let elevenBtn = document.getElementById('11-btn')
let twelveBtn = document.getElementById('12-btn')
let oneBtn = document.getElementById('1-btn')
let twoBtn = document.getElementById('2-btn')
let threeBtn = document.getElementById('3-btn')
let fourBtn = document.getElementById('4-btn')
let fiveBtn = document.getElementById('5-btn')
// Displays current date via moment under header
let today = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(today);

//Changes color of textareas based on time of day
let changeColor = function () {
    let hourOfDay = moment().format('HH');
    for (i=0; i < calenderTimes.length; i++) {
        if (calenderTimes[i] < hourOfDay) {
            $("#" + calenderTimes[i]).addClass("past");
          }
          else if (calenderTimes[i] > hourOfDay) {
            $("#" + calenderTimes[i]).addClass("future");
          }
          else {
            $("#" + calenderTimes[i]).addClass("present");
          }
          
        }
    }
changeColor();
// Setting save buttons to store textarea values to localstorage 
nineBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtNine', document.getElementById("9").value)
})
tenBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtTen', document.getElementById("10").value)
})
elevenBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtEleven', document.getElementById("11").value)
})
twelveBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtTwelve', document.getElementById("12").value)
})
oneBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtOne', document.getElementById("13").value)
})
twoBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtTwo', document.getElementById("14").value)
})
threeBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtThree', document.getElementById("15").value)
})
fourBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtFour', document.getElementById("16").value)
})
fiveBtn.addEventListener("click", function () {
    localStorage.setItem('toDoAtFive', document.getElementById("17").value)
})

// document.getElementById("9").value(localStorage.getItem(toDoAtNine))
//Getting stored values from local storage
$("#9").val(localStorage.getItem("toDoAtNine"));
$("#10").val(localStorage.getItem("toDoAtTen"));
$("#11").val(localStorage.getItem("toDoAtEleven"));
$("#12").val(localStorage.getItem("toDoAtTwelve"));
$("#13").val(localStorage.getItem("toDoAtOne"));
$("#14").val(localStorage.getItem("toDoAtTwo"));
$("#15").val(localStorage.getItem("toDoAtThree"));
$("#16").val(localStorage.getItem("toDoAtFour"));
$("#17").val(localStorage.getItem("toDoAtFive"));