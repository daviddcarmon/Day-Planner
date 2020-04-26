/* <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead"></p>
      </header> */

//set #currentDay - time
//when hour changes so should the colors of .todoList - past, present, or future
//save name="todoList" id="8" class="col-8 input" to localStorage on  button class="col-2 saveBtn"><i class="save" and needs saved events to persist

//HOW DO YOU GET TIME AND DATE!

// variables
var currentDay = moment();
var date = new Date();
var currentHour = date.getHours();

console.log(currentDay.format("dddd, MMMM DD"));
console.log(currentHour);

var toDO;
var hourTodo;

$(document).ready(function () {
  renderText();
  colorChange();

  //refine with for loop? create an array of time/id
  function renderText() {
    var todoList8 = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(todoList8);

    var todoList9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(todoList9);

    var todoList10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(todoList10);

    var todoList11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(todoList11);

    var todoList12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(todoList12);

    var todoList1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(todoList1);

    var todoList2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(todoList2);

    var todoList3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(todoList3);

    var todoList4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(todoList4);

    var todoList5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(todoList5);
  }

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    //toDO = $(this)returns and object .sibilings traverse .input.val()
    toDO = $(this).siblings(".input").val().trim();
    //hourTodo = $(this).attr(".hour").text()
    hourTodo = $(this).siblings(".hour").text();
    localStorage.setItem(hourTodo, JSON.stringify(toDO));
    renderText();
    console.log(this);
  });

  function colorChange() {
    //if time changes add or remove class of - past, present, or future
    $(".input").each(function () {
      // var currentTime = moment().hours();
      //should be returning timeBlock id - current return is NaN - without parseInt returns undefined
      console.log($(this).attr("id"));
      var timeBlock = parseInt($(this).attr("id"));

      if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    });
  }
});
