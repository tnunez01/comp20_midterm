$(document).ready(function () {
  $(".burger").click(function () {
    $("#mySidenav").show("slide");
  });

  $(".closebtn").click(function () {
    $("#mySidenav").hide("slide");
  });

  $(".close-nav").click(function () {
    $("#mySidenav").hide();
  });

  $(".side-drop-btn").click(function () {
    $(".dropdown-container").toggle();
  });
});
