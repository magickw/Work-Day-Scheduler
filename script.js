$(document).ready(function () {
        //display current day & time.
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, LTS")); 
        //saveBtn click event listener
        $(".saveBtn").on("click", function () {
            //Use this pointer
            console.log(this);
            // Get values of description in JQuery
            var savedTask = $(this).siblings(".description").val(); 
            var time = $(this).parent().attr("id"); 
            //Alert when the user clicks the Save button without typing any task
            if (savedTask === ""){
                alert("Please enter a task!");
            } else{
            //Save task entries in local storage.
            localStorage.setItem(time, savedTask);
            }
        })

         //Load any saved data from LocalStorage
         $("#hour9 .description").val(localStorage.getItem("hour9"));
         $("#hour10 .description").val(localStorage.getItem("hour10"));
         $("#hour11 .description").val(localStorage.getItem("hour11"));
         $("#hour12 .description").val(localStorage.getItem("hour12"));
         $("#hour13 .description").val(localStorage.getItem("hour13"));
         $("#hour14 .description").val(localStorage.getItem("hour14"));
         $("#hour15 .description").val(localStorage.getItem("hour15"));
         $("#hour16 .description").val(localStorage.getItem("hour16"));
         $("#hour17 .description").val(localStorage.getItem("hour17"));
    
        function timeCheck() {
            //Current the number of current hour (0, 1, 2....23)
            var currentHour = moment().hour(); 
            // Loop over time blocks
            $("textarea").each(function () {
                //Get the numberd of block hours
                var blockHour = parseInt($(this).attr("id"));
                console.log(blockHour, currentHour);
    
                //Compares the block hours and the current hour, and add classes of past, current or future to the block hours
                if (blockHour < currentHour) {
                    // If time slot is the past time, it'll be gray.
                    $(this).addClass("past");
                } else if (blockHour === currentHour) {
                    // If time slot is in the present, it'll be red.
                    $(this).addClass("present");
                } else {
                     // If time slot is in the future, it'll be green.
                    $(this).addClass("future");
                }
            })
        }


        timeCheck(); 

    })