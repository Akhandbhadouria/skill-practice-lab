# hiding unnecesssory details and shows only the important things 

#An abstract class:
# Cannot be instantiated directly.
# Can have abstract methods (methods declared but not implemented).
# Forces subclasses to implement those abstract methods.

from abc import ABC, abstractmethod

# Abstract class
class Animal(ABC):  #abstract class 
    
    @abstractmethod
    def sound(self):   # abstract method
        pass

# Subclass must implement sound()
class Dog(Animal):
    def sound(self):
        return "Bark"

class Cat(Animal):
    def sound(self):
        return "Meow"

# dog = Animal()  # ❌ Error: Can't create object of abstract class
dog = Dog()
cat = Cat()

print(dog.sound())  # Bark
print(cat.sound())  # Meow





# You define a blueprint (Animal must have a sound() method).
# Any class inheriting Animal must implement sound(), otherwise Python raises an error immediately.
# This prevents mistakes and makes code more robust.
