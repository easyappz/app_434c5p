from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from drf_spectacular.utils import extend_schema
from django.utils import timezone
from .models import Ad, Category
from .serializers import AdSerializer, RegisterSerializer, UserSerializer, MessageSerializer


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Instance must have an attribute named 'owner'.
        return obj.owner == request.user


class RegisterView(APIView):
    @extend_schema(
        responses={201: UserSerializer}, description="Register a new user"
    )
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    @extend_schema(
        responses={200: UserSerializer}, description="Login user"
    )
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    @extend_schema(
        responses={205: None}, description="Logout user"
    )
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AdListView(generics.ListAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category__slug']
    search_fields = ['title', 'description']
    @extend_schema(
        description="List ads with search and filter"
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class AdCreateView(generics.CreateAPIView):
    serializer_class = AdSerializer
    permission_classes = [IsAuthenticated]
    @extend_schema(
        description="Create a new ad"
    )
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class AdDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    @extend_schema(
        description="Retrieve, update or delete an ad"
    )
    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            self.permission_classes = [IsAuthenticated, IsOwner]
        else:
            self.permission_classes = []
        return super().get_permissions()


class HelloView(APIView):
    """
    A simple API endpoint that returns a greeting message.
    """
    @extend_schema(
        responses={200: MessageSerializer}, description="Get a hello world message"
    )
    def get(self, request):
        data = {"message": "Hello!", "timestamp": timezone.now()}
        serializer = MessageSerializer(data)
        return Response(serializer.data)
