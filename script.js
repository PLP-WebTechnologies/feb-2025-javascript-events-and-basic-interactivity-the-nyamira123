// Button click: Change background color
document.getElementById("colorButton").addEventListener("click", function () {
  this.style.backgroundColor = "lightgreen";
  this.textContent = "Color Changed!";
});

// Hover effect
document.getElementById("hoverBox").addEventListener("mouseover", function () {
  this.style.backgroundColor = "coral";
});
document.getElementById("hoverBox").addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightblue";
});

// Keypress
document.getElementById("keyInput").addEventListener("keypress", function () {
  console.log("Key pressed: " + this.value);
});

// Double-click secret action
document.getElementById("secretButton").addEventListener("dblclick", function () {
  alert("✨ You discovered the secret!");
});

// Image changer
function changeImage() {
  const img = document.getElementById("galleryImage");
  img.src = "https://via.placeholder.com/150/ff7f7f";
}

// Tab switching
function openTab(tabId) {
  document.querySelectorAll(".tabcontent").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

// Form validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else {
    alert("Form submitted successfully!");
  }
});
