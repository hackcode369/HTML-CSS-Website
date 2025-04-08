document.addEventListener('DOMContentLoaded', () => {       // Wait for the DOM to be fully loaded
    const navItems = document.querySelectorAll('.navbar ul li');  // Select all navbar items
    
    navItems.forEach(item => {                                     // Loop through each nav item
        item.addEventListener('click', () => {                     // Add event listener to each nav item
            alert(`You clicked on ${item.textContent}`);  // alert the text of the clicked item
        });
    });
});
