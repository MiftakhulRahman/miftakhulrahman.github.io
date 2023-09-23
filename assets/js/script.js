// Element toggle function
const elementToggleFunc = function(elem) {
  elem.classList.toggle("active");
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality
sidebarBtn.addEventListener("click", function() {
  elementToggleFunc(sidebar); 
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function() {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add click event to testimonials items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function() {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });
});

// Add click event to close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

select.addEventListener("click", function() {
  elementToggleFunc(this);
});

// Add event to select items
selectItems.forEach(item => {
  item.addEventListener("click", function() {

    let selectedValue = this.innerText;
    selectValue.innerText = selectedValue;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

const filterFunc = function(selectedValue) {

  filterItems.forEach(item => {
    
    if(selectedValue.toLowerCase() === "all") {
      item.classList.add("active");
    }
    else if(selectedValue.toLowerCase() === item.dataset.category.toLowerCase()) {
      item.classList.add("active");
    } 
    else {
      item.classList.remove("active");
    }

  });

}

// Add event to filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {

    let selectedValue = this.innerText;
    selectValue.innerText = selectedValue;
    filterFunc(selectedValue);

  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add input event to form elements
formInputs.forEach(input => {
  input.addEventListener("input", function() {

    if(form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    }
    else {
      formBtn.setAttribute("disabled", ""); 
    }

  });
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}