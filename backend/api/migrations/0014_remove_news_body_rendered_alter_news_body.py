# Generated by Django 5.0.6 on 2024-08-18 14:03

import markdownx.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_merge_20240818_1403'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='body_rendered',
        ),
        migrations.AlterField(
            model_name='news',
            name='body',
            field=markdownx.models.MarkdownxField(),
        ),
    ]