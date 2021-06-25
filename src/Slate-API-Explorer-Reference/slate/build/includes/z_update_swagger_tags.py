from unipath import Path
import fileinput
import time

# CircleCI will run this script 7th (second to last)

# This is a final cleanup of Swagger.json.md files that were moved into Slate's 'includes' folder

# This is necessary so that only the needed data is retained, and the fonts display correctly in the Slate UI view



h1 = "h1"
h2 = "h2"
h3 = "h3"
h4 = "h4"
two_hash = "## "
three_hash = "###"
four_hash = "#### "
schemas_h1 = "# Schemas"
schemas_h3 = "### Schemas"
resources = 'Resources</h1>'

resource = 'Resource</h1>'
workflow_resources = 'Workflow Resource</h2'

authentication = "# Authentication"
oauth_3 = '- oAuth3 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.'
oauth_2 = '- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.'
authline_2 = 'authentication/getting-started.html">full authentication information</a> for more information.'
authline_3 = '- Flow: clientCredentials'
authline_4 = '- Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)'
authline_5 = '- Token URL = [https://us.api.concursolutions.com/oauth3/v0](https://us.api.concursolutions.com/oauth3/v0)'
collection = 'Collection</h2>'
custom_field_extension_h2 = 'CustomFieldExtension</h2>'
custom_field_h2 = 'CustomField</h2>'
get_h2 = 'Get</h2>'
responses = 'Responses</h3>'
post_h2 = 'Post</h2>'
put_h2 = 'Put</h2>'
get_all_h2 = 'GetAll</h2>'
get_single_h2 = 'GetSingle</h2>'
void_h2 = 'Void</h2>'
journey_h2 = 'Journey</h2>'
create_response_h2 = 'CreateResponse</h2>'
type_h2 = 'Type</h2>'
cash_advance_h2 = 'CashAdvance</h2>'
policy_h2 = 'Policy</h2>'
airline_h2 = 'Airline</h2>'
hotel_h2 = 'Hotel</h2>'
decimal_h2 = 'Decimal</h2>'
location_h2 = 'Location</h2>'
nullable_h2 = 'Nullable_1</h2>'
allocation_h2 = 'Allocation</h2>'
comp_address_h2 = 'CompanyAddress</h2>'
line_item_h2 = 'LineItem</h2>'
bill_to_h2 = 'BillToAddress</h2>'
purchase_order_h2 = 'PurchaseOrder</h2>'
purchase_order_result_h2 = 'PurchaseOrderResult</h2>'
ship_to_h2 = 'ShipToAddress</h2>'
receipt_image_h2 = 'ReceiptImage</h2>'
detail_h2 = 'Detail</h2>'

matching_fact_h2 = 'MatchingFact</h2>'
merchant_h2 = 'Merchant</h2>'
payment_card_h2 = 'PaymentCard</h2>'
invoice_items_h2 = '>Invoice'
supplier_single_h2 = 'SupplierSingle</h2>'
status_h2 = 'Status</h2>'
user_h2 = 'User</h2>'
toc_h2 = '<h2 id="tocS'
connection_requests_31 = '<h1 id="connection-requests">Connection Requests v3.1</h1>'
connection_requests_31_hashed = '## Connection Requests v3.1'
connection_requests_32 = '<h1 id="connection-requests">Connection Requests v3.2</h1>'
connection_requests_32_hashed = '## Connection Requests v3.2'

#These are showing up on the file as its being compiled in CircleCI, not on the files at the local machine
scope = "<th>Scope</th>"
scope_desc = "<th>Scope Description</th>"



# Slate 'includes' folder

to_slate_repo_includes =  Path(r"./src/Slate-API-Explorer-Reference/slate/source/includes").listdir()

# The below commented path is used for testing on the local machine. You may edit the path after the r" to the
# location of Slate's 'includes' folder on your machine

#to_slate_repo_includes = Path(r"C:\Users\I860605\Desktop\Dev_Center_New\dev_concur\src\Slate-API-Explorer-Reference\slate\source\includes").listdir()


# Update H1 Title Tag, H1 Resource Tag, and remove Authentication section from file - These updates are needed so file renders with correct font sizes in Slate UI

