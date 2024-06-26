# Generated by Django 5.0.3 on 2024-05-11 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_course_category_alter_course_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='course',
            name='duration',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='course',
            name='price',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='course',
            name='provider',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='course',
            name='rating',
            field=models.CharField(max_length=32),
        ),
    ]
