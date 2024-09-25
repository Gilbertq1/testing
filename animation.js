// Animation.js

// Fade-in animation on page load
window.onload = function() {
  document.body.classList.add('loaded');
}

// Hover effects for buttons and links
const buttons = document.querySelectorAll('button, a');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('hover');
  });

  button.addEventListener('mouseout', () => {
    button.classList.remove('hover');
  });
});

// Scroll-to-top animation
const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Image loading animation
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('load', () => {
    image.classList.add('loaded');
  });
});

// Section reveal animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.offsetTop < window.scrollY + window.innerHeight) {
      section.classList.add('revealed');
    }
  });
});

// Add event listener for boxu1 hover effect
const boxu1 = document.querySelector('.boxu1');

boxu1.addEventListener('mouseover', () => {
  boxu1.classList.add('aktif');
});

boxu1.addEventListener('mouseout', () => {
  boxu1.classList.remove('aktif');
});

// Get the box elements
const boxes = document.querySelectorAll('.content .box');

console.log(boxes); // check if the boxes are being selected correctly

const features = document.querySelectorAll('.feature');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0 &&
    rect.left <= window.innerWidth &&
    rect.right >= 0
  );
}

window.addEventListener('scroll', () => {
  features.forEach((feature) => {
    if (isElementInViewport(feature)) {
      feature.classList.add('scrolled', 'animate');
    } else {
      feature.classList.remove('animate');
    }
  });
});