# AM Blog

AM Blog is a simple blog, consisting of a home page to display all posts, an about page, and a page to add new posts.<br>
Each post can be deleted individually.

I used **Node.js** with **Express** framework to mange routing, requests, server-side logic and responses.

> You can find more information about **Express** [here](https://expressjs.com).

To output the dynamic data that come from database I used a view engine **EJS**

## EJS :

`Embedded JavaScript templating`

-**How dose EJS work?**

The view files live on the server and we want to render one through the browser that view file is passed into the EJS view engine to be processed, the engine looks for any kind of dynamic content, variables, loops... etc. Then whenever it finds those it figures out the resulting HTML code for those parts and in the end it spits out a valid HTML page based on the template we wrote and then the HTML page with the resulting data inside it will be returned to the browser, and this whole process is called **server-side** rendering.

> You can find more information about **EJS** [here](https://ejs.co).
