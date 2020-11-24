# CockTails

###### By Roger Louisaire, Jeremy Spewock, and Ben Taylor

[CockTails App](https://ga-project3-client.herokuapp.com/)

Our CockTails application was created to solve the problem of curious adults looking to craft the perfect drink but do not know all of the ingredients required. With this application, the user is able to search a third-party database [CocktailDB API](https://www.thecocktaildb.com/) by drink name or ingredient (alcohol or mixer). In addition to this functionality, the user is also able to add to our database by creating their own drink. 

### Technologies Used

CockTails utilizes the basic tools of a full-stack MERN application, along with our own MongoDB database and third-party API that was mentioned above. This application follows CRUD functionality, allowing for easy means to create cocktails, read cocktail information (ingredients, measurements, and instructions), update them, and delete from the page.

### Unsolved Problems
* User authentication - This was initially a goal of ours to include in the application, so that the user could not only add and create cocktails on the page, but also denote favorites and create customized lists by the user's choice. This proved difficult in working with ReactJS user authentication, but is definitely something to work on moving forward.
* Favorites feature - Not including user authentication, another initial goal of ours was to create a Favorites list of cocktails for users to look at their own created cocktails as well as from the API
* Comments/web socket features - Another stretch goal was to incorporate web sockets so that we could add comments to different drinks and make our website social with multiple users. In the time of COVID-19, making cocktails with friends over Zoom could be easy using our app to pick the drink!
