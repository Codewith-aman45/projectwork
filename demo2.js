function calculateTotal() {
    // Item prices
    const burger_1Price = 8.99;
    const burger_2Price = 9.99;
    const burger_3Price = 7.99;
    const burger_4Price = 11.49;
    const burger_5Price = 10.99;
    const burger_6Price = 9.49;
    const burger_7Price = 8.49;
    const burger_8Price = 12.99;

    

    // Get quantity of each item
    const burgerQty1 = parseInt(document.getElementById("burgerQty1").value) || 0;
    const burgerQty2 = parseInt(document.getElementById("burgerQty2").value) || 0;
    const burgerQty3 = parseInt(document.getElementById("burgerQty3").value) || 0;
    const burgerQty4 = parseInt(document.getElementById("burgerQty4").value) || 0;
    const burgerQty5 = parseInt(document.getElementById("burgerQty5").value) || 0;
    const burgerQty6 = parseInt(document.getElementById("burgerQty6").value) || 0;
    const burgerQty7 = parseInt(document.getElementById("burgerQty7").value) || 0;
    const burgerQty8 = parseInt(document.getElementById("burgerQty8").value) || 0;
    

    // Calculate total
    const total = (burgerQty1 * burger_1Price) + (burgerQty2 * burger_2Price) + (burgerQty3 * burger_3Price) + (burgerQty4 * burger_4Price) 
    + (burgerQty5 * burger_5Price) + (burgerQty6 * burger_6Price) + (burgerQty7 * burger_7Price) + (burgerQty8 * burger_8Price) ;

    // Update total amount on the page
    document.getElementById("total").textContent = total.toFixed(2);
}

function printBill() {
    // Get form values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const mobile = document.getElementById("mobile").value;
    const burgerQty1 = document.getElementById("burgerQty1").value;
    const burgerQty2 = document.getElementById("burgerQty2").value;
    const burgerQty3 = document.getElementById("burgerQty3").value;
    const burgerQty4 = document.getElementById("burgerQty4").value;
    const burgerQty5 = document.getElementById("burgerQty5").value;
    const burgerQty6 = document.getElementById("burgerQty6").value;
    const burgerQty7 = document.getElementById("burgerQty7").value;
    const burgerQty8 = document.getElementById("burgerQty8").value;
    
    const total = document.getElementById("total").textContent;

    // Create a new window for the printout
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Burger Hut Bill</title>');
    printWindow.document.write('<style>body{font-family: Arial, sans-serif; background-color: #121212; color: #f1f1f1;} h1, h3 {color: #ff6347;} table {width: 100%; margin-top: 20px; color: #f1f1f1;} td {padding: 5px;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>Burger Hut</h1>');
    printWindow.document.write('<h3>Billing Receipt</h3>');
    printWindow.document.write(`<p><strong>Name:</strong> ${name}</p>`);
    printWindow.document.write(`<p><strong>Address:</strong> ${address}</p>`);
    printWindow.document.write(`<p><strong>Mobile No:</strong> ${mobile}</p>`);
    printWindow.document.write('<table border="1"><tr><th>Item</th><th>Quantity</th><th>Price</th></tr>');
    printWindow.document.write(`<tr><td>Classic Burgers</td><td>${burgerQty1}</td><td>$${(burgerQty1 * 8.99).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Cheese Burgers</td><td>${burgerQty2}</td><td>$${(burgerQty2 * 9.99).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Veggie Burgers</td><td>${burgerQty3}</td><td>$${(burgerQty3 * 7.99).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Bacon Burgers</td><td>${burgerQty4}</td><td>$${(burgerQty4 * 11.49).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>BBQ Burgers</td><td>${burgerQty5}</td><td>$${(burgerQty5 * 10.99).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Spicy Burgers</td><td>${burgerQty6}</td><td>$${(burgerQty6 * 9.49).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Chicken Burgers</td><td>${burgerQty7}</td><td>$${(burgerQty7 * 8.49).toFixed(2)}</td></tr>`);
    printWindow.document.write(`<tr><td>Double Patty Burgers</td><td>${burgerQty8}</td><td>$${(burgerQty8 * 12.99).toFixed(2)}</td></tr>`);
    printWindow.document.write('</table>');
    printWindow.document.write(`<h3>Total Amount: $${total}</h3>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
