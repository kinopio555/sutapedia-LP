document.addEventListener('DOMContentLoaded', function() {
    const openPopup = document.getElementById('openPopup');
    const openPopupPc = document.getElementById('openPopupPc'); // 追加
    const closePopup = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');
  
    const openPopupAction = function() {
        popupOverlay.style.display = 'block';
    };
  
    openPopup.addEventListener('click', openPopupAction);
    openPopupPc.addEventListener('click', openPopupAction); // 追加
  
    closePopup.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
  
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
  });

// Function to toggle the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function(event) {
    // Toggle the class for both the hamburger menu and the content
    this.classList.toggle('hamburger-active');
    document.getElementById('hamburger-contents').classList.toggle('hamburger-active');
    event.stopPropagation();  // Prevents the event from bubbling up to the document click listener
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerContents = document.getElementById('hamburger-contents');

    // Check if the menu is open and the click happened outside the menu or content
    if (hamburgerMenu.classList.contains('hamburger-active') && 
        !hamburgerMenu.contains(event.target) && 
        !hamburgerContents.contains(event.target)) {
        // Remove the active class to close the menu
        hamburgerMenu.classList.remove('hamburger-active');
        hamburgerContents.classList.remove('hamburger-active');
    }
});
