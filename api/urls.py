from django.urls import path
from .views import HelloView, RegisterView, LoginView, LogoutView, AdListView, UserAdListView, AdCreateView, AdDetailView, CategoryListView, SendMessageView

urlpatterns = [
    path("hello/", HelloView.as_view(), name="hello"),
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/login/", LoginView.as_view(), name="login"),
    path("auth/logout/", LogoutView.as_view(), name="logout"),
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path("ads/", AdListView.as_view(), name="ad-list"),
    path("ads/my/", UserAdListView.as_view(), name="my-ads"),
    path("ads/create/", AdCreateView.as_view(), name="ad-create"),
    path("ads/<int:pk>/", AdDetailView.as_view(), name="ad-detail"),
    path("ads/<int:pk>/message/", SendMessageView.as_view(), name="send-message"),
]