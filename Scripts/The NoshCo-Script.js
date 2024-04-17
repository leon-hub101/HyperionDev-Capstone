function addToBasket(prod, size, price) {

}

// Function to add an item to the wishlist
function addToWishList(itemName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Retrieve or initialize the wishlist

    if (!wishlist.includes(itemName)) {
        wishlist.push(itemName); // Add the item
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Save the updated list to local storage

        alert(itemName + " has been added to your wishlist!\nYou have " + wishlist.length + " items in your wishlist.");
    } else {
        alert(itemName + " is already in your wishlist");
    }
}

// Function to delete an item from the wishlist
function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem('wishlist')) || [];
    items.splice(index, 1); // Remove the item
    localStorage.setItem('wishlist', JSON.stringify(items)); // Update local storage

    // Rebuild the list
    refreshWishlistItems();
}

// Function to refresh the wishlist display after an update
function refreshWishlistItems() {
    const wishlistItems = document.querySelector('.wishlist_items');
    wishlistItems.innerHTML = ''; // Clear the existing list

    let items = JSON.parse(localStorage.getItem('wishlist')) || [];
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.onclick = function() { deleteItem(index); };

        li.appendChild(deleteButton);
        wishlistItems.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    refreshWishlistItems(); // Initial setup to display the current wishlist
});

// JQuery function for handling the click event on like buttons
$(document).ready(function() {
    $('.like-button').click(function() {
        $(this).toggleClass('liked-button');
    });
});