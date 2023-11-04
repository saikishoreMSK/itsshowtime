// let seats = document.querySelector(".all-seats");
// for (var i = 0; i < 59; i++) {
//     let randint = Math.floor(Math.random() * 2);
//     let booked = randint === 1 ? "booked" : "";
//     seats.insertAdjacentHTML("beforeend", '<input type="checkbox" name="tickets" id="s' + (i + 2) + '"><label for="s' + (i + 2) + '" class="seat ' + booked + '"></label>')
// };
let urlParams= new URLSearchParams(window.location.search);
let name = urlParams.get('name');
let description = urlParams.get('description');

document.querySelector('.title').textContent = name;

let seats = document.querySelector(".all-seats");
let seatCategories = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',
'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10',
'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10',
'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'];

function randintgen(){
    for(var i=1;i<60;i++){
        let randint = Math.floor(Math.random()*2);
        let booked = randint === 1 ? "booked" : "";
        seats.insertAdjacentHTML("beforeend", '<input type="checkbox" name="tickets" id="s' + (i + 2) + '"><label for="s' + (i + 2) + '" class="seat ' + booked + '">'+seatCategories[i]+'</label>')
    };
};
// Generate a random seats whenever a person clicks on dates and times
randintgen();
function toggleBooked(){
    let seats = document.querySelectorAll(".seat");
    seats.forEach(seat => {
        let randint =Math.floor(Math.random()*2);
        let booked = randint === 1 ? "booked" : "";
        seat.classList.toggle('booked',booked === "booked");
    });
}
toggleBooked();
document.querySelector('.dates').addEventListener('click',() => {
    toggleBooked();
});
document.querySelector('.times').addEventListener('click',() => {
    toggleBooked();
});


let food = 500;
let tickets = seats.querySelectorAll("input");
let foodButton = document.getElementById("foodButton");
let bookButton = document.getElementById("bookButton");


// Function to toggle background color
function toggleBackgroundColor() {
    if (foodButton.style.backgroundColor === "green") {
        foodButton.style.backgroundColor = "black";
    } else {
        foodButton.style.backgroundColor = "green";
    }
}

foodButton.addEventListener("click", () => {
    toggleBackgroundColor();
    let amount = document.querySelector(".amount").innerHTML;
    amount = Number(amount);

    if (foodButton.style.backgroundColor === "green") {
        amount += food;
    } else {
        amount -= food;
    }

    document.querySelector(".amount").innerHTML = amount;
});

bookButton.addEventListener("click", () => {
    let count = document.querySelector(".count").innerHTML;
    let amount = document.querySelector(".amount").innerHTML;

    if (count > 0) {
        let confirmationMessage = `Your ${count} movie ticket(s) have been booked for a total of Rs${amount}.`;
        alert(confirmationMessage);
    } else {
        alert("Please select at least one ticket before booking.");
    }
});

tickets.forEach((ticket, i) => {
    ticket.addEventListener("change", () => {
        if (ticket.classList.contains('booked')) {
            ticket.checked = false; // Uncheck if it's already booked
            return; // Don't proceed further
        }

        let amount = document.querySelector(".amount").innerHTML;
        let count = document.querySelector(".count").innerHTML;
        amount = Number(amount);
        count = Number(count);

        if (ticket.checked) {
            if (i >= 40) {
                count += 1;
                amount += 100; // Adjust for i >= 40
            } else if (i >= 20 && i < 40) {
                count += 1;
                amount += 150;
            } else if (i < 20) {
                count += 1;
                amount += 200; // Adjust for i < 20
            }
        } else {
            if (i >= 40) {
                count -= 1;
                amount -= 100; // Adjust for i >= 40
            } else if (i >= 20 && i < 40) {
                count -= 1;
                amount -= 150;
            } else if (i < 20) {
                count -= 1;
                amount -= 200; // Adjust for i < 20
            }
        }

        document.querySelector(".amount").innerHTML = amount;
        document.querySelector(".count").innerHTML = count;
    });
});
