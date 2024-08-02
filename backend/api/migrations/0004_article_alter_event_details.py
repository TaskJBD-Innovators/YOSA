# Generated by Django 5.0.6 on 2024-07-18 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_event_location_alter_event_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('body', models.TextField()),
                ('status', models.CharField(choices=[('d', 'Draft'), ('p', 'Published'), ('w', 'Withdrawn')], max_length=1)),
            ],
        ),
        migrations.AlterField(
            model_name='event',
            name='details',
            field=models.TextField(default='No details provided', max_length=200),
        ),
    ]