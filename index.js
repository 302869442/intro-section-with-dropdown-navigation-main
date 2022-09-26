// a button that opens and closes the navigation menu 
const navButton = document.querySelector('.nav-button');
// get the navigation
const nav = document.querySelector('.primary-navigation');

// add an event listener to the button
navButton.addEventListener('click', () => {
    // toggle the navigation by changing the attribute state to open
    if (nav.getAttribute('data-state') === 'open') {
        nav.setAttribute('data-state', 'closed');
    } else {
        nav.setAttribute('data-state', 'open');
    }
});