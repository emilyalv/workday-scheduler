$(document).ready(function () {
//moment variables    
var currentDay = document.querySelector('#currentDay');
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
//time slots
eightA = $("#slot-8");
nineA = $("#slot-9");
tenA = $("#slot-10");
elevenA = $("#slot-11");
noon = $("#slot-12");
oneP = $("#slot-1");
twoP = $("#slot-2");
threeP = $("#slot-3");
fourP = $("#slot-4");
fiveP = $("#slot-5");
    
var timeSlotsArr = [eightA, nineA, tenA, elevenA, noon, oneP, twoP, threeP, fourP, fiveP];
//saved data
var savedEight = localStorage.getItem ('area8');
var savedNine = localStorage.getItem ('area9');
var savedTen = localStorage.getItem ('area10');
var savedEleven = localStorage.getItem ('area11');
var savedNoon = localStorage.getItem ('area12');
var savedOne = localStorage.getItem ('area-1');
var savedTwo = localStorage.getItem ('area-2');
var savedThree = localStorage.getItem ('area-3');
var savedFour = localStorage.getItem ('area-4');
var savedFive = localStorage.getItem ('area-5');

//compare timeslot to curren hour
for (i = 0; i < timeSlotsArr.length; i++) {
    let timeSlot = timeSlotsArr[i]; 
    let timeSlotValue = (parseInt(timeSlot.text()))
    console.log (timeSlotValue)
    let currentHour = moment().hours ();  
    console.log (currentHour)
    //if timeslot earlier than now
    if (timeSlotValue < currentHour ){
        console.log (timeSlot + "less");
        timeSlot.parent().addClass('past')
    }
    //if timeslot = now
    else if (timeSlotValue === currentHour) {
        console.log (timeSlot + "same");
        timeSlot.parent().addClass('present')
    }
    //if timeslot later than now
        else {console.log (timeSlot + "more");
        timeSlot.parent().addClass('future')
    }
  };

  $('.saveBtn').click(function () {
      savedEight = ($('#area-8').text());
      localStorage.setItem ('area8', savedEight);
      console.log (savedEight);
      savedNine = ($('#area-9').text());
      localStorage.setItem ('area9', savedNine);
      console.log (savedNine);
      savedTen = ($('#area-10').text());
      localStorage.setItem ('area10', savedTen);
      console.log (savedTen);
      savedEleven = ($('#area-11').text());
      localStorage.setItem ('area11', savedEleven);
      console.log (savedEleven);
      savedNoon = ($('#area-12').text());
      localStorage.setItem ('area12', savedNoon);
      console.log (savedNoon);
      savedOne = ($('#area-1').text());
      localStorage.setItem ('area-1', savedOne);
      console.log (savedOne);
      savedTwo = ($('#area-2').text());
      localStorage.setItem ('area-2', savedTwo);
      console.log (savedTwo);
      savedThree = ($('#area-3').text());
      localStorage.setItem ('area-3', savedThree);
      console.log (savedThree);
      savedFour = ($('#area-4').text());
      localStorage.setItem ('area-4', savedFour);
      console.log (savedFour);
      savedFive = ($('#area-5').text());
      localStorage.setItem ('area-5', savedFive);
      console.log (savedFive);
    });

})
