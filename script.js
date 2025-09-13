// Simple form submission alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Salon Nilmee! We will get back to you soon.");
  this.reset();
});
