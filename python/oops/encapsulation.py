# Encapsulation means wrapping data (attributes) and methods (functions) into a single unit (class).
# It also means restricting direct access to some data, so it can only be accessed or modified in controlled ways.

class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # public attribute
        self._account_type = "Saving"  # protected attribute
        self.__balance = balance    # private attribute

    # Getter method for balance
    def get_balance(self):
        return self.__balance

    # Setter method for balance
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print("Deposited:", amount)
        else:
            print("Invalid deposit")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print("Withdrawn:", amount)
        else:
            print("Invalid withdrawal or insufficient funds")

acc = BankAccount("Alice", 1000)

print(acc.owner)          # ✅ Public -> Alice
print(acc._account_type)  # ⚠️ Possible but not recommended
# print(acc.__balance)    # ❌ Error: AttributeError

print(acc.get_balance())  # ✅ Access via method -> 1000
acc.deposit(500)          # ✅ Deposited: 500
acc.withdraw(200)         # ✅ Withdrawn: 200



# Encapsulation: Hiding data by controlling access (focuses on how data is stored).
# Abstraction: Hiding implementation details (focuses on what methods do, not how).