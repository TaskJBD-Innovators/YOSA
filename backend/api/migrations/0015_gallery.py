# Generated by Django 5.0.6 on 2024-08-18 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_remove_news_body_rendered_alter_news_body'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='gallery/')),
            ],
        ),
    ]