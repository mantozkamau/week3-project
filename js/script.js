$(document).ready(function () {
    $(".brand").click(function () {
        $(".brand img").toggle();
        $("#jumbo p").toggle();
    });
    $(".dev").click(function () {
        $(".dev img").toggle();
        $("#tron p").toggle();
    });
    $(".product").click(function () {
        $(".product img").toggle();
        $("#fluid p").toggle();
    });
    $("#one").hover(function () {
        $("#first").slideToggle();
    });
    $("#two").hover(function(){
        $("#test").SlideToggle();
    });
    $("#three").hover(function(){
        $("#set").slideToggle();
    });
    $("#four").hover(function(){
        $("#st").slideToggle();
    });
    $("#five").hover(function(){
        $("#work").slideToggle();
    });

    $("#six").hover(function(){
        $("#stdi").slideToggle();
    });

    $("#seven").hover(function(){
        $("#std").slideToggle();
    });

    $("#eight").hover(function(){
        $("#studio").slideToggle();
    });
  
});


function myFunction(name) {
var name = document.getElementById("name").value
  if(name<=0){
      alert("invalid input")
  }
  else{
    alert("Hae" + " " + name + " we have received your message. Thank you for reaching out to us");
  }

  };



