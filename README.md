# NovaSync - Streamlining Your Schedule with Ease

## Tech Stack:

1. **Node.js**
2. **Express.js**
3. **PostgreSQL**
4. **Sequelize ORM**
5. **Passport.js**
6. **Docker**

## Getting Started:

### 1. Clone the Repository:

### 2. Install Dependencies:


### 3. Set Up PostgreSQL:
- Install PostgreSQL and configure necessary environment variables for your project.

### 4. Testing with Postman/ThunderClient:
- Run the API and test using Postman or ThunderClient.

## Registration and Login:

### 1. Register User:
- **Endpoint:** `localhost:3000/user/register` [POST]
- **Request Body Example:**
  ```json
  {
      "username": "Naruto",
      "email": "Naruto@gmail.com",
      "password": "uzumaki"
  }
  ```

### 2. Login:
- **Endpoint:** `localhost:3000/user/login` [POST]
- **Request Body Example:**
  ```json
  {
      "email": "Naruto@gmail.com",
      "password": "uzumaki"
  }
  ```
- JWT Token will be generated.
- Use the token in the Bearer token under the auth header for authorization.

### 3. Email Notifications:
- Receive email notifications upon successful registration or login.

## Create Reminder:

- **Endpoint:** `localhost:3000/task` [POST]
- **Request Body Example:**
```json
{
   "reminder": "Read Rust Docs",
   "description": "Learn Rust to thrive in the Solana ecosystem",
   "date": "2024-01-26",
   "time": "18:00"
}
```

## Schedule Agenda:

- **Endpoint:** `localhost:3000/task` [POST]
- **Request Body Example:**
```json
{
    "agenda": "Attend Ethindia Hackathon",
    "mode": "offline",
    "location": "Bangalore",
    "description": "Sanjay is going to attend Ethindia Hackathon, the world's biggest Ethereum hackathon",
    "date": "2024-01-26",
    "time": "18:00"
}
```

## Delete Agenda/reminder:

- **Endpoint:** `localhost:3000/task` [DELETE]
- **Request Body Example:**
```json
{
    "agenda": "Attend Ethindia Hackathon"
}
```

or

```json
{
    "reminder": "Read Rust Docs"
}
```

## Get email notifications once the agenda is scheduled and at the specified time.
## Enjoy a well-organized schedule with NovaSync!

