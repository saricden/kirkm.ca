(function() {
  
  var el = function(id) {
    return document.getElementById(id);
  };

  var adjustNavTint = function() {
    if (window.scrollY > 0) {
      el('primary-nav').classList.add('scrolled');
    }
    else {
      el('primary-nav').classList.remove('scrolled');
    }
  };

  document.addEventListener("scroll", adjustNavTint);
  adjustNavTint();
  
})();