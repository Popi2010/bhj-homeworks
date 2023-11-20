document.addEventListener('DOMContentLoaded', () => {
  const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
  const tooltipDiv = document.createElement('div');
  tooltipDiv.className = 'tooltip';

  tooltips.forEach(element => {
      element.addEventListener('click', (event) => {
          event.preventDefault();

          let title = element.getAttribute('title');
          tooltipDiv.textContent = title;

          let elementRect = element.getBoundingClientRect();
          tooltipDiv.style.left = `${elementRect.left}px`;
          tooltipDiv.style.top = `${elementRect.bottom + window.scrollY}px`;

          if (!element.nextElementSibling || !element.nextElementSibling.classList.contains('tooltip')) {
              element.insertAdjacentElement('afterend', tooltipDiv);
          }

          tooltipDiv.classList.toggle('tooltip_active');
      });
  });
});