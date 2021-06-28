
# SAP Concur Developer Center (Source)

This repo contains the documentation and support content for the Concur API developer audience. This includes both internal and external developers.  

Changes merged to the `preview` branch can be found here: [http://preview.developer.concur.com/](http://preview.developer.concur.com/)

Changes merged to the `livesite` branch can be found here: [developer.concur.com](https://developer.concur.com/)

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
1. Installs the packages needed to build the site, primarily the Jekyll package  -- see https://github.com/jekyll/jekyll.
1. Builds the entire site according to `_config.yml`. This is mostly converting Markdown to HTML using Jekyll.
1. Archives the site.

# Site Deploy

If the site build is successful, within CircleCI:

1. Environment is created.
1. Workspace is created.
1. AWS CLI is used to deploy the entire site (overwrites everything) with the option to delete files no longer in the repository.
