const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Copy selected seats into array
  const seatsIndex = [...selectedSeats];
  console.log(seatsIndex);
  // Mpa through array

  // return a new array indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;

  total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie select Event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event listeners
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
