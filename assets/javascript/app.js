$(document).ready(function(){
  $("#startButton").click(function(){
    var time = 60;
    alert("Get started!");
    start();}

    $("#startButton").on("click", start); 
    $("#submit").on("click", finish, check);
    $("#restart").on("click", restart);  

// functions
    function start(){
      var counter = setInterval(timer, 1000);
    
    }
    function timer(){
      time--;
      $("#showTime").html(time);
      if (time === 0){
        alert("Times Up!")
        stop();
      }
    }
    function stop(){
      clearInterval(counter);
  
    }
    function finish(){
      time = 0;
      clearInterval(counter); 
      
    }

    function restart(){
      time = 60;
      start();
    }

    function check(){
      if($("#1a").checked === true)  {
        $("#results1").html("correct");}

         else {$("#results1").html("incorrect");}

      if($("#2c").checked === true)  {
        $("#results2").html("correct");}

          else {$("#results2").html("incorrect");}

      if($("#3b").checked === true)  {
        $("#results3").html("correct");}

          else {$("#results3").html("incorrect");}

      if($("#4c").checked === true)  {
        $("#results4").html("correct");}

         else {$("#results4").html("incorrect");}

      if($("#5d").checked === true)  {
        $("#results5").html("correct");}

          else {$("#results5").html("incorrect");}




    };


  });

 