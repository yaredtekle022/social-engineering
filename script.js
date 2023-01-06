const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navi-menu');
const nav = document.querySelector('.nav');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);

const naviLink = document.querySelectorAll('.navi-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  nav.classList.remove('active');
}

naviLink.forEach((n) => n.addEventListener('click', closeMenu));

// for the social engineers section

const speakersData = [{
  imageSrc: './images/frank.jpeg',
  imageDescription: 'Frank Abagnale',
  speechTitle: 'Frank Abagnale',
  profession: 'Social engineer',
  quotes: '“No technology can beat a social engineering attack”',
},
{
  imageSrc: './images/Kevin.jpeg',
  imageDescription: 'kevin',
  speechTitle: 'Kevin Mitnick',
  profession: 'Social engineer',
  quotes: '“There is no patch for stupidity”',
},
{
  imageSrc: './images/susan.jpg',
  imageDescription: 'Susan Headly',
  speechTitle: 'Susan',
  profession: 'social engineer',
  quotes: '“They can be bilked, bamboozled, and bribed. Nobody knows that better than a social engineer”',
},
{
  imageSrc: './images/chris.jpg',
  imageDescription: 'christopher j. hadnagy',
  speechTitle: 'christopher j. hadnagy',
  profession: 'Social engineer',
  quotes: '“ A social engineer must approach information in much the same way. When finding a target that utilizes many different social media sites, look for the links between them and the information that can create a whole profile.”',
},
{
  imageSrc: './images/james.jpeg',
  imageDescription: 'James Linton',
  speechTitle: 'James Linton',
  profession: 'Social engineer',
  quotes: '“the normal-ness is the problem in why it is so hard to spot these things”',
},
{
  imageSrc: './images/Kevin.jpeg',
  imageDescription: 'kevin',
  speechTitle: 'Kevin Mitnick',
  profession: 'Social engineer',
  quotes: '“There is no patch for stupidity”',
},
];

const speakersElement = document.querySelector('.personal-info');
for (let i = 0; i < speakersData.length; i += 1) {
  speakersElement.innerHTML += `
  <div class="single">
    <img
      class="img-speaker"
      src="${speakersData[i].imageSrc}"
      alt="${speakersData[i].imageDescription}"
    />
    <div class="speeches">
      <h3 class="speech-title">${speakersData[i].speechTitle}</h3>
      <p class="profesion">${speakersData[i].profession}</p>
      <hr class="pro-break" />
      <p class="quotes">
        ${speakersData[i].quotes}
      </p>
    </div>
  </div>`;
}