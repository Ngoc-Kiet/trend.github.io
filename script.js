/*
Snow Effect source: https://codepen.io/longzero/pen/Kwdbyj
*/

  
function yesClick() {
    alert("Tối nay, đi cafe nhé!");
    window.location="abc.html";
  }
  
  function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
  }

 