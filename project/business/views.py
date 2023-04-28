from django.shortcuts import render

# class IndexView(generic.ListView):
#     template_name = 'business/index.html'
#     context_object_name = 'latest_creator_list'

#     def get_queryset(self):
#         """Return the last five published creators."""
#         return Creator.objects.order_by('-pub_date')[:5]

def index(request):
    return render(request, 'business/index.html')
