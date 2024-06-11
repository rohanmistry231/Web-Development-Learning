from django.shortcuts import render, redirect, get_object_or_404
from .models import Category, Question
from .forms import CategoryForm, QuestionForm

def home(request):
    categories = Category.objects.all()
    return render(request, 'notes/home.html', {'categories': categories})

def add_category(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = CategoryForm()
    return render(request, 'notes/add_category.html', {'form': form})

def category_detail(request, pk):
    category = get_object_or_404(Category, pk=pk)
    questions = category.questions.all()
    return render(request, 'notes/category_detail.html', {'category': category, 'questions': questions})

def add_question(request, pk):
    category = get_object_or_404(Category, pk=pk)
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.category = category
            question.save()
            return redirect('category_detail', pk=category.pk)
    else:
        form = QuestionForm(initial={'category': category})
    return render(request, 'notes/add_question.html', {'form': form, 'category': category})
