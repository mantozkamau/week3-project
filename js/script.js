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
    $(".row").hover(function () {
        $("#first").toggle();
    });
    // var userName = " ";
    // function myFunction(submit) {
       
    //     return userName;
    
    // }
    // alert("Hae" + userName + " we have received your message" + "." + "Thank you for reaching out to us")
    // myFunction();
    
});
