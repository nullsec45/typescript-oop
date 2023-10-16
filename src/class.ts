class Customer {
    readonly id: number;
    name: string = "Fajar";
    age?: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(name: string): void {
        console.info(`Hello ${name},  my name is ${this.name}`);
    }
}

class Order {

}

export {
    Customer,
    Order
}