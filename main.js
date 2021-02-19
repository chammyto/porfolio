 //navbar mausob color inig scroll down ug molapas 200 unya mobalik transparent inig scroll top.
 window.addEventListener("scroll", function(){
     if(window.scrollY > 200){
         document.querySelector("#top-nav").style.background = "#242526";
     }else{
        document.querySelector("#top-nav").style.background = "transparent";
     }
 }) 
 //gicheck kung ireload or iscroll ang page
    $(document).ready(function(){
        CheckHeaderStatus();
    $(window).scroll(function(){
        CheckHeaderStatus();
    });
});
//naa gihapon ang background color sa navbar bisag ireload ang page basta above 200 ang scroll position
function CheckHeaderStatus(){
    var navbar = $("#top-nav");
    var scrollPosition = $(window).scrollTop();
    if(scrollPosition < 200){
        navbar.css("background-color", "transparent");
        navbar.css("transition", "0.3s ease");
    }else{
        navbar.css("background-color", "#242526");
    }
}
//inig scroll sa page mo fade-in ug fade-out ang back to top button
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) { 
            $('#b2topButton').fadeIn(); 
        } else { 
            $('#b2topButton').fadeOut(); 
        } 
    }); 
//inig click sa back to top button moscroll balik sa top
    $('#b2topButton').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
});
//hide ug show sa skills section
$(document).ready(function(){
    $(".text-desc-graphic, .text-desc-system, .text-desc-ui, .text-desc-webdev").hide(0);
    $(".text-desc-webdev, #web-caret").toggle('slow');

//inig click sa Services nga link 
    $("#service").click(function(){
   // mopen ang description sa webdev inig click sa Services
   $(".text-desc-webdev, #web-caret").toggle('slow');
});
  //-------ALTERNATE OPENING AND CLOSING---------//
   //inig click sa webdev moclose ang uban nga ga open except sa graphic design
   $(".show-hide-web").click(function(){
    $(".text-desc-system, .text-desc-ui").hide('slow');
    $("#system-caret, #ui-caret").show();
    $(".text-desc-webdev, #web-caret").toggle('slow'); 
  });
  //mohide ang ubang decsription inig click sa graphic design
    $(".show-hide-graphic").click(function(){
    $(" .text-desc-system, .text-desc-ui").hide('slow');
    $("#system-caret, #ui-caret").show();
    $(".text-desc-graphic, #graphic-caret").toggle('slow');        
  });
  //mohide ang ubang decsription inig click sa web and systems application
    $(".show-hide-system").click(function(){
    $(".text-desc-webdev, .text-desc-graphic" ).hide('slow');
    $("#web-caret, #graphic-caret").show();
    $(".text-desc-system, #system-caret").toggle('slow'); 
  });
  //mohide ang ubang decsription inig click sa UI/UX Design
    $(".show-hide-ui").click(function(){
    $(".text-desc-webdev, .text-desc-graphic").hide('slow');
    $("#web-caret, #graphic-caret").show();
    $(".text-desc-ui, #ui-caret").toggle('slow');   
  });
});


//------KANI ANG MGA FUNCTIONS NGA NAGAMIT SA MGA JAVASCRIPT UG HTML EVENTS--------------//

   //ug isubmit ang form nga empty
    function oninvalidFunction(){
        alert('You must fill out the form!');
    };
    //inig submit sa form nga validated na
    function onsubmitFunction() {
        alert("Thanks for sending me an email. I'll get back to you as soon as possbile.");
    };
    //inig open sa side navigation bar
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        }
    //inig close sa side navigation bar
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        };
    //inig hover sa cursor sa profile pic mo grayscale unya balik sa color inig leave sa mouse
    function colored(x){
        x.style.filter = "none";
        x.style.height = "100px";
        x.style.width = "260px";
        x.style.transition = ".5s ease";
    }
    function ontoggleFunction(){
    }
    function grey(x){
        x.style.filter = "grayscale(100%)";
        x.style.height = "102px";
        x.style.width = "262px";
        x.style.transition = "0.3s ease";
    }
    function downloadConfirm(){
        alert("Thank you for downloading my resume.")
    }
    function onfocusFunction(a) {
        a.style.background = "#18191a"; //black
    }
    function onfocusoutFunction(x) {
        x.style.background = "#343a40"; //grey
    }
    function grayImg(x) {
        x.style.filter = "grayscale(100%)";
    }  
    function coloredImg(x) {
        x.style.filter = "none";
    }



