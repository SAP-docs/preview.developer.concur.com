from unipath import Path
import fileinput


chev_4 = '|»»»»'

# Slate 'includes' folder
budget = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes\_Budget.swagger2.json.md")


def removeChevron():        
            for line in fileinput.input(budget, inplace=True):
                line = line.rstrip()
                if chev_4 in line:
                        line = line.replace(chev_4, "|")
                print(line)
                        
                        
removeChevron()