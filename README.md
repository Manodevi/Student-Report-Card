# ![Student Report Card App Demo](https://user-images.githubusercontent.com/88968771/142992160-9e015137-1874-42a6-b37e-80a58e267fd6.gif)
Goal is to practice MERN stack.

## Features
* Add/Update/Delete Student
* Add/Update Student's Report Card
* Report Card - consists of 2 terms with 2 periodic test each( Term1 - PT1, PT2; Term2 - PT3, PT4)

## How I Worked on this app -

### Express server setup with initial routes
* Installed - express express-validator mongoose, development server - nodemon
* Made server.js as the entry point of backend by modifying main and scripts in package.json
* Initialized express in server.js and defined routes for student and report card API.
* Defined database credential details and db connection in config folder.

### Mongoose Model
* Created student and report card model with Schema

### API Request Validation 
* Done by check and validationResult methods from 'express-validator.

### API - POSTMAN [Testing Collection](https://www.postman.com/manodevi/workspace/student-report-card/documentation/17909886-c56a515a-32b0-4996-8079-d0cc0bcd8ed7)

### React
* Axios library - to make API request.
* React Router Dom
* App Level State Management - __Context API__
* React Hooks Used - 
  * useState  
  * useEffect
  * useContext

### If I have more time - Need to work on alert messages
* Update the messages from API in frontend
* Currently worked on only Report Card error message
