document.addEventListener('DOMContentLoaded', () => {

    // IntersectionObserver for the main content sections
    // This watches for elements with the 'hidden' class and animates them when they scroll into view.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When an element is in view, add the 'show' class to trigger the animation
                entry.target.classList.add('show');
                // Stop observing the element so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, {
        // The animation will start when 15% of the element is visible
        threshold: 0.15
    });

    // Select all elements that are initially hidden
    const hiddenElements = document.querySelectorAll('.hidden');
    // Tell the observer to start watching each of these elements
    hiddenElements.forEach((el) => observer.observe(el));

    // Staggered animation for the header elements
    // This adds a slight delay to the header elements to make them appear one after another
    const headerElements = document.querySelectorAll('.stagger-anim');
    headerElements.forEach((el, index) => {
        el.style.animationDelay = `${0.5 + index * 0.3}s`;
    });
});