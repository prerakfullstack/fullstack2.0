{
  class BankAccount {
    #balance;

    constructor(initialBalance) {
      this.#balance = initialBalance;
    }

    deposit(amount) {
      if (amount > 0) this.#balance += amount;
      else throw new Error("Deposit amount must be positive.");
    }

    withdraw(amount) {
      if (amount > this.#balance) throw new Error("Insufficient balance.");
      this.#balance -= amount;
    }

    getBalance() {
      return this.#balance;
    }
  }

  const myAccount = new BankAccount(1000);

  myAccount.deposit(500);
  console.log(myAccount.getBalance());

  myAccount.withdraw(300);
  console.log(myAccount.getBalance());
}
