from django.shortcuts import render
from django.http import JsonResponse
from students.models import Student 

# Create your views here.
# def Studentview( request):
#     student=Student.objects.all()
#     student_list=list(student.values()) #converting to the list because JsonResponse takes list for displaying data.
#     return JsonResponse(student_list,safe=False)

from.serializers import StudentSeri
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def Studentview(request):
    if request.method=='GET':
        student=Student.objects.all()
        serilizer=StudentSeri(student,many=True)
        return Response(serilizer.data,status=status.HTTP_200_OK)
    
    elif request.method=='POST':
        serilizer=StudentSeri(data=request.data)
        if serilizer.is_valid():
            serilizer.save()
            return Response(serilizer.data,status=status.HTTP_201_CREATED)
        return Response(serilizer.errors,status=status.HTTP_404_NOT_FOUND)
    

# --------------------------------function based views--------------------------------
@api_view(['GET','PUT','DELETE'])
def student_view(request,pk):
    try:
        student=Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND) 
    
    if request.method=='GET':
        serilizer=StudentSeri(student)
        return  Response(serilizer.data,status=status.HTTP_200_OK )
    

    elif request.method=="PUT":
        serilizer=StudentSeri(student,data=request.data)
        if serilizer.is_valid():
            serilizer.save()
            return Response(serilizer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serilizer.errors,status=status.HTTP_404_NOT_FOUND)  
        
    elif request.method=='DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    


# --------------------------------CLASS based views--------------------------------
# provide more structured and organized way to handle request using oops
# APIView → Django REST Framework ka base class
# Isse hum class-based REST APIs banate hain
# Iske andar:get(), post(), put(), delete() jaise methods use hote hain
"""
from rest_framework.views import APIView
from employees.models import Employees
from.serializers import Emp_ser

class Employee(APIView):
    #return all employees 
    def get(self,request):
        employees=Employees.objects.all()
        emp_ser=Emp_ser(employees,many=True)
        return Response(emp_ser.data,status=status.HTTP_200_OK)
    # add employees data 
    def post(self,request):
        seri=Emp_ser(data=request.data)
        if seri.is_valid():
            seri.save()
            return Response(seri.data,status=status.HTTP_201_CREATED)
        else:
            return Response(seri.errors ,status=status.HTTP_400_BAD_REQUEST)
        

from django.http import Http404
class Employee_detail(APIView):
#getting data by a perticular id..........................
    def get_object(self, pk):
        try:
            return Employees.objects.get(pk=pk)
        except Employees.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        employee = self.get_object(pk)
        serializer = Emp_ser(employee)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self,request,pk):
        employee=self.get_object(pk)
        seli=Emp_ser(employee,data=request.data)
        if seli.is_valid():
            seli.save()
            return Response(seli.data,status=status.HTTP_201_CREATED)
        return Response(seli.errors,status=status.HTTP_404_NOT_FOUND)
    
    def delete(self,request,pk):
        employee=self.get_object(pk) 
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
     
"""
# FBV vs CBV (Most Important Table)
# Feature	FBV	CBV
# Style	Procedural	OOP
# Code reuse	❌ Low	✅ High
# Readability	Simple	Professional
# Scalability	❌ Poor	✅ Excellent
# Best for	Small APIs	Real projects
# DRF power	Limited	Full

"""
#---------------------------------------crud operations using mixins

from.serializers import Emp_ser
from employees.models import Employees
from rest_framework import generics, mixins
class EmployeeList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset=Employees.objects.all()
    serializer_class=Emp_ser #attribute names should be same as serializer_class

    def get(self,request):
        return self.list(request)
    def post(self,request):
        return self.create(request)
    
class Employee_detail(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset=Employees.objects.all()
    serializer_class=Emp_ser

    def get(self,request,pk):
        return self.retrieve(request,pk)
    def put(self,request,pk):
        return self.update(request,pk)
    def delete(self,request,pk):
        return self.destroy(request,pk)
    

"""

#generics
from rest_framework.views import APIView
from.serializers import Emp_ser
from employees.models import Employees
from rest_framework import generics, mixins
class EmployeeList(generics.ListCreateAPIView):
    queryset=Employees.objects.all()
    serializer_class=Emp_ser

class Employee_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Employees.objects.all()
    serializer_class=Emp_ser
    lookup_field="pk"