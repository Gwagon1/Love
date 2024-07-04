"use strict";

// script.js
$(document).ready(function () {
  // Function to show/hide nav on header click
  $('header').click(function () {
    $('nav ul').toggle();
  }); // Show nav links when cursor moves in and hide when cursor moves out

  $('nav').hover(function () {
    $(this).find('ul').stop(true, true).slideDown(300);
  }, function () {
    $(this).find('ul').stop(true, true).slideUp(300);
  }); // Save for later functionality

  $('.save-for-later').click(function () {
    var item = $(this).data('item');
    var savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    alert('Item saved! You have ' + savedItems.length + ' items saved.');
  }); // Handle like form submission

  $('.like-form').on('submit', function (e) {
    e.preventDefault();
    alert('You liked this item!');
  });
});
//# sourceMappingURL=script.dev.js.map
