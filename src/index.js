const mainUrl = "https://platzi-avo.vercel.app";
const apiUrl = mainUrl + "/api/avo";
const jsMount = document.querySelector("#js-mount");

// API Intl, internationalize format Dates (DateTimeFormat) and Numbers (NumberFormat)
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD"
  }).format(price);

  return newPrice;
};

window
  // Connect to a server
  .fetch(apiUrl)
  // process the response and parse to json
  .then(response => response.json())
  // JSON to Data, to render on the browser
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach(item => {
      // Create image node
      const image = document.createElement("img");
      image.src = mainUrl + item.image;
      // Create title node
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-[#347A08] text-xl font-bold";
      // Create price node
      const price = document.createElement("div");  
      price.textContent = "Price per unit: " + formatPrice(item.price);
      price.className = "font-medium";

      // Create div container for texts
      const divTextsContainer = document.createElement("div");
      divTextsContainer.append(title, price);

      // Create a container for each group
      const groupContainer = document.createElement("div");
      groupContainer.className = "grid grid-cols-2 gap-2 place-items-center shadow-sm shadow-green-600";
      groupContainer.append(image, divTextsContainer);

      // Push each element into the array
      allItems.push(groupContainer);
    });
    // print the elements at the end of the body
    jsMount.append(...allItems);
  });
