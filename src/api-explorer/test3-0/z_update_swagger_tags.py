import fileinput
keyword1 = "h1"
#keyword2 = "-i-"
replacement1 = "h2"
#replacement2 = "-I-"
for line in fileinput.input('Test.md', inplace=True):
    line = line.rstrip()
    if keyword1 in line:
        line = line.replace(keyword1, replacement1)
    #elif keyword2 in line:
     #   line = line.replace(keyword2, replacement2)
    print (line)