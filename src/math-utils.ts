export namespace MathUtil {
    export const PI: number = 3.14;

    export function sum(...values: number[]): number {
        return values.reduce((acc, cur) => acc + cur);
    }
}