# Generated by Django 5.0.6 on 2024-08-13 20:27

import markdownfield.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_news_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='body_rendered',
            field=markdownfield.models.RenderedMarkdownField(default='car'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='news',
            name='body',
            field=markdownfield.models.MarkdownField(rendered_field='text_rendered'),
        ),
    ]