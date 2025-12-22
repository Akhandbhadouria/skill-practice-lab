# class detail:
#     ak=""
#     school="kV"   # class attribute
#     def __init__(self,nam,a): #we can pass any parameter in place of self but as a good programmer we use self
      
#         self.name=nam    #instance attribute
#         self.age=a
#         self.ak=nam
#     def display (self):
#         print(self.name,self.age)

# d1=detail("akhand",20)
# d1.display()
# d2=detail("babu",30)
# d2.display()
# print(d1.name,d1.age)
# print(d2.name,d2.age)
# print(d1.school)
# print(d2.school)
# print(d1.ak)


# self is a reference to the current instance of the class.->d1


# -------------------instance attribute vs  class attribute-------------------
# Instance attributes: Unique to each object (self.name, self.age).
# Class attributes: Shared across all objects (Person.species).


#------------------- static method -------------------
#When the method is related to the class conceptually but doesn’t need object (self)
class Math:
    @staticmethod
    def add(x, y):
        return x + y
    
    @staticmethod
    def multiply(x, y):
        return x * y

# Calling static methods
print(Math.add(10, 5))      # 15
print(Math.multiply(10, 5)) # 50


class Person:
    def __init__(self, name, age):
        if Person.is_valid_age(age):
            self.name = name
            self.age = age
            
        else:
            raise ValueError("Invalid age")
        print(self.name,self.age)
    @staticmethod
    def is_valid_age(age):
        return 0 <= age <= 120

p1 = Person("Alice", 25)   # ✅ Works
print(p1.name,p1.age)
# p2 = Person("Bob", 150)    # ❌ Raises ValueError
