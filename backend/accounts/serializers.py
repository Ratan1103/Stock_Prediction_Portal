from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile


class UserRegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,style={"input_type":"password"})
    location = serializers.CharField(required=False,write_only=True)
    birth_date=serializers.DateField(required=True,write_only=True)

    class Meta:
        model=User
        fields=["first_name","last_name","username","email","location","birth_date","password"]
        extra_kwargs={
            "password":{"write_only":True}
        }
        
    def create(self,validated_data):
        first_name=validated_data["first_name"]
        last_name=validated_data["last_name"]
        username=validated_data["username"]
        email=validated_data["email"]
        birth_date=validated_data["birth_date"]
        location=validated_data["location"]
        password=validated_data["password"]


        user=User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        UserProfile.objects.create(user=user,birth_date=birth_date,location=location)

        return user
    
    def to_representation(self, instance):
        return {
            "message": "User registered successfully",
            "username": instance.username
        }

            