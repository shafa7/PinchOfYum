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
    success.style.color = "#693b57"; /* Changed from #5a2683 to match button/h1 */
    success.style.fontWeight = "bold";
    success.style.marginTop = "10px";
    success.style.backgroundColor = "#f9f2f6"; /* Match form background */

    form.appendChild(success);

    form.reset();

    setTimeout(() => success.remove(), 5000);
  });
});