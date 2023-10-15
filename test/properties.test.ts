import { Customer, Order } from "../src/class";


describe("Properties Class", function () {
    it("should typescript support properties class", function () {
        const customer: Customer = new Customer(1, "Rama Fajar");
        console.log(customer.sayHello());
    })
})