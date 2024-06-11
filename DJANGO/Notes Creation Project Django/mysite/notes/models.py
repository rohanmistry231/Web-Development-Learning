from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Question(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    answer_text = models.TextField()

    def __str__(self):
        return self.question_text
