describe("Getter and Setter", function () {
    class Category {
        _name?: string;

        get name(): string {
            if (this._name) {
                return this._name;
            } else {
                return "empty";
            }
        }

        set name(value: string) {
            if (value !== "") {
                this._name = value;
            }
        }
    }

    it("should support in class", () => {
        const category = new Category();
        console.info(category.name);

        category.name = "FOOD";
        console.info(category.name);

    })
});