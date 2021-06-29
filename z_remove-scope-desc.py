from unipath import Path
import fileinput


#These are showing up on the file as its being compiled in CircleCI, not on the files at the local machine
scope = "<th>Scope</th>"
scope_desc = "<th>Scope Description</th>"
chevron = "»"



# Slate 'includes' folder

dc_index_in_gh_pages =  Path(r"./src/slate-ui/build/index.html")

# The below commented path is used for testing on the local machine. You may edit the path after the r" to the
# location of Slate's 'includes' folder on your machine

#to_slate_repo_includes = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes").listdir()


# Update H1 Title Tag, H1 Resource Tag, and remove Authentication section from file - These updates are needed so file renders with correct font sizes in Slate UI

def removeScopeTags():
    for line in fileinput.input(dc_index_in_gh_pages, inplace=True):
        line = line.rstrip()
        if scope in line:
            line = line.replace(scope, "")                                               
        elif scope_desc in line:
            line = line.replace(scope_desc, "")
        elif chevron in line:
            line = line.replace(chevron, "")
                
        print (line)
                
                

    
        
def main():
    removeScopeTags()
    
    
    
    
main()

