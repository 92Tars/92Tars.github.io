/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', () => {

  // Set up FlipDown
  var flipdown = new FlipDown(1643839200)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('Countdown Ended');
    });

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
