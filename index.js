document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar ul li');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.textContent}`);
        });
    });
});
