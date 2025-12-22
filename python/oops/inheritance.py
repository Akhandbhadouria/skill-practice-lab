# # Inheritance is an OOP (Object-Oriented Programming) concept that allows a class (child/derived) to reuse and extend the features of another class (parent/base).
# # Parent class = provides common attributes/methods.
# # Child class = inherits those and can add its own

# # ------------------------------single level------------------------------
# class Parent:
#     def greet(self):
#         print("Hello from Parent")

# class Child(Parent):
#     def welcome(self):
#         print("Hello from Child")

# c = Child()
# c.greet()    # Inherited from Parent
# c.welcome()  # Defined in Child


# # ------------------------------multilevel  ------------------------------
# class father:
#     def skill(self):
#         print("python")

# class mother(father):
#     def hobby(self):
#         print("cricket",self.name)

# class child(mother):
#     def __init__(self,name):
#         self.name=name
#         super().hobby()

# c=child("akhand")
# c.skill()
# c.hobby()


# # ------------------------------multiple  ------------------------------
# class father:
#     def skill(self):
#         print("python and cpp")

# class mother:
#     def hobby(self):
#         print("cricket and kabbadi")

# class child(mother,father):
#     pass
# c=child()
# c.skill()
# c.hobby()


# # ------------------------------heirarical  ------------------------------
# # Multiple child classes inherit from the same parent.
# class Parent:
#     def property(self):
#         print("Parent's property")

# class Child1(Parent):
#     pass

# class Child2(Parent):
#     pass

# c1 = Child1()
# c2 = Child2()
# c1.property()
# c2.property()



## ------------------------------hybrid  ------------------------------

# # A mix of the above (Python resolves conflicts using MRO – Method Resolution Order).
# class A:
#     def show(self):
#         print("A")

# class B(A):
#     def show(self):
#         print("B")

# class C(A):
#     def show(self):
#         print("C")

# class D(B, C):
#     pass

# d = D()
# d.show()  # Output: B (MRO: D → B → C → A)


## ------------------------------super used to call the parent   ------------------------------

class animal:
    def shows(self,ani):
        print("i am the animal ",ani)
class dog(animal):
    def show(self,an):
        super().shows(an)

d=dog()
d.show("tiger")