/**
 * This JS is not part of Quartz originally.
 * 
 * We added this JS to workaround an issue where
 * we need to restore menu position as soon as possible to avoid flickering.
 */

(function() {
  var menu = document.querySelector("aside .book-menu-content");
  addEventListener("beforeunload", function(event) {
      localStorage.setItem("menu.scrollTop", menu.scrollTop);
  });
  menu.scrollTop = localStorage.getItem("menu.scrollTop");
})();
