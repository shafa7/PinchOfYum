function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    const success = document.createElement("p");
    success.textContent = "✅ Thank you, " + name + "! Your message has been sent successfully.";
    success.style.color = "#5a2683";
    success.style.fontWeight = "bold";
    success.style.marginTop = "10px";

    form.appendChild(success);

    form.reset();

    setTimeout(() => success.remove(), 5000);
  });
});
