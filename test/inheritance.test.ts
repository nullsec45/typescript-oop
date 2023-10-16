describe("inheritance", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it("should support inheritance class", function () {
        const employee = new Employee("Fajar");
        console.info(employee.name);

        const manager = new Manager("Rama");
        console.info(manager.name);

        const director = new Director("Denisa");
        console.info(director.name);
    })
})