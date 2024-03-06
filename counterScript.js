

// script.js
document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
        const countSpan = this.querySelector('.count');
        let count = parseInt(this.getAttribute('data-count'), 10);
        count++;
        this.setAttribute('data-count', count);
        countSpan.textContent = count; // Update only the span content
    });
});
document.getElementById('resetButton').addEventListener('click', function() {
    document.querySelectorAll('.button-container button').forEach(button => {
        // Reset the count to 0
        button.setAttribute('data-count', 0);
        const countSpan = button.querySelector('.count');
        countSpan.textContent = 0;

        // Update localStorage
        localStorage.setItem(button.id, '0');
    });
});
