// Automatic Slideshow
let myIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }    
  x[myIndex - 1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Toggle menu on small screens
function myFunction() {
  const navMenu = document.getElementById("navDemo");
  navMenu.classList.toggle("show-menu");
}

// Get elements
const modal   = document.getElementById('ticketModal');
const openBtns = document.querySelectorAll('.openModalBtn'); // all 3 buttons
const closeBtn = document.querySelector('.close-btn');
const closeBtn2 = document.querySelector('.close-btn-2');

// Function to center the modal
function centerModal() {
  const modalContent = modal.querySelector('.modal-content');
  if (!modalContent) return;

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const modalHeight = modalContent.offsetHeight;
  const modalWidth = modalContent.offsetWidth;

  modalContent.style.position = 'absolute';
  modalContent.style.top = `${(windowHeight - modalHeight) / 2}px`;
  modalContent.style.left = `${(windowWidth - modalWidth) / 2}px`;
}

// Open modal (for every Buy Tickets button) with centering
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
    centerModal(); // Center the modal when it opens
  });
});

// Close modal by clicking "X"
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Close modal by clicking "Close" button
if (closeBtn2) {
  closeBtn2.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Re-center modal if window is resized
window.addEventListener('resize', centerModal);

// Navbar height
const navbarHeight = document.querySelector('nav').offsetHeight;
console.log("Navbar height:", navbarHeight + "px");

// Form submission alert
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("Form successfully submitted");
  this.submit();
});

// Mobile menu toggle with content push-down
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const content = document.querySelector(".content-wrapper"); // wrap your main page content in this

  if (!mobileMenu || !content) return;

  mobileMenu.classList.toggle("show");

  if (mobileMenu.classList.contains("show")) {
    // Menu opened → push content down
    content.style.marginTop = mobileMenu.offsetHeight + "px";
  } else {
    // Menu closed → reset content
    content.style.marginTop = "0px";
  }
}
