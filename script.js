$(document).ready(function () {
        //display current day & time.
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, LTS")); 
        //saveBtn click event listener
        $(".saveBtn").on("click", function () {
            //Use this pointer
            console.log(this);
            var savedTask = $(this).siblings(".description").val(); 
            var time = $(this).parent().attr("id"); 
            //Alert when the user clicks the Save button without typing any task
            if (savedTask === ""){
                alert("Please enter a task!");
            } else{
            //set items in local storage.
            localStorage.setItem(time, savedTask);
            }
        })

    
        function timeCheck() {
            //Current the number of current hour (0, 1, 2....23)
            var currentHour = moment().hour(); 
            // Loop over time blocks
            $(".time-block").each(function () {
                //Get the numberd of block hours
                var blockHour = parseInt($(this).attr("id"));
                console.log(blockHour, currentHour);
    
                //Compares the block hours and the current hour, and add classes of past, current or future to the block hours
                if (blockHour < currentHour) {
                    // If time slot is the past time, it'll be gray.
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                } else if (blockHour === currentHour) {
                    // If time slot is in the present, it'll be red.
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                } else {
                     // If time slot is in the future, it'll be green.
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
        }

        
                //Load any saved data from LocalStorage
                $("#9 .description").val(localStorage.getItem("9"));
                $("#10 .description").val(localStorage.getItem("10"));
                $("#11 .description").val(localStorage.getItem("11"));
                $("#12 .description").val(localStorage.getItem("12"));
                $("#13 .description").val(localStorage.getItem("13"));
                $("#14 .description").val(localStorage.getItem("14"));
                $("#15 .description").val(localStorage.getItem("15"));
                $("#16 .description").val(localStorage.getItem("16"));
                $("#17 .description").val(localStorage.getItem("17"));

        timeCheck(); 




    })