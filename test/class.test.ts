import { Customer, Order } from "../src/class";

describe("class", () => {
    it("should can create class", () => {
        const customer: Customer = new Customer(1, "Rama Fajar");
        const order = new Order();
    });

    it("should can create contructors", () => {
        new Customer(2, "Annisa");
        new Customer(3, "Joko");
    });

});