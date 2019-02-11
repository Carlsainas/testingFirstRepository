// mobile navbar click menu
function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
    if(x.className === "topnav"){
        x.className += " responsive";
// Change topnav to topnav.responsive (adds responsive to topnav when we have display smaller or same as 680px )
    } 
    else{ 
        x.className = "topnav";
    }
}