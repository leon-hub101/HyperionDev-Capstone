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

// Function to delete an item from the wishlist
function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    items.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('wishlist', JSON.stringify(items)); // Update local storage
    
    // Refresh the list on the page
    document.querySelector('.wishlist_items').innerHTML = ''; // Clear the existing list
    items.forEach((item, newIndex) => { // Rebuild the list
        const li = document.createElement('li');
        li.textContent = item;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() { deleteItem(newIndex); };
        
        li.appendChild(deleteButton);
        document.querySelector('.wishlist_items').appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const wishlistItems = document.querySelector('.wishlist_items');

    if (wishlistItems !== null) {
        const items = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            
            // Create a delete button for each item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() { deleteItem(index); };
            
            li.appendChild(deleteButton);
            wishlistItems.appendChild(li);
        });
    } else {
        console.log('The wishlist-items element was not found.');
    }
});




