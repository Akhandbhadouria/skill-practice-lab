from django.urls import path
from . import views
urlpatterns=[
     path('student/',views.Studentview),
     path('student/<int:pk>',views.student_view,name="student_view"),

    path('employees/',views.EmployeeList.as_view(),name="employees"),
    path('employees/<int:pk>/',views.Employee_detail.as_view(),name="employees_detail")
] 