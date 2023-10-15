class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello my name is ${this.name}`;
    }
}

class Order {

}

export {
    Customer,
    Order
}