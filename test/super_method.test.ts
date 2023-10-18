describe("Method Overriding", () => {
    class Employee {
        name: string;
        department: string;

        constructor(name: string, department: string) {
            this.name = name;
            this.department = department;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {

        constructor(name: string, department: string) {
            super(name, department);
        }

        sayHello(name: string): void {
            super.sayHello(name);
            console.info("and I Your Manager")
        }

    }

    it("should support method overridingr", function () {
        const entong = new Employee("Budi", "IT");
        const manager_fajar = new Manager("Fajar", "IT");
        entong.sayHello(manager_fajar.name);
        manager_fajar.sayHello(entong.name);
    })
})