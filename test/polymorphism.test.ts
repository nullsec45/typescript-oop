describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Employee {

    }

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it("should support polymorphism", () => {
        let employee: Employee = new Employee("Rama");
        console.info(employee);

        employee = new Manager("Fajar");
        console.info(employee);

        employee = new VicePresident("Fadhillah");
        console.info(employee);
    })

    it("should support parameter polymorphism", () => {
        sayHello(new Employee("Rama"));
        sayHello(new Manager("Fajar"));
        sayHello(new VicePresident("Fadhillah"));

    })
})