function isTablet() {
   if (('ontouchstart' in window) || // FF, Chrome, Safari
       (navigator.maxTouchPoints > 0) ||  // >= IE 10
       (navigator.msMaxTouchPoints > 0)) {

      // tablet orientation portrait or landscape
      if (window.innerWidth < window.innerHeight) {
            // Bootstrap sizes for sm/md
            return (window.innerWidth > 767 && window.innerWidth < 993);
      } else {
            return (window.innerHeight > 767 && window.innerHeight < 993);
      }
   }
   return false;
}

if(isTablet()) {
      window.navigate('index_tab.html');
 } 
