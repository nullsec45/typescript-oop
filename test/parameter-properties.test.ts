describe('Parameeter Properties', () => {
    class Person {
        constructor(public name: string) {

        }
    }

    it("should support", () => {
        const person = new Person(("fajar"));
        console.log(person);
    });
})