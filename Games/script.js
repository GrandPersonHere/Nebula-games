document.getElementById('searchBar').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const text = box.querySelector('span').textContent.toLowerCase();
        if (text.includes(filter)) {
            box.style.display = ''; // Show the box
        } else {
            box.style.display = 'none'; // Hide the box
        }
    });
});

function openGame(game) {
    // Redirect to the iframe page with the game as a query parameter
    window.location.href = `/Player/index.html?game=${game}`;
}
