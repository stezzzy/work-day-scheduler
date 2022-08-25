let customText = document.querySelector('.custom-text')
let currentDay = document.getElementById('currentDay');
let calenderTimes = [09, 10, 11, 12, 13, 14, 15, 16, 17,]
let nineBtn = document.getElementById('9-btn')
let nineBtn = document.getElementById('10-btn')
let nineBtn = document.getElementById('11-btn')
let nineBtn = document.getElementById('12-btn')
let nineBtn = document.getElementById('1-btn')
let nineBtn = document.getElementById('2-btn')
let nineBtn = document.getElementById('3-btn')
let nineBtn = document.getElementById('4-btn')
let nineBtn = document.getElementById('5-btn')

let today = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(today);

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