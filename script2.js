$(document).ready(function () {
    //moment variables    
    var currentDay = document.querySelector('#currentDay');
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
    //time , e.g. 8pm
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
          //save to local storage
          var time = $(this).parent().attr("id");
    
          savedEight = ($('.area-8').val());
          localStorage.setItem (time, savedEight);
    
          console.log (savedEight);
    
          savedNine = ($('.area-9').val());
          localStorage.setItem (time, savedNine);
          console.log (savedNine);
          savedTen = ($('.area-10').val());
          localStorage.setItem (time, savedTen);
          console.log (savedTen);
          savedEleven = ($('.area-11').val());
          localStorage.setItem (time, savedEleven);
          console.log (savedEleven);
          savedNoon = ($('.area-12').val());
          localStorage.setItem (time, savedNoon);
          console.log (savedNoon);
          savedOne = ($('.area-1').val());
          localStorage.setItem (time, savedOne);
          console.log (savedOne);
          savedTwo = ($('.area-2').val());
          localStorage.setItem (time, savedTwo);
          console.log (savedTwo);
          savedThree = ($('.area-3').val());
          localStorage.setItem (time, savedThree);
          console.log (savedThree);
          savedFour = ($('.area-4').val());
          localStorage.setItem (time, savedFour);
          console.log (savedFour);
          savedFive = ($('.area-5').val());
          localStorage.setItem (time, savedFive);
          console.log (savedFive);
        });
    
    //saved data
    $(".area-8"),val(localStorage.getItem(savedEight)); 
    //test this out ^ ok
    var savedNine = localStorage.getItem ('area9');
    var savedTen = localStorage.getItem ('area10');
    var savedEleven = localStorage.getItem ('area11');
    var savedNoon = localStorage.getItem ('area12');
    var savedOne = localStorage.getItem ('area-1');
    var savedTwo = localStorage.getItem ('area-2');
    var savedThree = localStorage.getItem ('area-3');
    var savedFour = localStorage.getItem ('area-4');
    var savedFive = localStorage.getItem ('area-5');
    
    
    })
    