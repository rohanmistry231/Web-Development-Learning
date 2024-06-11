from django import forms
from .models import Category, Question

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['category', 'question_text', 'answer_text']