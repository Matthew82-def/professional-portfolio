$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("font-size" , "100px" );    
    }, function(){
        $(this).css("font-size" , "64px" );
    });
});

// 1em = 16px
// Each icon = 64px

// $(document).ready(function() {
//     $("#header").hover(function() {
//         $(this).css("background-color" , "silver" );   
//     }, function(){
//         $(this).css("background-color" , "yellow" );
//     });
// });



    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitObject = JSON.parse(this.responseText);
            for (var i = 0; i < gitObject.length; i++){
                //jQuery append
                $("#gitHub").append("<p>" + gitObject[i].name + "</p>");
            }
            // myObject[i].name
            // document.getElementById("gitHub").innerHTML = gitObject.name;
            console.log(gitObject.hub);
        }
    };
gitHubRequest.open("GET", "https://api.github.com/users/MATTHEW82-def/repos", true);
    gitHubRequest.send();


    