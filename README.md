# Angular-Book-App

# Getting Started

To get started with the app, follow these simple steps:

Clone the repository: git clone https://github.com/Harishh07/Angular-Book-App.git <br>
Install dependencies: npm install <br>
# Dependencies
# Bootstrap: <br>
npm install @ng-bootstrap/ng-bootstrap <br>
<br>
# Font Awesome
npm install @fortawesome/fontawesome-svg-core <br>
npm install @fortawesome/free-brands-svg-icons <br>
npm install @fortawesome/free-regular-svg-icons <br>
npm install @fortawesome/free-solid-svg-icons <br>
npm install @fortawesome/angular-fontawesome <br>
<br>

# Nodemon
npm install -g nodemon

# Start the development server [Front End]
Navigate into the folder <br>
ng serve <br>
Visit http://localhost:4200 in your browser

# Start the development server [Back End]
Navigate into the folder <br>
Navigate into src folder - cd src <br>
nodemon app.js

# Running the tests
To run the tests, use the following command:

ng test

# Deployment
To deploy the app, use the following command:

ng build --prod

# API Testing
Run the application and open Postman <br>
URL for the Backend - http://localhost:3000/ <br>
1.Display all books (GET) - http://localhost:3000/ <br>
2. GET a book using it's BOOK ID (GET) - http://localhost:3000/id <br>
3. Insert a new Book to the DATABASE (POST) - http://localhost:3000/ <br>
4. Delete a book by its ID (DELETE) - http://localhost:3000/delete/id <br>
5. Update the Book using its ID (PUT) - http://localhost:3000/update/id <br>
6. Deleting all records from the Database (DELETE) - http://localhost:3000/del <br>

# Built With
Angular - The front-end framework <br>
NPM - Package manager <br>
HTML <br>
CSS <br>
TypeScript

