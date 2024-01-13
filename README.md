# NovaSync schedule your agenda and set reminder at ease

TECH STACK USED:

1. Node js
2. Express js
3. Postgre SQL
4. Sequelize ORM
5. Passport Js
6. Docker

Steps to use this api

1. Clone to your local machine
2. npm  install to install all the dependencies
3. Install posgtres and use all the necessary env variables to set your project fine
4. Run  it in postman or thunderclient to test,
Detailed steps given below

REGISTRATION AND LOGIN

1.Endpoint localhost:3000/user/register  [POST]

Requset body example:
{
    "username": "Naruto",
    "email": "Naruto@gmail.com",
    "password": "uzumaki"
}

2. Login now

Endpoint localhost:3000/user/login   [POST]

Requset body example:
{
    "email": "Naruto@gmail.com",
    "password": "uzumaki"
}

->JWT Token will be generated
-> Paste it in Bearer token under auth header to authourize

Youwill get email notification once you signed up or logged in again!

3. Create reminder

Endpoint localhost:3000/task  [POST]

Request body example:
{
    "reminder" : "Read Rust Docs",
    "description" : "learn rust to live in solana ecosystem",
     "date": "2024-01-26",
  "time": "18:00"
}

You will get an email notification once you created the reminder and again to the time you set

3. Schedule agenda

Endpoint localhost:3000/task  [POST]

Request body example:

{
 "agenda": "Attend Ethindia Hackathon",
  "mode": "offline",
  "location": "Bangalore",
  "description": "Sanjay is going to attend Ethindia Hackathon world's biggest ethereum hackathon",
  "date": "2024-01-26",
  "time": "18:00"
 
}

4. Delete reminder/agenda

Endpoint localhost:3000/task  [DELETE]

Request body example:

{
 "agenda": "Attend Ethindia Hackathon"
                or

  "reminder" : "Read Rust Docs"
}

You will get an email notification once you scheduled the agenda and again to the time you set




