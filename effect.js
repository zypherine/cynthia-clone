// Wrap every letter in a span
document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mousemove", function(details){
   var diff = details.clientY- elem.getBoundingClientRect().top;
   diffrot = details.clientX - rotate;
   rotate=details.clientx;

 gsap.to(elem.querySelector("img"),{
opacity: 1,
ease: Power1,
top: details.clientY,
left: details.clientX,
rotate: gsap.utils.clamp(-20,50, diffrot* 0.2),

 })
  });
});

