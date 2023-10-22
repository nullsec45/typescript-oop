describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);

        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);

        }
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

    it("should support parameter polymorphism wrong", () => {
        sayHelloWrong(new Employee("Rama"));
        sayHelloWrong(new Manager("Fajar"));
        sayHelloWrong(new VicePresident("Fadhillah"));
    })
})