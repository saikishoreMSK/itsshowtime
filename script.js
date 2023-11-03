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
document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove",function(details){

    });
});