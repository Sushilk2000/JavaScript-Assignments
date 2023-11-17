document.addEventListener("DOMContentLoaded", function () {
  updateMenu();
});
function updateMenu() {
  var foodType = document.getElementById("foodType").value;

  var menuContainer = document.getElementById("menu");

  menuContainer.innerHTML = "";

  var menuItems;

  if (foodType === "vegetarian") {
    menuItems = [
      { name: "Crispy Veg Burger", id: "vegItem1" },
      { name: "Crispy Veg Double Patty", id: "vegItem2" },
      { name: "Veg Makhani Burst Burger", id: "vegItem3" },
      { name: "BK Veggie Burger", id: "vegItem4" },
      { name: "BK Veggie Burger with double cheese", id: "vegItem5" },
    ];
  } else {
    menuItems = [
      { name: "BK Chicken Burger", id: "nonVegItem1" },
      { name: "Crispy Chicken Double Patty", id: "nonVegItem2" },
      { name: "Chicken Makhani Burst Burger", id: "nonVegItem3" },
      { name: "Crispy Chicken Burger", id: "nonVegItem4" },
      { name: "Crispy Chicken with chesse burger", id: "nonVegItem5" },
    ];
  }

  menuItems.forEach(function (item) {
    var itemContainer = document.createElement("div");
    itemContainer.classList.add("item");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;

    var label = document.createElement("label");
    label.htmlFor = item.id;
    label.textContent = item.name;

    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = 0;
    quantityInput.value = 0;

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    itemContainer.appendChild(quantityInput);

    menuContainer.appendChild(itemContainer);
  });
}

function submitOrder() {
  var selectedItems = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    selectedItems.push({
      name: checkbox.nextSibling.textContent,
      quantity: checkbox.nextSibling.nextSibling.value,
    });
  });

  var orderDetailsContainer = document.getElementById("orderResult");
  var orderDetailsDiv = document.createElement("div");
  orderDetailsDiv.classList.add("orderDetails");
  orderDetailsDiv.innerHTML = "<p>Order is being processed...</p>";

  orderDetailsContainer.appendChild(orderDetailsDiv);

  processOrder(selectedItems)
    .then(function (processedOrder) {
      orderDetailsDiv.innerHTML =
        "<h2>Order Processed!</h2><p>Status: " + processedOrder.status + "</p>";

      // Display the ordered items
      processedOrder.order.forEach(function (item) {
        var itemInfo = "<p>" + item.quantity + " x " + item.name + "</p>";
        orderDetailsDiv.innerHTML += itemInfo;
      });
    })
    .catch(function (error) {
      console.error("Order processing error:", error);
    });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ status: "Processed", order: order });
    }, 3000); // 3-second delay
  });
}

function displayProcessedOrder(processedOrder) {
  var orderResultContainer = document.getElementById("orderResult");
  orderResultContainer.innerHTML =
    "<h2>Order Processed!</h2><p>Status: " + processedOrder.status + "</p>";

  processedOrder.order.forEach(function (item) {
    var itemInfo = "<p>" + item.quantity + " x " + item.name + "</p>";
    orderResultContainer.innerHTML += itemInfo;
  });
}
