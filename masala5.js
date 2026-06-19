class BankAccount {
    #balance;

    constructor (balance = 0) {
        this.#balance = balance;
    }
    
    deposit(sum) {
        if (sum <= 0) {
            throw new Error('Pul kiritmadingiz yoki noto`g`ri summa');
        }
        this.#balance += sum;
        console.log(`Pul tushdi: +${sum}`);
    }
    
    withdraw(sum) {
        if (sum > this.#balance) {
            throw new Error('Mablag` yetarli emas');
        }
        this.#balance -= sum;
        console.log(`${sum} sum pul yechildi.`);
    }
    getBalance() {
        return this.#balance;
    }
}
try {
    const acc = new BankAccount(100);
    acc.deposit(50); 
    console.log("Balans:", acc.getBalance());
    
    acc.withdraw(30);
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}
