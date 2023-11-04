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
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}

function goToTicket(name) {
    let url = 'Ticket/Ticket.html?name='+name;
    window.location.href = url;
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
