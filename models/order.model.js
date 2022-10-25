const db = require("../data/database");
class Order {
    // Status = Pending Proceed Cancelled
    constructor(cart, userData, status = "pending", date, orderId) {
        this.productData = cart;
        this.userData = userData;
        this.status = status;
        this.date = new Date(date);
        this.id = orderId;
    }

    save() {
        if (this.id) {

        }else {
            const orderDocument = {
                userData: this.userData,
                productData: this.productData,
                date: new Date(),
                status: this.status
            };

            return db.getDb().collection("orders").insertOne(orderDocument)
        }
    }
}

module.exports = Order;