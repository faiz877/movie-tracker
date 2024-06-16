# Movie Tracker API

The Movie Tracker API allows users to register, login, authenticate using JWT tokens, and perform CRUD operations to manage movies they have watched. Below are the main features and endpoints available:

## Features

- **User Authentication**: Register and login with JWT tokens.
- **Secure Password Handling**: Passwords are hashed using bcrypt for security.
- **Movie Management**: CRUD operations for managing movies:
  - Create a new movie record.
  - Retrieve all movies stored by the user.
  - Retrieve a specific movie by its title.
  - Update details of a movie.
  - Delete a movie.

## Endpoints

### User Management

- **POST `/api/register`**: Register a new user with username, email, and password.
- **POST `/api/login`**: Login with existing credentials and receive a JWT token.

### Movie Management

- **POST `/api/movies`**: Create a new movie record for the authenticated user.
- **GET `/api/movies`**: Retrieve all movies stored by the authenticated user.
- **GET `/api/movies/:title`**: Retrieve a specific movie by its title.
- **PUT `/api/movies/:title`**: Update details of a specific movie by its title.
- **DELETE `/api/movies/:title`**: Delete a specific movie by its title.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your suggested changes.
