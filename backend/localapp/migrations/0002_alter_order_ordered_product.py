# Generated by Django 4.0.5 on 2022-07-05 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('localapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='ordered_product',
            field=models.CharField(max_length=20),
        ),
    ]