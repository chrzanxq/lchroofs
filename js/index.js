 // Smooth scroll to target element with offset adjustment
 function scrollToTarget(element) {
    const target = document.querySelector(element);
    const offset = 100; 

  return window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth"
    });
  }