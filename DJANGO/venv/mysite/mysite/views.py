# I have created this file - Rohan
from django.http import HttpResponse
from django.shortcuts import render

# def index(request):
#     return HttpResponse('''<h1>Hello Rohan</h1><br><a href="http://127.0.0.1:8000/charcount">charcount</a><a href="http://127.0.0.1:8000/about"about</a><br><a href="http://127.0.0.1:8000/spaceremove">spaceremove</a><br><a href="http://127.0.0.1:8000/removepunc">removepunc</a><br><a href="http://127.0.0.1:8000/newlineremove">newlineremove</a><br><a href="http://127.0.0.1:8000/capitalizefirst">capfirst</a>''')

def index(request):
    return render(request, 'index.html')
    # params = {'name':'rohan','age':'20'}
    # return render(request, 'index.html', params)
    # return HttpResponse('''''')

def analyze(request):
    # Get the text
    djtext = request.GET.get('text', 'default')
    removepunc = request.GET.get('removepunc', 'off')
    fullcaps = request.GET.get('fullcaps', 'off')
    newlineremover = request.GET.get('newlineremover', 'off')
    spaceremover = request.GET.get('spaceremover', 'off')
    charcounter = request.GET.get('charcounter', 'off')
    # print(djtext)
    # print(removepunc)
    if removepunc == "on":
        # analyzed = djtext
        punctuations = ''''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analyzed = ""
        for char in djtext:
            if char not in punctuations:
                analyzed = analyzed + char
        params = {'purpose':'Remove Punctuations', 'analyzed_text': analyzed}
        # Analyze the text
        # return HttpResponse("Hello I am removepunc")
        return render(request, 'analyze.html', params)
    elif(fullcaps=="on"):
        analyzed = ""
        for char in djtext:
            analyzed = analyzed + char.upper()
        params = {'purpose':'Changed to Uppercase', 'analyzed_text': analyzed}
        return render(request, 'analyze.html', params)
    elif(newlineremover=="on"):
        analyzed = ""
        for char in djtext:
            if char != '\n':
                analyzed = analyzed + char
        params = {'purpose':'Remove New Line', 'analyzed_text': analyzed}
        return render(request, 'analyze.html', params)
    elif(spaceremover=="on"):
        analyzed = ""
        for index,char in enumerate(djtext):
            if not(djtext[index] == ' ' and djtext[index+1]==" "):
                pass
            else:
                analyzed = analyzed + char
        params = {'purpose':'Extra Space Remover', 'analyzed_text': analyzed}
        return render(request, 'analyze.html', params)
    elif(charcounter=="on"):
        analyzed = len(djtext)
        params = {'purpose':'Character Counter', 'analyzed_text': analyzed}
        return render(request, 'analyze.html', params)
    else:
        return HttpResponse("Error...")

# def capitalizefirst(request):
#     return HttpResponse("Hello I am capitalizefirst")

# def newlineremove(request):
#     return HttpResponse("Hello I am newlineremove")

# def spaceremove(request):
#     return HttpResponse("Hello I am spaceremove")

# def charcount(request):
#     return HttpResponse("Hello I am charcount")