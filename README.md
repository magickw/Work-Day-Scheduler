# Work Day Scheduler

## Purpose
This project is to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Getting Started


## Process
* Step 1. Creating time slots for a working day.<br>
This step is implemented in html file by slicing a 9am-5pm typical working day into 8 time slots. A basic structure is thus created. Assign every time slot a value for example 9, 10 11 and so on in order to determine which time slots are past, current or future by comparing them with the current hour. <br>

* Step 2. Using momemt() functions to get the current date and time.<br>
  By comparing the values of time blocks with the value of current hour, the time blocks will be added classes i.e. addClass() of past, current or future and thus color coded by applying CSS.<br>
* Step 3. Use .localStorage() method to store the user's input. <br>
 <br>

* Step 4. Load any saved data from LocalStorage.<br>
  As of this step, all acceptance criteria have been met. Howerver, there is a drawback. The user can only use the Backspace key in order to delete a save entry. Therefore, I tried to add a trash button to every time block to save time.


## Demo

Note: the actual results of the deployed application may be slightly different from the Demo as shown below due to the differences in CSS applied: <br>
<img src="demo.gif" alt="screenshot" />

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JQuery](https://jquery.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [Moment.js](https://momentjs.com/docs/)
* [Bootstrap](https://getbootstrap.com/)


# Deployed Link

The link to the deployed application is: https://magickw.github.io/Work-Day-Scheduler/


## Authors

**Baofeng Guo**

- Github： https://github.com/magickw
- LinedIn： https://www.linkedin.com/in/bfguo/


## License
This project is licensed under the MIT License


