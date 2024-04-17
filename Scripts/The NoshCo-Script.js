function addToBasket(prod, size, price) {}

// Function to add an item to the wishlist
function addToWishList(itemName, itemImageUrl) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; // Retrieve or initialize the wishlist

  if (!wishlist.some(item => item.name === itemName)) {
    wishlist.push({ name: itemName, imageUrl: itemImageUrl }); // Add the item and its image
    localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Save the updated list to local storage

    alert(
      itemName +
        " has been added to your wishlist!\nYou have " +
        wishlist.length +
        " items in your wishlist."
    );
  } else {
    alert(itemName + " is already in your wishlist");
  }
}

// Function to delete an item from the wishlist
function deleteItem(index) {
  let items = JSON.parse(localStorage.getItem("wishlist")) || [];
  items.splice(index, 1); // Remove the item
  localStorage.setItem("wishlist", JSON.stringify(items)); // Update local storage

  // Rebuild the list
  refreshWishlistItems();
}

// Function to refresh the wishlist display after an update
function refreshWishlistItems() {
  const wishlistItems = document.querySelector(".wishlist_items");
  if (wishlistItems) {
    wishlistItems.innerHTML = ""; // Clear the existing list
    let items = JSON.parse(localStorage.getItem("wishlist")) || [];
    items.forEach((item, index) => {
      const li = document.createElement("li"); // Creates a new list element

      if (item.imageUrl) {
        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = "Image of " + item.name;
        img.style.width = "100px";
        img.style.height = "auto"; // Set image height
        img.style.marginRight = "10px"; // Add some right margin
        li.appendChild(img);
      }

      // Add the item name to the html
      const text = document.createTextNode(item.name);
      li.appendChild(text);
          
      // Create delete button
      const deleteButton = document.createElement("button"); // Creates a new button element
      deleteButton.textContent = "x"; // Sets the content of the button to "x"
      deleteButton.setAttribute("aria-label", "Remove " + item.name); // Added for screen reader accessibility (someone suggested this to me because I use an "x" for the button content)
      deleteButton.onclick = function () {
        deleteItem(index);
      }; // Onclick function attached to the delete button
      li.appendChild(deleteButton);
      wishlistItems.appendChild(li);
    });
  }
}

// Event listener that calls the refresh wishlist function as soon as the page loads
document.addEventListener("DOMContentLoaded", refreshWishlistItems);

// JQuery function for handling the click event on like buttons
$(document).ready(function () {
  $(".like-button").click(function () {
    $(this).toggleClass("liked-button");
  });
});

// Product details toggle
$(document).ready(function() {
    $('.toggle-details-btn').click(function() {
        $(this).next('.details-content').slideToggle('slow', function() {
            // Check the visibility
            if ($(this).is(':visible')) {
                $(this).prev('.toggle-details-btn').text('Click to collapse');
            } else {
                $(this).prev('.toggle-details-btn').text('Click here to read about the health benefits of coffee');
            }
        });
    });
});

// Testimonial dropdown feature
$(document).ready(function() {
    $('.testimonial-trigger').hover(function() {
        // Slide down the testimonial content on hover
        $(this).next('.testimonial-content').stop(true, true).slideDown('slow');
    }, function() {
        // Slide up the testimonial content when not hovering
        $(this).next('.testimonial-content').stop(true, true).slideUp('slow');
    });
});

// Chained effects on the Welcome paragraph on the index page
$(document).ready(function() {
    $('#welcome1_1').fadeIn(1500, function() {
        $('#welcome1_2').delay(1000).fadeIn(2000, function() {
            $('#welcome1_3').delay(1000).fadeIn(1000);
        });
    });
});




