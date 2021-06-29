from unipath import Path
import hashlib
import os.path, time
import os
from datetime import datetime, timedelta
from dateutil import parser
import shutil
import subprocess

# DC Repo -  Swagger Files for API Explorer

swagger_test = Path (r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\api-explorer\test3-0").listdir()
#print(swagger_v3_0)

# Dev Center Repo - Static Files for API Explorer and API Reference
to_slate_repo_includes = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes")

cmd = 'cd C:\\Users\\I860605\\Desktop\\Dev_Center_New\\dev_concur\\src\\api-explorer\\test3-0\\ && For %G IN (*.json) do widdershins "%G" -o "%G".md'

#cmd = 'For /R C:\\Users\\I860605\\Desktop\\Dev_Center_New\\dev_concur\\src\\api-explorer\\test3-0\\ %G IN (*.json) do widdershins "%G" -o "%G".md'
for swagger in swagger_test:
    if swagger.ext == ".json":
        subprocess.run(cmd, shell=True)
    if swagger.ext == ".md":
        shutil.copy(swagger, to_slate_repo_includes)
        print("Swagger.md files have been moved to Slate!")
        