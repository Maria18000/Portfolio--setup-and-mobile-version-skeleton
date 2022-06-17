// menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// modal code

const cardArray = [
  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',
  },

  // card 2

  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',
  },

  // card3

  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',
  },

  // card4

  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',
  },

  // card5

  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',
  },

  // card6

  {
    cardTitle: 'Multi-Post Stories',
    cardTitle2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'css', 'Ruby on Rails'],
    featuredImage: 'Images/featured.png',
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: 'https://maria18000.github.io/Portfolio--setup-and-mobile-version-skeleton/',
    sourceLink: 'https://github.com/Maria18000/Portfolio--setup-and-mobile-version-skeleton',

  },

];

const cardss = document.querySelector('.cards-section');
cardArray.forEach((c) => {
  const card = document.createElement('div');

  card.innerHTML = (`
  <div class="modal" id="modal">
            <div class="modal-header">
              <h2 class="cm">${c.cardTitle}</h2>
              <h2 class="cd">${c.cardTitle2}</h2>
              <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">

                  <ul class="modal-labels">
                    <li class="language">${c.technologies[0]}</li>
                    <li class="language">${c.technologies[1]}</li>
                    <li class="language">${c.technologies[2]}</li>
                  </ul>
               <div class="modal-center">
               <div class="modal-left">
                <img src="${c.featuredImage}">
                </div>
                  <div class="modal-right">
                  <div>
                    <p>${c.cardDescription}</p>
                    </div>
                      <div class="modal-bottom">
                        <a href = "${c.liveLink}"><button class= "modal-button" type="button"> See Live <i class="bi bi-arrow-up-right-circle"></i></button><a/>
                        <a href = "${c.sourceLink}"><button class= "modal-button" type="button"> See Source <i class="bi bi-github"></i></button><a/>
                      </div>
                  </div>
                </div>
            </div>
     </div>
  `);

  cardss.appendChild(card);
});

const openBtn = document.querySelectorAll('[data-modal-target]');
const closeBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// Email Validation

const form = document.querySelector('form');
const emailAddress = document.getElementById('email');
const format = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
const error = document.getElementById('error');

function validateEmail() {
  if (!emailAddress.value.match(format)) {
    error.innerText = 'Enter Valid Email i.e. abc@gmail.com';
    return false;
  }

  error.innerHTML = '';
  form.submit();
  form.reset();
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateEmail();
});

// Storing data in browser

function store() {
  const data = {
    fullname: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

function populate() {
  const newData = JSON.parse(localStorage.getItem('data'));
  document.getElementById('name').value = newData.fullname;
  document.getElementById('email').value = newData.email;
  document.getElementById('message').value = newData.message;
}

form.addEventListener('input', () => {
  store();
});

// eslint-disable-next-line func-names
window.onload = function () {
  if (localStorage) {
    populate();
  }
};