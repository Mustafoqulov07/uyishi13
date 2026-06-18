class BankAccount {
    constructor (balance=0) {
        this.balance = balance;
    }
    
    deposit(sum) {
        try {
            if (sum <= 0) {
                throw new Error('Pul kiritmadingiz');
            } else {
                this.balance += sum;
                console.log('Pul tushdi');
            };
        } catch (err) {
            console.log(err.name,err.message);
        };
    };
    
    withdraw(sum) {
        try {
            if (sum > this.balance) {
                throw new Error('Mablag yetarli emas');
            } else {
                this.balance -= sum;
                console.log(`${sum}sum Pul yechildi; qolgan pul ${this.balance}sum`);
            };
        } catch (err) {
            console.log(err.name,err.message)
        }
    }
    
    getBalance() {
        return `${this.balance}sum`;
    }
}

const a = new BankAccount()

a.deposit(1000)
console.log(a.getBalance())

a.withdraw(90)