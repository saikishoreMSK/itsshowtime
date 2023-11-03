document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}

function goToTicket() {
    let name = document.querySelector('.container .name').innerText;
    let description = document.querySelector('.container .des').innerText;
    window.location.href = "Ticket/Ticket.html";
}

// Genres
document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove",function(details){

    });
});