# MongoDB Database Application

Thoughts, a place to store your thoughts/take notes. This is a CRUD application built using NodeJS, ExpressJS, MongoDB, EJS, HTML, and CSS. 

## User Stories

Thoughts allows you to create an account, post thoughts and comment notes on those thoughts just for you to see. 
  - I am able to make an account. 
  - I am able to log in to my account. 
  - I am able to log out of my account. 
  - I am able to see my notes/thoughts. (Get request for all thoughts.)
  - I am able to create a new note/thought. (Post request to create a new thought.)
  - I am able to update a note/thoght. (Put request to update a new thought.)
  - I am able to delete a note/thought. (Delete request to delete a thought.)
  - I am able to see all comments to each individual note/thought. 
  - I am able to create a new comment on a note/thought. 
  - I am able to update a comment on a note/thought.
  - I am able to delete a comment from a note/thought. 
  - I am able to search through my notes/thoughts and retrieve a list of my keyword. 

## Getting Started

Currently you will need to add a .gitignore file, a .env file, set up your connection string to /thoughts collections. 
After this you will run two commands: 
  - npm install 
  - npm start
  - navigate to localhost:5000

### Dependencies

* running npm install will install all of the dependencies in the package.json file

## Sources
- https://www.youtube.com/watch?v=BDo1lgaZuII
- The inspiration for this application came from an online tutorial where I learned how to create routes and connect them to the data that is being posted to and being received from MongoDB. I learned how to connect my front end using EJS. I further applied what I learned in the video by implementing the comments functionalities to be able to create, update, view, and delete all comments being pulled from the database. I also learned how to use passport and google to authenticate users logging in with their Google email accounts. In addition, I learned how to properly structure my folders using view templates, specifically with EJS. My controllers and routes working together to render and redirect the user is my biggest take away. I was not able to do those things strictly on my own. This project and tutorial were very helpful to my growth. 

## Reminders 

* This is the route that is accessible without having to be loggedIn that you can run to check that the validator of the Schema is working

http://localhost:5000/dashboard/validate
{
  "id": 110540928425395527323,
  "title": "this is my title", 
  "body": "this is my note"
}

The JSON object is the POST request JSON body to send to the route above. 