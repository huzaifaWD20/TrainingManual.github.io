// Get the fly-in element
const flyIn = document.querySelector('#fly-in div');
// Get the disclaimer section
const disclaimerSection = document.getElementById('disclaimer-section');
const gotoBtn = document.getElementById('goto-btn');
// Hide the disclaimer section initially
disclaimerSection.style.display = 'none';
// Get the animation duration
const duration = parseFloat(getComputedStyle(flyIn).animationDuration) * 1000;
// Show the disclaimer section after the animation has completed
setTimeout(() => {
  flyIn.style.display = 'none';
  disclaimerSection.style.display = 'block';
  disclaimerSection.animate([{opacity: 0}, {opacity: 1}], {duration: 1000});
  gotoBtn.animate([{opacity: 0}, {opacity: 1}], {duration: 1000});
}, duration-27000);






