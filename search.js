const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const queryInput = document.getElementById("query");
  const query = queryInput.value;

  console.log("Search query:", query);

  // const url = "https://example.com/search?q=" + encodeURIComponent(query);

  // window.location.href = url;

  // You can perform further actions with the query string, such as making an API request or manipulating the DOM.
});
