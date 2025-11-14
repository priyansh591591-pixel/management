// --- Simple queue for orders ---
let orderQueue = [];
let doneOrders = [];

// Add new order
function addOrder() {
    const foodName = document.getElementById('foodName').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value);

    if (foodName === "" || quantity <= 0) {
        alert("Enter valid food name and quantity!");
        return;
    }

    orderQueue.push({ foodName, quantity });
    updateDisplay();
}

// Mark order as done
function markDone(index) {
    const order = orderQueue.splice(index, 1)[0];
    doneOrders.push(order);
    updateDisplay();
}

// Update display
function updateDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = "";
    orderQueue.forEach((order, index) => {
        const li = document.createElement('li');
        li.textContent = `${order.quantity} x ${order.foodName} `;
        const doneBtn = document.createElement('button');
        doneBtn.textContent = "Done";
        doneBtn.onclick = () => markDone(index);
        li.appendChild(doneBtn);
        queueList.appendChild(li);
    });

    const doneList = document.getElementById('doneList');
    doneList.innerHTML = "";
    doneOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `${order.quantity} x ${order.foodName}`;
        doneList.appendChild(li);
    });
}


