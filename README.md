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

![register](https://github.com/SanjayKumar-M/NovaSync/assets/73515250/ac6acc19-50d7-4065-9ab2-5859bf2d760a)

![login](https://github.com/SanjayKumar-M/NovaSync/assets/73515250/cbc68271-6b1f-45b0-8ceb-106b94db6050)

![Screenshot from 2024-01-11 02-02-27](https://github.com/SanjayKumar-M/NovaSync/assets/73515250/5670da16-73ea-4557-87b3-229ae8537db0)

## Get email notifications once the agenda is scheduled and at the specified time.

# Load Test Summary with Artillery

## Test Duration
The load test ran for 1 minute and 1 second.

## Request Load
- Total Requests: 1200
- Request Rate: 20 requests per second

## HTTP Response Time
- Minimum Response Time: 64 milliseconds
- Maximum Response Time: 203 milliseconds
- Mean Response Time: 78.7 milliseconds
- Median Response Time: 74.4 milliseconds
- P95 (95th percentile): 106.7 milliseconds
- P99 (99th percentile): 133 milliseconds

## HTTP Status Codes
- 200 OK: 600 requests
- 201 Created: 1 request
- 500 Internal Server Error: 599 requests


## Enjoy a well-organized schedule with NovaSync!

