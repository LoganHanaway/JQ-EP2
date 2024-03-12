$(document).ready(function () {
  const $addMovie = $("#addMovie");
  const $filmList = $("#filmList");
  const $sort = $("#sort");

  // Define getValues function
  const getValues = () => {
    const title = $("#title").val();
    const titleLength = $("#title").val().length;
    const rating = $("#rating").val();
    const $newMovie = `${title}: ${rating}/10 `;

    if (titleLength < 2) {
      alert("Movie title must be longer than two characters");
      return;
    }

    $("<li></li>")
      .text($newMovie)
      .appendTo($filmList)
      .append('<button class="remove" type="button">Remove</button>')
      .on("click", ".remove", function () {
        $(this).closest("li").remove();
      });
  };

  // Event listener for adding a movie
  $addMovie.on("click", function (e) {
    e.preventDefault();
    getValues();
  });

  // attempting sorting

  // Define sortOptions function
  const sortOptions = () => {
    const sortingStyle = $("#sortStyle").val(); // Get the sorting option value
    const sortingOrder = $("#sortOrder").val(); // Get the sorting order value

    console.log("Sorting Option:", sortingStyle);
    console.log("Sorting Order:", sortingOrder);

    let listItems; // Define listItems variable here

    if (sortingStyle === "alphabetical") {
      // Sort alphabetically by title
      console.log("1");
      listItems = $("#filmList ol li").get();
      listItems.sort(function (a, b) {
        const textA = $(a).text().toUpperCase();
        const textB = $(b).text().toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0; // local compare to fix  ['firstLet', 'second', 'third']
      });
      console.log("2");
    } else if (sortingStyle === "numerical") {
      console.log("a");
      // Sort numerically by rating   //
      listItems = $("#filmList ol li").get();
      listItems.sort(function (a, b) {
        const ratingA = parseFloat($(a).text().split(":")[1]);
        const ratingB = parseFloat($(b).text().split(":")[1]);
        console.log("Rating A:", ratingA);
        console.log("Rating B:", ratingB);
        return ratingA - ratingB;
      });
      console.log("b");
    }

    // Reverse the list if the sorting order is descending
    if (sortingOrder === "descending") {
      listItems.reverse(); // Reverse the listItems array
    }

    // Clear the existing list
    $("#filmList ol").empty();

    // Append the sorted list items to the <ol> element
    $.each(listItems, function (index, item) {
      $("#filmList ol").append(item);
    });
  };

  // Toggle ascending or descending order for numerical sorting
  let ascending = true;

  // Toggle alphabetical or numerical order for numerical sorting
  let alphabetical = true;

  // Event handler for sorting
  $(document).on("click", "#sort", function (e) {
    e.preventDefault();
    sortOptions();
  });

  // Event handler for changer sorting style
  $("#sortStyle").on("change", function (e) {
    e.preventDefault();
    alphabetical = !alphabetical;
    console.log("Alphabetical:", alphabetical);
  });

  // Event handler for changing sorting order
  $("#sortOrder").on("change", function (e) {
    e.preventDefault();
    ascending = !ascending;
    console.log("Ascending:", ascending);
  });
});
