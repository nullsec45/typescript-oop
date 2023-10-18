describe("Super Constructor", () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it("should support super constructor", function () {
        const employee = new Employee("Fajar", "IT");
        console.info(employee.name);
        console.info(employee.department);
    })
})