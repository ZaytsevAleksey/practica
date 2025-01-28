document.addEventListener('DOMContentLoaded', function () {
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const authButtons = document.getElementById('auth-buttons');
    const profileButtons = document.getElementById('profile-buttons');
    const logoutBtn = document.getElementById('logout-btn');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;

    function openModal(modal) {
        modal.style.display = 'block';
    }

     function closeModal(modal) {
        modal.style.display = 'none';
    }
    
   function switchAuthButtons(){
        authButtons.style.display = 'none';
        profileButtons.style.display = 'flex';
   }
   
  function switchLogoutButtons(){
       authButtons.style.display = 'flex';
        profileButtons.style.display = 'none';
  }
     
    function setupModalClose(modal) {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function () {
           closeModal(modal);
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
              closeModal(modal);
            }
        });
    }


    setupModalClose(registerModal);
    setupModalClose(loginModal);

    registerBtn.addEventListener('click', function () {
       openModal(registerModal);
    });
    loginBtn.addEventListener('click', function () {
         openModal(loginModal);
    });

     registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
          // Обработка формы регистрации (пока просто имитация)
        alert('Регистрация прошла успешно!');
        closeModal(registerModal);
        switchAuthButtons()
    });

      loginForm.addEventListener('submit', function (event) {
          event.preventDefault();
           // Обработка формы входа (пока просто имитация)
        alert('Вход выполнен!');
        closeModal(loginModal);
         switchAuthButtons()
    });
    logoutBtn.addEventListener('click', function () {
         switchLogoutButtons()
          alert('Вы вышли!')
    })
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', function() {
     currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});
});