# Generated by Django 4.0.5 on 2022-07-05 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('localapp', '0002_alter_order_ordered_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='category',
            field=models.CharField(choices=[('1', 'electronics'), ('2', 'foods'), ('3', 'detergents'), ('4', 'kitchen-ware'), ('5', 'toys')], max_length=20, null=True),
        ),
    ]
