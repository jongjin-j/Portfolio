---
title: Private Blog
stack: Javascript, Node.js, Express.js, MongoDB
slug: private-blog
projectImage: ../images/PrivateBlog.png
link: https://github.com/jongjin-j/PrivateBlog
---

This project is a blog app that I created with the purpose of recording my family meals to prevent overlaps as much as possible, but I designed it in a format where anyone can use for any purpose. It connects to the user's local database using mongoDB. It comes with user authentication so that only people with an account can access the blog posts on the app. I utilized Express to handle HTTP requests. The user authentication was handled using JWT(JSON Web Token). The frontend was created using the EJS view engine. I imported the multer library to handle image uploads. 

<br/><br/>

### More about the Project

The github README file provides instructions to set up the app locally. The user cannot view the posts before registering to the app. When registered, the password is hashed for encryption purposes. The email and the hashed password are passed to the database. The user login is passed if the email and the password entered in the login field matches the information in the database. Once logged in, the user can add as many posts as they want, and can delete them as well. An image can be added to the post as well, which also appears as a thumbnail on the preview.