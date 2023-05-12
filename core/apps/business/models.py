from django.db import models
from django.contrib.postgres.fields import ArrayField
from core.apps.creator.models import KollabCreator

# Create your models here.
class KollabBusiness(models.Model):
    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    deleted = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    # logo = models.ImageField(upload_to='business/logos/business')
    # cover = models.ImageField(upload_to='business/covers/cover')
    website = models.URLField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)
    campaign_id = models.ForeignKey('KollabCampaign', on_delete=models.CASCADE)
    tier_id = models.ForeignKey('KollabTier', on_delete=models.CASCADE)
    detail_id = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class KollabCampaign(models.Model):
    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    deleted = models.DateTimeField(auto_now=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    bid = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    category = models.CharField(max_length=100)
    # logo = models.ImageField(upload_to='business/logos/campaign')
    # cover = models.ImageField(upload_to='business/covers/campaign')
    business_id = models.ForeignKey('KollabBusiness', on_delete=models.CASCADE)

    creator_id = models.ForeignKey(KollabCreator, on_delete=models.CASCADE)
    currency_id = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class KollabTier(models.Model):
    id = models.AutoField(primary_key=True)
    tier = models.CharField(max_length=100)

    def __str__(self):
        return self.name
