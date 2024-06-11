import json
from django.core.management.base import BaseCommand
from notes.models import Category, Question

class Command(BaseCommand):
    help = 'Load interview questions into the database'

    def handle(self, *args, **kwargs):
        with open('interview_questions.json') as f:
            data = json.load(f)

        for entry in data:
            category_name = entry['category']
            category, created = Category.objects.get_or_create(name=category_name)

            for question_data in entry['questions']:
                Question.objects.get_or_create(
                    category=category,
                    question_text=question_data['question_text'],
                    answer_text=question_data['answer_text']
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded interview questions.'))