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
