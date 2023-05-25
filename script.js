$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("font-size" , "100px" );    
    }, function(){
        $(this).css("font-size" , "64px" );
    });
});


let hasLoaded = false;

function loadRepo() {
  if (hasLoaded) {
    return; // Exit the method if it has already been executed
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      results = JSON.parse(this.responseText);
      for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
        let ul = document.getElementById("repo1");
        let li = document.createElement("LI");
        li.className = "list-group-items";
        let a = document.createElement("a");

        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
      }

      hasLoaded = true;
    }
  };

  xhttp.open("GET", "https://api.github.com/users/Matthew82-def/repos", true);
  xhttp.send();
}