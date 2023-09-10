const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(details) {

  cursor.style.left = details.clientX + "px",
    cursor.style.top = details.clientY + "px";
});

