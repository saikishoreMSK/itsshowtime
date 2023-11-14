const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cirMouseFoll(){
    window.addEventListener("mousemove",(details) => {
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    });
}
cirMouseFoll();
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
//anchor tag scroll

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}

function goToTicket(name) {
    let url = 'Ticket/Ticket.html?name='+name;
    window.location.href = url;
}

function redirectToMovies(genre) {
    let url = 'List/index.html?genre='+genre;
    window.location.href = url;
    // movies.html?genre=${genre};
}
// Genres
// document.querySelectorAll(".elem").forEach(function (elem){
//     elem.addEventListener("mousemove",function(details){
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease: Power3 ,
//         });
//     });
// });
document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove",function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot= details.clientX - rotate;
        rotate= details.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3 ,
            top:diff,
            left:details.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
        });
    });
});
document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mouseleave",function(details){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power2,
            duration: .5
        });
    });
});

// contact us details
const logo = document.getElementById("logo"),
      images = logo.querySelectorAll(".contact img");

const getActive = () => document.body.dataset.active === "true",
      setActiveTo = active => document.body.dataset.active = active;

const shift = (image, index, rangeX, rangeY) => {
  const active = getActive();
        
  const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
  
  const scale = active ? 1 + (index * 0.4) : 1;
  
  image.animate({ 
    translate: currentTranslation, 
    scale 
  }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (images, rangeX, rangeY) => 
  images.forEach((image, index) => shift(image, index, rangeX, rangeY));

const shiftLogo = (e, images) => {  
  const rect = logo.getBoundingClientRect(),
        radius = 1000;
  
  const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);
  
  const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;
  
  shiftAll(images, rangeX, rangeY);
}

const resetLogo = () => {
  setActiveTo(false);
  shiftAll(images, 0.4, -0.7);
}

window.onmousemove = e => shiftLogo(e, images);

document.body.onmouseleave = () => {
  if(!getActive()) resetLogo();
}

window.onmousedown = e => {
  setActiveTo(true);
  shiftLogo(e, images);
}

window.onmouseup = e => resetLogo();

resetLogo();