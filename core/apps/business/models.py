from django.db import models

# Create your models here.
class KollabBusiness(models.Model):
    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    deleted = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField(upload_to='business/logos')
    cover = models.ImageField(upload_to='business/covers')
    website = models.URLField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)
    campaign_id = models.CharField(max_length=100)
    tier_id = models.CharField(max_length=100)
    detail_id = models.CharField(max_length=100)

class KollabCampaign(models.Model):
    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    deleted = models.DateTimeField(auto_now=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    bid = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    type = models.CharField(max_length=100)
    image = models.ImageField(upload_to='business/campaigns')
    business_id = models.CharField(max_length=100)
    creator_id = models.CharField(max_length=100)
    currency_id = models.CharField(max_length=100)

class KollabTier(models.Model):
    id = models.AutoField(primary_key=True)
    tier = models.CharField(max_length=100)