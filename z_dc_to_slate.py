from unipath import Path
import os
import shutil

# CircleCI will run this script 6th

# Dev Center Repo -  Swagger Files for API Explorer

#Note for testing on your local machine, you may uncomment either of the below paths, either will work.
#They've been changed for use in CircleCI to specify the specific path as listed in the repository, rather than your machine
#So once you uncomment either path, kindly adjust the portion after the r" to wherever the file location is on your machine
# Once done, simply comment out the 'swagger_v3_0 = Path(r"./src/api-explorer/v3-0")' path, and do the same
# for the other swagger paths, and then it will run on your machine

#These are the 2 paths you may edit for testing on your machine:


#swagger_v3_0 = Path (r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v3-0").listdir()

#swagger_v3_1 = Path (r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v3-1").listdir()

#swagger_v3_2 = Path (r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v3-2").listdir()

#swagger_v4_0 = Path (r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v4-0").listdir()

swagger_v3_0 = Path(r"./src/api-explorer/v3-0")
swagger_v3_1 = Path(r"./src/api-explorer/v3-1")
swagger_v3_2 = Path(r"./src/api-explorer/v3-2")
swagger_v4_0 = Path(r"./src/api-explorer/v4-0")

# All markdown files in the 'includes' folder in Slate portion of the Dev Center repo

to_slate_repo_includes =  Path(r"./src/Slate-API-Explorer-Reference/slate/source/includes/")
#to_slate_repo_includes = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes")


# Moving each batch of newly converted files that now have the added "_" to Slate's 'includes' folder

def moveV3_0():
    for swagger in swagger_v3_0.listdir():
        if swagger.ext == ".md":
            shutil.copy(swagger, to_slate_repo_includes)
            print("Swagger V3-0 .md file has been moved to Slate!")
       
       
def moveV3_1():
    for swagger in swagger_v3_1.listdir():
        if swagger.ext == ".md":
            shutil.copy(swagger, to_slate_repo_includes)
            print("Swagger V3-1 .md file has been moved to Slate!")
            
def moveV3_2():
    for swagger in swagger_v3_2.listdir():
        if swagger.ext == ".md":
            shutil.copy(swagger, to_slate_repo_includes)
            print("Swagger V3-2 .md file has been moved to Slate!")
            
def moveV4_0():
    for swagger in swagger_v4_0.listdir():
        if swagger.ext == ".md":
            shutil.copy(swagger, to_slate_repo_includes)
            print("Swagger V4-0 .md file has been moved to Slate!")


def main():
    moveV3_0()
    moveV3_1()
    moveV3_2()
    moveV4_0()
    
    
main()