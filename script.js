$(document).ready(function () {
        //display current day & time.
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
        //saveBtn click event listener
        $(".saveBtn").on("click", function () {
            //use this pointer
            console.log(this);
            var text = $(this).siblings(".description").val(); 
            var time = $(this).parent().attr("id"); 
            //set items in local storage.
            localStorage.setItem(time, text);
        })

    
        function hourTracker() {
            //Current the number of current hour (0, 1, 2....24)
            var currentHour = moment().format("H"); 
            // loop over time blocks
            $(".time-block").each(function () {
                //Get the numberd of block hours
                var blockHour = parseInt($(this).attr("id"));
                console.log(blockHour, currentHour);
    
                //Compares the block hours and the current hour, and add classes of past, current or future to the block hours
                if (blockHour < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                } else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                } else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
        }

        
                //load any saved data from LocalStorage
                $("#hr9 .description").val(localStorage.getItem("hr9"));
                $("#hr10 .description").val(localStorage.getItem("hr10"));
                $("#hr11 .description").val(localStorage.getItem("hr11"));
                $("#hr12 .description").val(localStorage.getItem("hr12"));
                $("#hr13 .description").val(localStorage.getItem("hr13"));
                $("#hr14 .description").val(localStorage.getItem("hr14"));
                $("#hr15 .description").val(localStorage.getItem("hr15"));
                $("#hr16 .description").val(localStorage.getItem("hr16"));
                $("#hr17 .description").val(localStorage.getItem("hr17"));

        hourTracker(); 


    })