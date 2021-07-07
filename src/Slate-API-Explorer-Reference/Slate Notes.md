# Same Page Screen Display

SCENARIO# 1

1. Sub Pages for eac Version will now display on the same page as the API Explorer screen
2. User no longer has to click on a link from the API Explorer screen to take them to the Sub Pages screen.
3. Set Up Excactly as it is in the current UI, so that there is no additional navigation done on the TOC when on one of the Sub Pages (i.e. Allocations, AttendeeTypes, etc.)

Steps Taken to Achieve:

1. Utilized the 'Includes' feature as demo'd by Trade Gecko: https://developer.tradegecko.com/docs.html#oauth-authentication-flows at their doc.html file.

2. Problem Encountered: While the Sub Page now displayed on the Explorer main page, there was no ability to stack all the Sub Pages under their 'version' drop down. This was because by default, Slate came with a single level nesting set up in the TOC. Therefore, to accomplish having both the main page display, and have them stacked under the Version tab, deeper nesting had to be implemented.

3. Overcame Problem By: Following steps for deeper nesting provided by Slate at: https://github.com/slatedocs/slate/wiki/Deeper-Nesting

New Problem Encountered: While the deeper nesting now allowed the Sub Pages to be placed under their Version tabs, AND also be displayed on the same page, The TOC nesting feature only goes 2 levels deep. So onc you click on the Version, and then the Sub Page(i.e. Allocations), Every Item under the Sub Page will dispay(i.e. get, post, put, delete, parameters, responses, Shemas etc.) The stakeholder may or may not like this.

Overcame Problem By: Removing the additional code from the layout.erb file, that I originally added following the Deeper Nesting steps by slate. The code removed was:

<%# New code for deeper nesting added below %> 
                    <% if h2[:children].length > 0 %>
                      <ul class="toc-list-h3">
                        <% h2[:children].each do |h3| %>
                          <li>
                            <a href="#<%= h3[:id] %>" class="toc-h3 toc-link" data-title="<%= h3[:content] %>"><%= h3[:content] %></a>
                            <% if h3[:children].length > 0 %>
                              <ul class="toc-list-h4">
                                <% h3[:children].each do |h4| %>
                                  <li>
                                    <a href="#<%= h4[:id] %>" class="toc-h4 toc-link" data-title="<%= h4[:content] %>"><%= h4[:content] %></a>
                                  </li>
                                <% end %>
                              </ul>
                            <% end %>
                          </li>
                        <% end %>
                      </ul>
                    <% end %> 
<%# Code for deeper nesting ends here %> 


I also then removed the follwing CSS that was added as part of the Deeper Nesting steps:

& > h1,
& > h2,
& > h3,
& > h4,
& > div {
  clear: both;
}

Once removed, the stakeholder now has the Sub Pages displaying on the main Explorer page, each nested under their Version tab, but with no additional nesting on the TOC; The user will just scroll down the page to see the content as in their current UI.

SCENARIO # 2

Include the Full Deeper Nesting in the TOC, by adding back in the 2 components above that were removed.

The result will be that the Sub Pages will be nested under their Version tab, and also have additional nesting of the contents of the Sub Page displayed in the TOC 

Potential Issue: Stakeholder may not like the view, or see it as too long, as the nesting will display all both the category and sub-category items in the TOC( i.e. Allocations.html > Resources > get_expense_allocations > Parameters > Responses)

# API REFERENCE 

zythromysin 
cesmidyr

ISSUES:
1. The layout on some pages does not match evenly with the code display, as it does with the API Explorer

This is because the files used for the API Reference area were markdown from the outset, while the files used in the API Explorer area were Swagger.json files. The middleware we use is called Widdershins. What this does is convert the Swagger files to markdown, and when this is done, the code samples and content on the left of the page dispaly evenly across from each other.

Without the conversion process of Widdershins, we would need to find a way to manually match each section with the code display. On average there are about 6 edits per page that need to be updated this way, and 106 files in the Reference section. That would essentially be 636 manual updates that would need to be made, if they can even be made without messing up the already even display of the API Explorer(as they are sharing the same Javascript and CSS

2. Languages are not multiple for Reference area, since they were never being converted from Swagger to Markdown, and were already Markdown. Transferring the ```code language`` tags over manually to each file did not cause automatic conversion of languages. 