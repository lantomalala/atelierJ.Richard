
# AtelierJ.richard - E-commerce Backend

This is the backend for AtelierJ.richard, an e-commerce platform built using Express.js and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Lien de test](https://atelierj-richard-back.onrender.com/panierPersonalise)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/AtelierJ.richard.git
    cd AtelierJ.richard
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

- To start the server in development mode with nodemon:
    ```sh
    npm run dev
    ```

- To run tests:
    ```sh
    npm test
    ```

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID

### Orders

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get a single order by ID
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update an order by ID
- `DELETE /api/orders/:id` - Delete an order by ID

## Environment Variables

The application requires the following environment variables to be set:

- `PORT` - The port on which the server will run
- `MONGO_URI` - The URI for connecting to MongoDB
- `JWT_SECRET` - Secret key for JWT authentication

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
