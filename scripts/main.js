document.addEventListener('DOMContentLoaded', function() {
  const openPopup = document.getElementById('openPopup');
  const closePopup = document.getElementById('closePopup');
  const popupOverlay = document.getElementById('popupOverlay');

  openPopup.addEventListener('click', function() {
      popupOverlay.style.display = 'block';
  });

  closePopup.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
  });

  popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
          popupOverlay.style.display = 'none';
      }
  });
});
