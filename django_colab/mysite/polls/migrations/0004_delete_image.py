# Generated by Django 3.2.13 on 2022-05-18 11:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_alter_image_title'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
    ]
