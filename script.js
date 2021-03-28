$(document).ready(function () {
//moment variables    
var currentDay = document.querySelector('#currentDay');
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

//add colors based on time
var timeSlotsArr = $('textarea').get();
for (i = 0; i < timeSlotsArr.length; i++) {
    let timeSlot = timeSlotsArr[i]; 
    let timeSlotId = parseInt($(timeSlot).attr('id'));
    let currentHour = moment().hours ();  
    //if timeslot earlier than now
    if (timeSlotId < currentHour ){
        $(timeSlot).parent().addClass('past');
    }
    //if timeslot = now
    else if (timeSlotId === currentHour) {
        $(timeSlot).parent().addClass('present');
    }
    //if timeslot later than now
    else {
        $(timeSlot).parent().addClass('future')
    }
}


//save to local storage
$('.btn8').click(function () {
    //8am
    var saveText = $('#8').val();
    localStorage.setItem('8-text', saveText) 
})
$('.btn9').click(function () {
    //9am
    var saveText = $('#9').val();
    localStorage.setItem('9-text', saveText) 
})
$('.btn10').click(function () {
    //10am
    var saveText = $('#10').val();
    localStorage.setItem('10-text', saveText) 
})
$('.btn11').click(function () {
    //11am
    var saveText = $('#11').val();
    localStorage.setItem('11-text', saveText) 
})
$('.btn12').click(function () {
    //12pm
    var saveText = $('#12').val();
    localStorage.setItem('12-text', saveText) 
})
$('.btn13').click(function () {
    //1pm
    var saveText = $('#13').val();
    localStorage.setItem('13-text', saveText) 
})
$('.btn14').click(function () {
    //2pm
    var saveText = $('#14').val();
    localStorage.setItem('14-text', saveText) 
})
$('.btn15').click(function () {
    //3pm
     var saveText = $('#15').val();
        localStorage.setItem('15-text', saveText) 
})
$('.btn16').click(function () {
    //4pm
    var saveText = $('#16').val();
    localStorage.setItem('16-text', saveText) 
})
$('.btn17').click(function () {
    //5pm
    var saveText = $('#17').val();
    localStorage.setItem('17-text', saveText) 
}
)

//get local storage
function getItems () {
    //8am
    eighText = localStorage.getItem('8-text');
    $('#8').text(eighText);
    //9am
    nineText = localStorage.getItem('9-text');
    $('#9').text(nineText);
    //10am
    tenText = localStorage.getItem('10-text');
    $('#10').text(tenText);
    //11am
    elevenText = localStorage.getItem('11-text');
    $('#11').text(elevenText);
    //12pm
    twelveText = localStorage.getItem('12-text');
    $('#12').text(twelveText);
    //1pm
    oneText = localStorage.getItem('13-text');
    $('#13').text(oneText);
    //2pm
    twoText = localStorage.getItem('14-text');
    $('#14').text(twoText);
    //3pm
    threeText = localStorage.getItem('15-text');
    $('#15').text(threeText);
    //4pm
    fourText = localStorage.getItem('16-text');
    $('#16').text(fourText);
    //5pm
    fiveText = localStorage.getItem('17-text');
    $('#17').text(fiveText);

}

getItems();

}
)