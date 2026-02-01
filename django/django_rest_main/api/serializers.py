# Serializers convert complex Django objects (models, querysets) into JSON and validate incoming JSON data before saving it to the database.
from rest_framework import serializers
from students.models import Student
from employees.models import Employees
class StudentSeri(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"




class Emp_ser(serializers.ModelSerializer):
    class Meta:
        model=Employees
        fields='__all__'