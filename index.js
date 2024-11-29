// Write your code in this file!
// WELCOME MESSAGE
const currentUser = 'Grace Hopper';
// const welcomeMessage = 'Welcome to Flatbook';
// const  welcomeMessage = currentUser;
// const welcomeMessage = 'Welcome to Flatbook, currentUser';
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// EXCITED MESSAGE
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// SHORT GREETING
// const shortGreeting = 'Welcome,'
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`