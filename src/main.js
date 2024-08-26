import {SalesOrder} from "./sales/domain/model/sales-order.js";
import {Customer} from "./crm/domain/model/customer.js";

const customer = new Customer({ name: "John Doe"});
const order = new SalesOrder({ customerId: customer.id});
order.addItem({ productId: 1, quantity: 2, unitPrice: 100});
order.addItem({ productId: 2, quantity: 1, unitPrice: 50});
customer.lastOrderTotalPrice = order.calculateTotalPrice();
console.log(`Sales Order Total Price is ${order.calculateTotalPrice()}`);
console.log(`The Customer ${customer.name} identified with ID ${customer.id} has a total price os ${customer.lastOrderTotalPrice} on its last order.`);


