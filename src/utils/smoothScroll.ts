let isScrolling = false;

const smoothScroll = (e: WheelEvent) => {
  if (isScrolling) return; 

  isScrolling = true;
  e.preventDefault(); 

  // Use requestAnimationFrame to ensure smooth scrolling
  window.requestAnimationFrame(() => {
    window.scrollBy({
      top: e.deltaY, 
      behavior: 'smooth', 
    });

    isScrolling = false; 
  });
};

export const enableSmoothScroll = () => {
  window.addEventListener('wheel', smoothScroll, { passive: false });
};

export const disableSmoothScroll = () => {
  window.removeEventListener('wheel', smoothScroll);
};
