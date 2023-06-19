class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }

    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static #PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static #PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}

const ellie = new FullTimeEmployee('엘리', 'IT', 150);
const wonil = new PartTimeEmployee('원일', 'MKT', 120);
console.log(ellie.calculatePay());
console.log(wonil.calculatePay());