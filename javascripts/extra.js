window.addEventListener('scroll', function() {
    var landingContent = document.querySelector('.landing-content');
    if (window.scrollY > window.innerHeight) {
      landingContent.classList.add('solid');
    } else {
      landingContent.classList.remove('solid');
    }
  });