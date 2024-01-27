// Select all flip cards
const flipCards = document.querySelectorAll('.flip');

// Add event listener to each flip card
flipCards.forEach((card) => {
  card.addEventListener('mouseenter', function() {
    // Select the back of the card
    const back = this.querySelector('.back');

    // Calculate the height of the back
    const backHeight = back.scrollHeight;

    // Apply the height to the flip card
    this.style.height = `${backHeight}px`;

    // Remove the animation class
    card.classList.remove('slide-down');

    // Force a reflow, flushing the CSS changes
    void card.offsetWidth;

    // Re-add the animation class
    card.classList.add('slide-down');
  });

  card.addEventListener('mouseleave', function() {
    // Reset the height of the flip card
    this.style.height = 'auto';
  });
});