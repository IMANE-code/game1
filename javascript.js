var radio3 = document.getElementsByName("radioname3");
var radio1 = document.getElementsByName("radioname1");
var radio2 = document.getElementsByName("radioname2");

function score() {
  var result = 0;
  result = result + 1;
  document.getElementById('score').textContent = result;
}
function Egal() {
  var playagain = document.getElementById("play-again");
  if (((radio2[0].style.display == 'block') && (radio3[0].style.display == 'block')) ||
    ((radio2[1].style.display == 'block') && (radio3[1].style.display == 'block')) ||
    ((radio2[2].style.display == 'block') && (radio3[2].style.display == 'block'))) {
    playagain.textContent = "TRY AGAIN";
    playagain.style.backgroundColor = "hsl(229, 96%, 51%)";
    playagain.style.fontSize = "30px";
    playagain.style.color = "white";

  }
}
function You_Win() {
  var picked2 = document.getElementById("picked2");
  if (((radio2[0].style.display == 'block') && (radio3[1].style.display == 'block')) ||
    ((radio2[1].style.display == 'block') && (radio3[2].style.display == 'block')) ||
    ((radio2[2].style.display == 'block') && (radio3[0].style.display == 'block'))) {
    picked2.textContent = "YOU WIN";
    picked2.style.color = "rgb(38, 226, 38)";
    picked2.style.textShadow = "0 0 10px white";
    score();
  }
}

function You_Lost() {
  var picked2 = document.getElementById("picked2");
  if (((radio2[1].style.display == 'block') && (radio3[0].style.display == 'block')) ||
    ((radio2[2].style.display == 'block') && (radio3[1].style.display == 'block')) ||
    ((radio2[0].style.display == 'block') && (radio3[2].style.display == 'block'))) {
    picked2.textContent = "YOU LOST";
    picked2.style.color = "rgb(231, 47, 47)";
    picked2.style.textShadow = "0 0 10px white";
  }
}
function cpuChois() {
  var index = Math.floor(Math.random() * 3);
  Math.floor(Math.random() * 3);
  if (index == 0)
    radio3[0].style.display = 'block';
  else {
    if (index == 1)
      radio3[1].style.display = 'block';
    else
      radio3[2].style.display = 'block';
  }
}

function jouer() {
  document.getElementById('form1').style.display = 'none';
  if (radio1[0].checked)
    radio2[0].style.display = "block";
  else {
    if (radio1[1].checked)
      radio2[1].style.display = "block";
    else
      radio2[2].style.display = "block";
  }
  document.getElementById('form2').style.display = 'block';
  cpuChois();
  You_Win();
  You_Lost();
  Egal();
}
function rules() {
  form = document.getElementById('form-popup');
  form.style.display = "block";
}
function play_again() {
  location.reload();
}