# NodeEnvironment
NodeJS -Express Framework with typescript and Bookshelf for Mysql database.

A Nodejs environment that use typescript code to manage the project as an object oriented programming.
This project use bookshelf for the database connection and Entities mapping to be used as ORM. 

The use of typescript on this section helped for the use of decorations to works like annotations to indicates 
the method types of the api webservices and separates the api by them. ex: "host/ <<post | get>>/ [pathname]"


###### How to use this project
This project does not work on its own.

###### Step 1
We have to install all the dependencies using the following commmand:
```
npm install
```

###### Step 2
Run the following command for build the project:
```
npm run build
```
This command will create a folder named 'build' to turn your typescript files and code to javascript + nodejs code.

###### Step 3
Start your application using the command:
```
npm start 
```

