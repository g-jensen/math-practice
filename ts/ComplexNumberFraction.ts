/// <reference path="references.ts"/>

class ComplexNumberFraction {
    numerator: ComplexNumber;
    denominator: ComplexNumber;
    constructor(c1: ComplexNumber, c2: ComplexNumber) {
        this.numerator = c1;
        this.denominator = c2;
    }
    toString(): string {
        return `<div class="fraction">
        <span class="fup">${this.numerator.toString()}</span>
        <span class="bar">/</span>
        <span class="fdn">${this.denominator.toString()}</span>
        </div>`
    }
}