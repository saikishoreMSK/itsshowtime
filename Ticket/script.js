let seats = document.querySelector(".all-seats");
for (var i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";
    seats.insertAdjacentHTML("beforeend", '<input type="checkbox" name="tickets" id="s' + (i + 2) + '"><label for="s' + (i + 2) + '" class="seat ' + booked + '"></label>')
};

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
        let confirmationMessage = `Your ${count} movie ticket(s) have been booked for a total of $${amount}.`;
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
                amount += 150; // Adjust for i >= 40
            } else if (i >= 20 && i < 40) {
                count += 1;
                amount += 250;
            } else if (i < 20) {
                count += 1;
                amount += 500; // Adjust for i < 20
            }
        } else {
            if (i >= 40) {
                count -= 1;
                amount -= 150; // Adjust for i >= 40
            } else if (i >= 20 && i < 40) {
                count -= 1;
                amount -= 250;
            } else if (i < 20) {
                count -= 1;
                amount -= 500; // Adjust for i < 20
            }
        }

        document.querySelector(".amount").innerHTML = amount;
        document.querySelector(".count").innerHTML = count;
    });
});
