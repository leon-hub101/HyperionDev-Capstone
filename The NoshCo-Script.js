function addToBasket(prod, size, price) {

}

function addToWishList(itemName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Retrieving or initializing the wishlist items from or to local storage (if it's null || [] initializes an empty array)

    if (!wishlist.includes(itemName)) { // We check if the items is already in the array to avoid duplicates
        wishlist.push(itemName); // Push the item to the array
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); //Save the item to local storage

        // Alerts the user as needed
        alert(itemName + " has been added to your wishlist!\nYou have " + wishlist.length + " items in your wishlist.");
    }else {
        alert(itemName + " is already in your wishlist");
    }

}

document.addEventListener('DOMContentLoaded', function() {
    const wishlistItems = document.querySelector('.wishlist_items');

    if (wishlistItems !== null) {
       const items = JSON.parse(localStorage.getItem('wishlist')) || []; 
    }
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        wishlistItems.appendChild(li);
    });
})

