# Cointab

## Problem Statement :-

Create a simple 2-page website using Node.js and SQL database.

## Synopsis :-

Create a simple 2-Page website using Node.js and SQL database, Page 1 will have three
buttons namely Fetch Users, Delete Users, User Details, on clicking the Fetch Users button the
application should fetch data from the (https://randomuser.me/) api and store it in a table of any
name in the database, the data fetch should be in bulk for e.g., if the api returns a single record
then the application should be such a way that it will fetch around 50 or 100 records on a single
click.
On clicking on the Delete Users button the application should remove all the entries in the
database. On clicking on the User Details the application should open the Page 2 where it will
display the data in the database as a table view with pagination feature as well as some filter
option to filter the data in the table

## Home Page :-

Page will have three buttons namely Fetch Users, Delete Users, User Details.

1. On clicking the Fetch Users button the application should fetch data in bulk around 50 – 100 records from the (https://randomuser.me/) api and store it in a table of any name in the database.
2. The Delete Users button the application should remove all the entries in the database.
3. On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.

## User Detail Page :-

1. Page will have a table view with 10 records with necessary column, Pagination and Filter feature.

2. Pagination should allow the user to go to the next page, previous page or any page number.

## Validations :-

1. The Fetch Users button click should throw an error alert if already some data fetch is going on.
2. The Delete Users button click should throw an error alert before deleting all the records.
3. The Users Details button click should take the user to Page 2.

## Backend:- https://shy-red-kitten-wig.cyclic.app/check

## Deplyment link to view (https://cointabbe.netlify.app/)

<br>

## Tech Stack:

- Node
- Express
- MongoDB
- ReactJS

## Features:

- The Fetch Users button throws an error alert if already some data fetch is going on.
- The Delete Users button throws an error alert before deleting all the records.
- The Users Details button take the user to Page 2.
- Search user by first or last name.
- Sort based on name and age.
- Filter based on gender.

<br>

![Screenshot (103)](https://user-images.githubusercontent.com/97456472/209437784-8bc26264-721d-41a5-bf1f-c8fa24525b1d.png)

![Screenshot (104)](https://user-images.githubusercontent.com/97456472/209437785-21c739ea-6cf4-4844-a356-a46d1287d918.png)

<br>
