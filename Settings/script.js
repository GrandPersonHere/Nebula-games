const toggleButton = document.getElementById('toggle-button');
let aboutBlankOpen = false;
let popup = null; // declare popup variable outside the event listener

toggleButton.addEventListener('click', () => {
  if (!aboutBlankOpen) {
    // Open myPage.html in a new popup window
    popup = window.open('/Settings/index.html', '_blank', 'width=800,height=600');
    aboutBlankOpen = true;
  } else {
    // Close the popup window
    popup.close();
    aboutBlankOpen = false;
  }
});