$(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
});


// const valid = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

  const form = document.querySelector(".form-line");
  const email = document.querySelector(".input");
  const account = document.getElementById("connexion-rollover")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    account.innerHTML = email.value
  });
