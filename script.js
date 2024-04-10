var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")) {
    icon.src = "assets/Logos/moon.png";
  }
  else {
    icon.src = "assets/Logos/sun.png"
  }
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      var responseDiv = document.getElementById('response');
      responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

      setTimeout(function() {
          responseDiv.innerHTML = '';
          document.getElementById('contact-form').reset();
      }, 3000);
  });
});

