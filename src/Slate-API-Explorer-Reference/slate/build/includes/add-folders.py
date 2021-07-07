# To retain the drop-down folders, the last file before each new folder must contain that folder's name at the end of it with an # tag.
def retainV3_1Dropdown():
    with open("_Vendors.swagger2.json.md", "a+") as last_file:
    # Move read cursor to the start of file.
        last_file.seek(0)
        # If file is not empty then append '\n'
        data = last_file.read(100)
        if len(data) > 0 :
            last_file.write("\n")
            # Append text at the end of file
            last_file.write("# Version 3.1")
        print("Retained V3.1 Folder Drop-down")
                
                
def retainV3_2Dropdown():
    with open("_RequestGroupConfigurations.swagger2.json.md", "a+") as last_file:
    # Move read cursor to the start of file.
        last_file.seek(0)
        # If file is not empty then append '\n'
        data = last_file.read(100)
        if len(data) > 0 :
            last_file.write("\n")
            # Append text at the end of file
            last_file.write("# Version 3.2")
        print("Retained V3.2 Folder Drop-down")
    

def retainV4_0Dropdown():
    with open("_ConnectionRequests32.swagger.json.md", "a+") as last_file:
    # Move read cursor to the start of file.
        last_file.seek(0)
        # If file is not empty then append '\n'
        data = last_file.read(100)
        if len(data) > 0 :
            last_file.write("\n")
            # Append text at the end of file
            last_file.write("# Version 4.0")
        print("Retained V4.0 Folder Drop-down")
        
        
def waitAMoment():
    time.sleep(30)
    print("Waiting for file to update before moving to next command.")
    
        
    
        
def main():
    #updateTagsAndRemoveAuth()
    retainV3_1Dropdown()
    retainV3_2Dropdown()
    retainV4_0Dropdown()

    
    
    
main()
