from unipath import Path
import fileinput

first_three_lines = '---'
title1 =  'title: Allocations v3.0'
title2 =  'title: Connection Requests v3.1'
title3 =  'title: Connection Requests v3.2'
title4 =  'Budget'

language = 'language_tabs:'
shell =   '- shell: Shell'
http =   '- http: HTTP'
javascript =  '- javascript: JavaScript'
ruby =   '- ruby: Ruby'
python =   '- python: Python'
php =   '- php: PHP'
java =   '- java: Java'
go =  '- go: Go'
footers = 'toc_footers: []'
includes = 'includes: []'
search = 'search: true'
highlight = 'highlight_theme: darkula'
headling = 'headingLevel: 2'
generator = 'generator: widdershins v4.0.1'

last_three_lines = '---'

to_slate_repo_includes = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes").listdir()

def removeFrontMatter():
    for swagger in to_slate_repo_includes:
        if ".json" in swagger:            
            for line in fileinput.input(swagger, inplace=True):
                line = line.rstrip()
                if first_three_lines in line:
                    line = line.replace(first_three_lines, "")
                    
                    
def main():
    removeFrontMatter()
    
main()