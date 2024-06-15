# Sports-Facility-Booking-Platform

## Project Name
Sports-Facility-Booking-Platform

## Live URL
[Live URL](http://your-live-url.com)

## Table of Contents
- [Project Name](#Sports-Facility-Booking-Platform)
- [Live URL](#live-url)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Technology Used](#technology-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
- [API Documentation](#api-documentation)
  - [POST /api/auth/signup](#post-apiauthsignup)
  - [POST /api/auth/login](#post-apiauthlogin)
- [License](#license)
- [Contributing](#contributing)

## Features
- User registration with hashed passwords
- User login with JWT authentication
- Middleware for authentication
- Error handling
- User can booking sports facilities
- admin can manage facilities

## Technology Used
- Node.js
- Express
- Mongoose
- TypeScript
- bcryptjs
- jsonwebtoken

## Setup Instructions

### Prerequisites
- Node.js (v12.x or higher)
- npm
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/express-mongoose-ts-auth.git
    cd express-mongoose-ts-auth
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Start MongoDB (if it's not running already):
    ```bash
    mongod
    ```

2. Start the development server:
    ```bash
    npm run dev
    ```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

## Usage

### User Registration
- **Route**: `POST /api/auth/signup`
- **Request Body**:
    ```json
    {
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "password": "programming-hero",
      "phone": "01322901105",
      "role": "admin",
      "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User registered successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```

### User Login
- **Route**: `POST /api/auth/login`
- **Request Body**:
    ```json
    {
      "email": "web@programming-hero.com",
      "password": "programming-hero"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User logged in successfully",
      "token": "JWT_TOKEN",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```

## API Documentation

### POST /api/auth/signup
- Registers a new user.
- **Request Body**:
    ```json
    {
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "password": "programming-hero",
      "phone": "01322901105",
      "role": "admin",
      "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User registered successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```

### POST /api/auth/login
- Logs in a user and returns a JWT token.
- **Request Body**:
    ```json
    {
      "email": "web@programming-hero.com",
      "password": "programming-hero"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User logged in successfully",
      "token": "JWT_TOKEN",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```

## License


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
