# Generated by Django 5.0.6 on 2024-08-04 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_donation_amount_donation_reference_donation_verified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='reference',
            field=models.CharField(default='YOSA', max_length=100, unique=True),
        ),
    ]