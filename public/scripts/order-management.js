const updateOrderFormElements = document.querySelectorAll(
    ".order-actions form"
  );
  
  async function updateOrder(event) {
    event.preventDefault();
    const form = event.target;
  
    const formData = new FormData(form);
    const newStatus = formData.get("status");
    const orderId = formData.get("orderid");
    const csrfToken = formData.get("_csrf");
  
    let response;
  
    try {
      response = await fetch(`/admin/orders/${orderId}`, {
        method: "PATCH",
        body: JSON.stringify({
          newStatus: newStatus,
          _csrf: csrfToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert("Oops, something happened...there was an error.");
      return;
    }
  
    if (!response.ok) {
      alert("Oops, something happened...was unable to update order status..");
      return;
    }
  
    const responseData = await response.json();
  
    form.parentElement.parentElement.querySelector(".badge").textContent =
      responseData.newStatus.toUpperCase();
  }
  
  for (const updateOrderFormElement of updateOrderFormElements) {
    updateOrderFormElement.addEventListener("submit", updateOrder);
  }