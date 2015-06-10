var dropping = false;

$(document).ready(function() {
  $('div').click(function(){
       alert("Hello.....");
      });

 });

$(function() {
    // function to drag items
    $( ".drag" ).draggable({ revert: true });        
    // function to drop items
    net = $(".drop").droppable({
       drop: function( event, ui ) {
           console.log(event.originalEvent.target.id);
           var droppedObject = event.originalEvent.target.id;
        switch (droppedObject) {
            case "basketBall":
                // make basketball goal larger when dropped
                $( this ).animate({height: "auto", width: "200px", left: "-15px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "190px", left: "-10px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "182px", left: "-5px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                var basketball = document.getElementById("basketBall");
                // return basketball icon size to original size
                basketball.style.height="35px";
                basketball.style.width="35px";
                // change upper text when successfully dropped
                var loadingText = document.getElementById("text");
                loadingText.innerHTML = "Loading Basketball";
                // change lower text when successfully dropped
                var alertMake = document.getElementById("alert");
                alertMake.innerHTML = "Nice Shot";
                alertMake.style.left = "102px";
                break;
            case "soccerBall":
                // make soccer goal larger when dropped
                $( this ).animate({height: "auto", width: "200px", left: "-15px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "190px", left: "-10px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "182px", left: "-5px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                var soccerball = document.getElementById("soccerBall");
                // return basketball icon size to original size
                soccerball.style.height="35px";
                soccerball.style.width="35px";
                // change upper text when successfully dropped
                var loadingText = document.getElementById("text");
                loadingText.innerHTML = "Loading Soccer";
                // change lower text when successfully dropped
                var alertMake = document.getElementById("alert");
                alertMake.innerHTML = "Nice Shot";
                alertMake.style.left = "102px";
                break;
            case "baseBall":
                // make baseball bat larger when dropped
                $( this ).animate({height: "auto", width: "200px", left: "-15px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "190px", left: "-10px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "182px", left: "-5px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                var baseball = document.getElementById("baseBall");
                // return basketball icon size to original size
                baseball.style.height="35px";
                baseball.style.width="35px";
                // change upper text when successfully dropped
                var loadingText = document.getElementById("text");
                loadingText.innerHTML = "Loading Baseball";
                // change lower text when successfully dropped
                var alertMake = document.getElementById("alert");
                alertMake.innerHTML = "Nice Hit";
                alertMake.style.left = "104px";
                break;
            case "tennisBall":
                // make tennis racquet larger when dropped
                $( this ).animate({height: "auto", width: "200px", left: "-15px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                $( this ).animate({height: "auto", width: "190px", left: "-10px"});
                $( this ).animate({height: "auto", width: "173px", left: "  0px"});
                $( this ).animate({height: "auto", width: "182px", left: "-5px"});
                $( this ).animate({height: "auto", width: "173px", left: "0px"});
                var tennisball = document.getElementById("tennisBall");
                // return basketball icon size to original size
                tennisball.style.height="35px";
                tennisball.style.width="35px";
                // change upper text when successfully dropped
                var loadingText = document.getElementById("text");
                loadingText.innerHTML = "Loading Tennis";
                // change lower text when successfully dropped
                var alertMake = document.getElementById("alert");
                alertMake.innerHTML = "Nice Stroke";
                alertMake.style.left = "94px";
                break;
        }
       },
       // when mouse is over the droppable img, "dropping" variable is true
        over: function() {
           dropping = true;
           
       },
       // when mouse is out of the droppable img, "dropping" variable is false
        out: function() {
           dropping = false;
       }
    });  
});

$(document).ready(function(){
        // function when user click on the draggable image
        $(".drag").mousedown(function(){
        dropping = false;
          var draggedObject = event.target.id;
          switch (draggedObject) {
            case "basketBall":
                // enlarge icon when grabbed
                var basketball = document.getElementById("basketBall");
                basketball.style.height="55px";
                basketball.style.width="55px";
                // make goal visible when grabbed
                var basketballGoal = document.getElementById("basketBall_Goal");
                setTimeout(function(){
                basketballGoal.style.visibility="visible";
                });
                // hide other icons that are not grabbed
                var soccerball = document.getElementById("soccerBall");
                soccerball.style.visibility="hidden";
                var baseball = document.getElementById("baseBall");
                baseball.style.visibility="hidden";
                var tennisball = document.getElementById("tennisBall");
                tennisball.style.visibility="hidden";
                // change upper text for instruction
                var changeText = document.getElementById("text");
                changeText.innerHTML = "Throw the ball inside the hoop";
                // make the goal shake when the icon is selected
                $( document ).mousedown(function() {
                $( "#basketBall_Goal" ).effect( "shake", {time:2, distance: 6}, 100);
                });
                break;
            case "soccerBall":
                // enlarge icon when grabbed
                var soccerball = document.getElementById("soccerBall");
                soccerball.style.height="55px";
                soccerball.style.width="55px";
                // make goal visible when grabbed
                var soccerGoal = document.getElementById("soccer_Goal");
                setTimeout(function(){
                soccerGoal.style.visibility="visible";
                });
                // hide other icons that are not grabbed
                var basketball = document.getElementById("basketBall");
                basketball.style.visibility="hidden";
                var baseball = document.getElementById("baseBall");
                baseball.style.visibility="hidden";
                var tennisball = document.getElementById("tennisBall");
                tennisball.style.visibility="hidden";
                // change upper text for instruction
                var changeText = document.getElementById("text");
                changeText.innerHTML = "Throw the ball inside the goal";
                // make the goal shake when the icon is selected
                $( document ).mousedown(function() {
                $( "#soccer_Goal" ).effect( "shake", {time:2, distance: 6}, 200);
                });
                break;
            case "baseBall":
                // enlarge icon when grabbed
                var baseball = document.getElementById("baseBall");
                baseball.style.height="55px";
                baseball.style.width="55px";
                // make goal visible when grabbed
                var img = document.getElementById("baseBall_Goal");
                setTimeout(function(){
                img.style.visibility="visible";
                });
                // hide other icons that are not grabbed
                var soccerball = document.getElementById("soccerBall");
                soccerball.style.visibility="hidden";
                var basketball = document.getElementById("basketBall");
                basketball.style.visibility="hidden";
                var tennisball = document.getElementById("tennisBall");
                tennisball.style.visibility="hidden";
                // change upper text for instruction
                var changeText = document.getElementById("text");
                changeText.innerHTML = "Throw the ball to the bat";
                // make the goal shake when the icon is selected
                $( document ).mousedown(function() {
                $( "#baseBall_Goal" ).effect( "shake", {time:2, distance: 6}, 200);
                });
                break;
            case "tennisBall":
                // enlarge icon when grabbed
                var tennisball = document.getElementById("tennisBall");
                tennisball.style.height="55px";
                tennisball.style.width="55px";
                // make goal visible when grabbed
                var img = document.getElementById("tennisBall_Goal");
                setTimeout(function(){
                img.style.visibility="visible";
                });
                // hide other icons that are not grabbed
                var soccerball = document.getElementById("soccerBall");
                soccerball.style.visibility="hidden";
                var baseball = document.getElementById("baseBall");
                baseball.style.visibility="hidden";
                var basketball = document.getElementById("basketBall");
                basketball.style.visibility="hidden";
                // change upper text for instruction
                var changeText = document.getElementById("text");
                changeText.innerHTML = "Throw the ball to the racquet";
                // make the goal shake when the icon is selected
                $( document ).mousedown(function() {
                $( "#tennisBall_Goal" ).effect( "shake", {time:2, distance: 6}, 200);
                });
                break;
            }
        });
        // function when user release the mouse from draggable icon
        $(".drag").mouseup(function(){
                var changeBackText = document.getElementById("text");
                changeBackText.innerHTML = "Drag the sports you want to play";
                $(function() {
                // make disappeared lower text to reappear
                setTimeout(function() {
                    $("#alert").show();
                });
                });
                // change the status of lower text to visible from hidden
                var alertMiss = document.getElementById("alert");
                alertMiss.style.visibility="visible";
                // hide the lower text after 450 ms
                $(function() {
                setTimeout(function() {
                    $("#alert").hide('fade', {}, 1000);
                }, 450);
                });
                // var isHovered = $("#basketBall_Goal").is(":hover");
                var changeDraggedObject = event.target.id;
                switch (changeDraggedObject) {
                    case "basketBall":
                        if(dropping === true) {
                            setTimeout(function(){window.open("basketball.html", "_self");}, 2000);
                        // when draggable image is dropped outside the droppable image
                        } else {
                            // hide goal when drop unsuccessful
                            var img = document.getElementById("basketBall_Goal");
                            img.style.visibility="hidden"; 
                            // change icon size back to original when drop unsuccessful
                            var basketball = document.getElementById("basketBall");
                            basketball.style.height="35px";
                            basketball.style.width="35px";
                            // change icon visible when drop unsuccessful
                            var soccerball = document.getElementById("soccerBall");
                            soccerball.style.visibility="visible";
                            var baseball = document.getElementById("baseBall");
                            baseball.style.visibility="visible";
                            var tennisball = document.getElementById("tennisBall");
                            tennisball.style.visibility="visible";
                        }
                        break;
                    case "soccerBall":
                        if(dropping === true) {
                            setTimeout(function(){window.open("soccer.html", "_self");}, 2000);
                        } else {
                            // hide goal when drop unsuccessful
                            var img = document.getElementById("soccer_Goal");
                            img.style.visibility="hidden";
                            // change icon size back to original when drop unsuccessful
                            var soccerball = document.getElementById("soccerBall");
                            soccerball.style.height="35px";
                            soccerball.style.width="35px";
                            // change icon visible when drop unsuccessful
                            var basketball = document.getElementById("basketBall");
                            basketball.style.visibility="visible";
                            var baseball = document.getElementById("baseBall");
                            baseball.style.visibility="visible";
                            var tennisball = document.getElementById("tennisBall");
                            tennisball.style.visibility="visible";
                        }
                        break;
                    case "baseBall":
                        if(dropping === true) {
                            setTimeout(function(){window.open("baseball.html", "_self");}, 2000);
                        } else {
                            // hide goal when drop unsuccessful
                            var img = document.getElementById("baseBall_Goal");
                            img.style.visibility="hidden"; 
                            // change icon size back to original when drop unsuccessful
                            var baseball = document.getElementById("baseBall");
                            baseball.style.height="35px";
                            baseball.style.width="35px";
                            // change icon visible when drop unsuccessful
                            var soccerball = document.getElementById("soccerBall");
                            soccerball.style.visibility="visible";
                            var basketball = document.getElementById("basketBall");
                            basketball.style.visibility="visible";
                            var tennisball = document.getElementById("tennisBall");
                            tennisball.style.visibility="visible";
                        }
                        break;
                    case "tennisBall":
                        if(dropping === true) {
                            setTimeout(function(){window.open("tennis.html", "_self");}, 2000);
                        } else {
                            // hide goal when drop unsuccessful
                            var img = document.getElementById("tennisBall_Goal");
                            img.style.visibility="hidden"; 
                            // change icon size back to original when drop unsuccessful
                            var tennisball = document.getElementById("tennisBall");
                            tennisball.style.height="35px";
                            tennisball.style.width="35px";
                            // change icon visible when drop unsuccessful
                            var soccerball = document.getElementById("soccerBall");
                            soccerball.style.visibility="visible";
                            var baseball = document.getElementById("baseBall");
                            baseball.style.visibility="visible";
                            var basketball = document.getElementById("basketBall");
                            basketball.style.visibility="visible";
                        }
                        break;
                }
                
        });
});