let person_svg = document.getElementById('person');
person_svg.addEventListener('mouseover', fallingPerson);
person_svg.addEventListener('mouseout', backIn)
let p1 = document.getElementById('Polygon 1');
let p2 = document.getElementById('Polygon 2');
let p3 = document.getElementById('Polygon 3');
let mountain_svg = document.getElementById('mountain');
p1.addEventListener('mouseover', mountainPulse);
let star1 = document.getElementById('Star 1');
let star2 = document.getElementById('Star 2');
let star3 = document.getElementById('Star 3');

star1.addEventListener('mouseover', pulse1);
star2.addEventListener('mouseover', pulse2);
star3.addEventListener('mouseover', pulse3);

function pulsingMountain() {
  mountain_svg.classList.add('animate__animated')
  mountain_svg.classList.add('animate__pulse')
}
function fallingPerson () {
  person_svg.classList.remove('animate__delay-4s')
  person_svg.classList.add('animate__delay-2s')
  person_svg.classList.add('animate__hinge')
}

function backIn() {
  setTimeout(() => { person_svg.classList.remove('animate__hinge') }, 2000);
}

function mountainPulse() {
  p1.classList.remove('animate__delay-3s');
  p2.classList.remove('animate__delay-3s');
  p3.classList.remove('animate__delay-3s');

  p1.classList.add('animate__slideOutDown');
  p2.classList.add('animate__slideOutRight');
  p3.classList.add('animate__slideOutLeft');
  setTimeout(() => { p1.classList.remove('animate__slideOutDown') }, 2000);
  setTimeout(() => { p2.classList.remove('animate__slideOutRight') }, 2000);
  setTimeout(() => { p3.classList.remove('animate__slideOutLeft') }, 2000);
}

function pulse1() {
  star1.classList.remove('animate__delay-3s');
  star1.classList.add('animate__animated');
  star1.classList.add('animate__infinte')
  star1.classList.add('animate__flash');
  setTimeout(() => { star1.classList.remove('animate__flash') }, 2000);
}

function pulse2() {
  star2.classList.remove('animate__delay-3s');
  star2.classList.add('animate__animated');
  star2.classList.add('animate__infinte')
  star2.classList.add('animate__flash');
  setTimeout(() => { star2.classList.remove('animate__flash') }, 2000);
}

function pulse3() {
  star3.classList.remove('animate__delay-3s');
  star3.classList.add('animate__animated');
  star3.classList.add('animate__infinte')
  star3.classList.add('animate__flash');
  setTimeout(() => { star3.classList.remove('animate__flash') }, 2000);
}