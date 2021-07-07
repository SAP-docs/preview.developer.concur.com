
# SAP Concur Developer Center (Source)

[![REUSE status](https://api.reuse.software/badge/github.com/sap-docs/developer.concur.com)](https://api.reuse.software/info/github.com/sap-docs/developer.concur.com)

This repo contains the documentation and support content for the Concur API developer audience. This includes both internal and external developers.  

# Sitemap

The Concur Developer Website found within the `/src` folder is organized into these areas:

```
_data            Sidebars for navigation and various other YML files for the site.
_includes        Base HTML for the site combined with Markdown at build time.
_layouts         Specific HTML for the various types of resources, referenced with Jekyll front matter, combined with Markdown at build time.
_plugins         Various Jekyll plugins used at build time.
_sass            CSS styling for the site.
api-explorer     OpenAPI documentation (aka 'Swagger') for some of the API endpoints.
api-guides       Partner enablement resources showing how to combine various APIs for end-to-end solutions.
api-reference    Specific API endpoint documentation.
assets           Various site wide images.
manage-apps      SAP Concur App Center partner marketing materials.
swagger-ui       Supporting files for /api-explorer
tools-support    Support resources for developers including release notes.
```

# Availability

[View Availability](https://stats.uptimerobot.com/P7BJ7ToVO)

# Support

If you are an existing Concur partner and require support assistance, please open a partner support case [here](https://na4.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi).

# Site Build

Within CircleCI:

1. Environment is created.
1. Source code for the site is cloned from GitHub.
1. Installs the packages needed to build the site, primarily the Jekyll package  -- see https://github.com/jekyll/jekyll. and Slate package --see https://github.com/slatedocs/slate
1. Builds the entire site according to .circle/_config.yml file, as well as the 'config.yml' file for Jekyll at the root of this directory. This is mostly converting Markdown to HTML using Jekyll.
1. Archives the site.

# Site Deploy

If the site build is successful, within CircleCI:

1. Environment is created.
1. Workspace is created.
1. Entire site is deployed to a Github Pages branch, from which the site is then rendered.


## Dependencies:

1. Jekyll: https://jekyllrb.com/docs/ (For main site)

2. Slate: https://github.com/slatedocs/slate (For API Exploerer and API Reference new UIs)



## To Preview the new API Explorer or API Reference sites from Visual Studio Code:

1. Clone the repository to your machine: `git clone https://github.com/sap-staging/developer.concur.com.git` or using Github Desktop (Green Code tab above > Open With Github Desktop)

2. Install the VS Code **Go Live** Extension: 
    - Click on the 6th extension from the top left list of icons
    - Enter **Live Server** in the search bar
    - Click **Install**
    - More info on this extension here : https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    
3. Change directories to the static file for **API Reference** located at: `sap-staging/developer.concur.com/src/Slate-API-Explorer-Reference/slate/build/api-reference.html`or to the static file for **API Explorer** located at `sap-staging/developer.concur.com/src/Slate-API-Explorer-Reference/slate/build/index.html` and make sure the file is open in your VS Code Editor.

4. Click the **Go Live** button at the bottom right of the VS Code window.

5. VS Code will open a new window rendering the site (typically on localhost:5500)

**Note:** This will allow you to preview the site only, but not to view updated changes you've made to API Explorer or API Reference files 

To view the changes you've made to **API Reference** files, you will need to run Middleman on your VS Code Terminal or your CLI by entering the following commands: 
    
    1. `bundle install` (this only needs to be done one time)  
    2. `bundle exec middleman server` (each time) to render your changes on `localhost:4567`

You may also run the following commands:

    1. `bundle install` (this only needs to be done one time)
    2. `bundle exec middleman build` (each time) 
    
    This will generate a fresh set of static files containing your updated Markdown changes.

From there you can simply click on the **Go Live** button in VS Code to view your updated changes. 


**Note:** Updates to API Explorer files will follow their normal process as before, by updating the Swagger files in the `src` folder as mentioned in the steps below.



## To make changes to Swagger files (or other files) on your local machine using the CLI:

1. Clone the repository to your machine: `git clone https://github.com/sap-staging/developer.concur.com.git`
2. Using the editor of your choice, make changes to any files under the `src` folder. i.e. `sap-staging/developer.concur.com/src/api-explorer/v3-0/<filename>`


## To view changes on your local machine:

1. Change directories in your CLI to the `developer.concur.com` folder:  `cd sap-staging/developer.concur.com`
2. Run the following commands: 1. `bundle install` (this only needs to be done one time)  2. `bundle exec jekyll serve` (each time)
4. Site can be viewed at `localhost:4000`


## (New Change) To make changes specifically to files within API Reference:

1. Using the editor of your choice, make changes to any file under the `includes` folder located at  `sap-staging/developer.concur.com/src/Slate-API-Explorer-Reference/slate/includes/<filename>`

     **Note:** All API Reference files are the files within the ***'includes'*** folder that **do not** have a Swagger.json.md extension

## To view API Reference changes on your CLI:

1. Change directories to the 'slate' folder in the Slate portion of this repository:
    `cd developer.concur.com/src/Slate-API-Explorer-Reference/slate/`

2. Run the following commands: 1. `bundle install`(this only needs to be done one time)   2. `bundle exec middleman server` (each time)

3. Changes can be viewed at `localhost:4567`














