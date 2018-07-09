# About the Blog Application
__Note__: Start the server in the server-blog/ using npm run json:server. This is the backend. You can explore the API by going to http://locahost:4201 - there are posts, authors and comments. The structure of the API is similar to the products API - in case of any doubts in the API you can reach out to me.  

Create an Angular 6 application that has at least these 3 pages. 
1. Blog listing page  
Lists out blog articles as thumbnails with title, author name, posted date and a gist of the description (100 characters). Use a 3-column layout (3 thumbnails per row).  

Actions:  
- Clicking a thumbnail takes user to the blog detail page  
- There should be an add article button. Clicking this should open the Post article page.   

2. Post article page
One can add a post through this view. Use a rich text editor like below for user to write.  
- https://www.npmjs.com/package/angular-froala-wysiwyg  
- https://www.npmjs.com/package/ngx-editor  

__Note__: You need to install these npm package(s) and then import them into your module.  

Other information like Author name and title for post are also obtained and POSTed to backend. Once article is posted, user should be redirected to blog listing page  

3. Blog details page  
Displays a non-editable view of the selected post. Below the post should be the list of comments for the post. Below this list is a form to comment - the form will have commenters name, title for comment and comment text. Once a comment is posted it should appear in the list. Provide a button to navigate to the blog list page.  