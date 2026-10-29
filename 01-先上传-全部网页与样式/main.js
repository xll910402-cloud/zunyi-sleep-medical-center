const videoFilters = document.querySelectorAll('[data-video-filter]');
const videoCards = document.querySelectorAll('[data-video-group]');
videoFilters.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.videoFilter;
    videoFilters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    videoCards.forEach(card => {
      const visible = selected === 'all' || card.dataset.videoGroup === selected;
      card.hidden = !visible;
      if (!visible) card.querySelector('video')?.pause();
    });
  });
});
