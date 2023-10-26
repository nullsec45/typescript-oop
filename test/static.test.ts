describe("static", () => {
    class Person {
        static NAME: string = "RAMA FAJAR FADHILLAH";
        static AGE: number = 20;
    }

    it("should support static method", () => {
        console.info(Person.NAME)
        console.info(Person.AGE)
    })

    class MathUtil {
        static sum(...values: number[]): number {
            return values.reduce((acc, cur) => acc + cur);
        }
    }

    it("should support static method MathUtil", function () {
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    })
})