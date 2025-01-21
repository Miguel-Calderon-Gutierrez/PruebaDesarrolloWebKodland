  document.addEventListener("DOMContentLoaded", () => {    
    const buttons = document.querySelectorAll(".compra");
  
   
    buttons.forEach(button => {
      button.addEventListener("click", () => {     
            Swal.fire({
            title: "Compra enviada!",
            icon: "success",
            draggable: true
            });
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".header__toggle");
    const navMenu = document.querySelector(".header__nav");
  
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("header__nav--open");
    });
  });
  