// 📌 Jab "View Car" button click ho, to form open ho

function bookCar(carName) {
  const bookingForm = document.getElementById("booking-form");
  const carInput = document.getElementById("carSelected");

  carInput.value = carName;
  bookingForm.classList.remove("hidden"); // form dikhaye
}

// 🟨🟨🟨 ⬇️ YEH LINE **YAHI PE** ADD KARO: ⬇️🟨🟨🟨
// 🟢 Ye line ensure karti hai ki HTML se 'bookCar()' accessible ho
window.bookCar = bookCar;

// 📌 Form submit hone pe details dikhaye
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload na ho

  const name = document.getElementById("customerName").value;
  const mobile = document.getElementById("mobile").value;
  const car = document.getElementById("carSelected").value;

  alert(`✅ Booking Confirmed!\nName: ${name}\nMobile: ${mobile}\nCar: ${car}`);

  form.reset();
  document.getElementById("booking-form").classList.add("hidden"); // form chhupao
});
