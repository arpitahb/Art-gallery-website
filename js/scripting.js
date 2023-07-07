function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function navigateTodestination1(){
  window.location.href="about.html";
}



/*function toggleHiddenObjects(){
  var hiddenImages = document.querySelectorAll('.hidden');
  hiddenImages.forEach(function (image) {
    image.classList.remove('hidden');
  });
}*/

function toggleHiddenObjects() {
  var hiddenObjects = document.querySelectorAll('.row.row.bs.hidden');
  var viewMoreBtn = document.getElementById('viewMoreBtn');

  if (hiddenObjects.length > 0) {
    for (var i = 0; i < hiddenObjects.length; i++) {
      if (i < 3) {
        hiddenObjects[i].classList.remove('hidden');
      } else {
        hiddenObjects[i].style.display = 'none';
      }
    }

    if (hiddenObjects.length <= 3) {
      viewMoreBtn.innerHTML = 'View Less';
    }
  } else {
    var allObjects = document.querySelectorAll('.row.row.bs');
    for (var j = 3; j < allObjects.length; j++) {
      allObjects[j].classList.add('hidden');
    }
    viewMoreBtn.innerHTML = 'View More';
      }
    }

    /*var hiddenObjects = document.querySelectorAll('.hiddenSection .hidden');
    var viewMoreButton = document.getElementById('viewMoreButton');
    var isExpanded = false;

    function toggleHiddenSection() {
      for (var i = 0; i < hiddenObjects.length; i++) {
        hiddenObjects.forEach(function (image) {
          image.classList.remove('hidden');
        });
    }
    
    var visibleObjects = document.querySelectorAll('#hiddenSection .hidden');
        if (visibleObjects.length === 0) {
            viewMoreButton.style.display = 'none';
        }
        
        if (!isExpanded) {
            viewMoreButton.textContent = 'View Less';
            isExpanded = true;
        } else {
            viewMoreButton.textContent = 'View More';
            isExpanded = false;
        }
    }*/
/* =================================== Responsive Gallery Card on Home webpage ========================================*/

