# Generated by Django 3.0.2 on 2020-01-27 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drawnings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='drawning',
            name='draw',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]