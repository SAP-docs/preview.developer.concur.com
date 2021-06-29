from unipath import Path
import os

# CircleCI will run this script 5th

# This will add an "_" to all the fresh .md files in v4-0

#Note for testing on your local machine, you may uncomment either of the below paths, either will work.
#They've been changed for use in CircleCI to specify the specific path as listed in the repository, rather than your machine
#So once you uncomment either path, kindly adjust the portion after the r" to wherever v3-0 is on your machine
# Once done, simply comment out the 'v3_0 = Path(r"./src/api-explorer/v3-0")' path and then it will run on your machine

#These are the 2 paths you may edit for testing on your machine:

#os.chdir(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v4-0")
# v4_0 = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\v4-0"


v4_0 = Path(r"./src/api-explorer/v4-0")

#Add "_" to the beginning of every markdown file that does not have it
for markdown in v4_0.listdir():
    if "_" not in markdown:
        new_name = "_" + markdown        
        os.rename(markdown, new_name)
        print("Adding '_' to file...Filename has just been updated to: ", new_name)
print("All filenames already have correct formatting")
    