def updateTagsAndRemoveAuth():
    for swagger in to_slate_repo_includes:
        if ".json" in swagger:            
            for line in fileinput.input(swagger, inplace=True):
                line = line.rstrip()
                if h1 in line and resources in line:
                        line = line.replace(h1, h3)                                               # This will update the Resource tag from H2 to H3 - needs to be first for logic to work
                elif h1 in line and resource in line:
                    line = line.replace(h1, h3)
                elif connection_requests_31 in line:
                    line = line.replace(connection_requests_31, connection_requests_31_hashed)
                elif connection_requests_32 in line:
                    line = line.replace(connection_requests_32, connection_requests_32_hashed )
                elif h1 in line:                                                                             
                    line = line.replace(h1, h2)                                                   # This will update the H1 Tag of the File's title to H2 
                elif two_hash in line:
                    if line != "### Properties":                                                  # Needed to ensure hash sign update doesn't affect the Properties section
                        line = line.replace(two_hash, four_hash)                                  # Update labels with ## to #### - Used to update API calls on file 
                elif schemas_h1 in line:                           
                    line = line.replace(schemas_h1, schemas_h3)                                   # Updating the Schema label from # to ###
                # Removing entire Authentication section as its not needed in Slate
                elif authentication in line:
                    line = line.replace(authentication, "")
                elif oauth_2 in line:
                    line = line.replace(oauth_2, "")
                elif oauth_3 in line:
                    line = line.replace(oauth3, "")
                elif authline_2 in line:
                    line = line.replace(authline_2, "")
                elif authline_3 in line:
                    line = line.replace(authline_3, "")
                elif authline_4 in line:
                    line = line.replace(authline_4, "")
                elif authline_2 in line:
                    line = line.replace(authline_2, "")
                elif collection in line:
                    line = line.replace(h2, h3)
                elif custom_field_extension_h2 in line:
                    line = line.replace(h2, h3)
                elif get_h2 in line:
                    line = line.replace(h2, h3)
                elif post_h2 in line:
                    line = line.replace(h2, h3)
                elif put_h2 in line:
                    line = line.replace(h2, h3)
                elif get_all_h2 in line:
                    line = line.replace(h2,h3)
                elif get_single_h2 in line:
                    line = line.replace(h2, h3)
                elif void_h2 in line:
                    line = line.replace(h2, h3)
                elif journey_h2 in line:
                    line = line.replace(h2, h3)
                elif create_response_h2 in line:
                    line = line.replace(h2, h3)
                elif custom_field_h2 in line:
                    line = line.replace(h2, h3)
                elif type_h2 in line:
                    line = line.replace(h2, h3)
                elif cash_advance_h2 in line:
                    line = line.replace(h2, h3)
                elif policy_h2 in line:
                    line = line.replace(h2, h3)
                elif airline_h2 in line:
                    line = line.replace(h2, h3)
                elif hotel_h2 in line:
                    line = line.replace(h2, h3)
                elif decimal_h2 in line:
                    line = line.replace(h2, h3)
                elif location_h2 in line:
                    line = line.replace(h2, h3)
                elif nullable_h2 in line:
                    line = line.replace(h2, h3)
                elif allocation_h2 in line:
                    line = line.replace(h2, h3)
                elif comp_address_h2 in line:
                    line = line.replace(h2, h3)
                elif line_item_h2 in line:
                    line = line.replace (h2, h3)
                elif bill_to_h2 in line:
                    line = line.replace(h2, h3)
                elif purchase_order_h2 in line:
                    line = line.replace(h2, h3)
                elif purchase_order_result_h2 in line:
                    line = line.replace(h2, h3)
                elif ship_to_h2 in line:
                    line = line.replace(h2, h3)
                elif receipt_image_h2 in line:
                    line = line.replace(h2, h3)
                elif detail_h2 in line:
                    line = line.replace(h2, h3)
                elif matching_fact_h2 in line:
                    line = line.replace(h2, h3)
                elif merchant_h2 in line:
                    line = line.replace(h2, h3)
                elif payment_card_h2 in line:
                    line = line.replace(h2, h3)
                elif invoice_items_h2 in line:
                    line = line.replace(h2, h3)
                elif supplier_single_h2 in line:
                    line = line.replace(h2, h3)
                elif status_h2 in line:
                    line = line.replace(h2, h3)
                elif user_h2 in line:
                    line = line.replace(h2, h3)
                elif toc_h2 in line:
                    line = line.replace(h2, h3)
                elif scope in line:
                    line = line.replace(scope, "")
                elif scope_desc in line:
                    line = line.replace(scope_desc, "")
                print (line)
                
                
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
    updateTagsAndRemoveAuth()
    #retainV3_1Dropdown()
    #retainV3_2Dropdown()
    #retainV4_0Dropdown()

    
    
    
main()

#Purpose of this file..
# For each new Swagger.json.md file that is moved into Slate, the following changes need to be made...
# TOC title defaults to h1; needs to be h3
# Authentication section is present; Entire section needs to be removed as its not needed in Slate
# api calls default to ##; need to be ####