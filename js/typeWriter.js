var i = 0;
var txt = 'Junior Web Developer';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-writer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 100);