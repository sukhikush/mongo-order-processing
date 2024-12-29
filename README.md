# E-Commerce Order

## Project Description

  - This project is a microservice built using Node.js and Express.js designed to process and store e-commerce order data in MongoDB.
  - The microservice ensures atomicity by implementing distributed transaction handling, guaranteeing that all items in an order are processed and saved as a single transaction or rolled back in case of failure.

### Key Features
- **Order Processing:** Handles the creation, retrieval, and storage of e-commerce orders.
- **Item-Level Details:** Each order contains multiple items, with individual order details stored in MongoDB.
- **Atomic Transactions:** Ensures all-or-nothing behavior for order processing, using distributed transaction management with MongoDB sessions.

---

## Folder Structure

```plaintext
ecommerce-order/
├── src/
│   ├── controllers/
│   │   ├── order.js                # Logic for processing order requests
│   ├── models/
│   │   ├── order.js                # Mongoose schema and model for orders
│   │   └── item.js                 # Mongoose schema and model for items
│   ├── services/
│   │   └── order.js                # Implementation of transaction & order placement mechanisms
│   ├── view/
│   │   ├── listItems.html          # Simple HTML view to list all orders
│   │   └── placeOrder.html         # Simple HTML view to place order
├── .env                            # Environment variables for local development
├── .gitignore                      # Git ignore file
├── package.json                    # Node.js dependencies and scripts
├── README.md                       # Project documentation
└── server.js                       # Entry point for the application and Express app configuration
```

## Prerequisites
  Ensure you have the following installed:
  - Node

## Setup

Follow these steps to get the application up and running with Docker Compose:

**Clone the repository**:
```bash
git clone <your-repository-url> cd <your-repository-directory>
```

**Start the application with Docker Compose**:
Run the following command to start application
  ```bash
  npm i
  npm run dev
  ```
  This will install and start the application.
  
**Access the application**:
Open your browser and go to the application URL (`http://localhost:8000`).
   

## ⚠️ Note
  - **I have intentionally pushed the `.env` file to the repository so that the app can be tested.**
  - It has dummy user id and pass

## Endpoints
#### `http://localhost:8000/` 
- Presents and simple HTML which allows to place order
#### `http://localhost:8000/view` 
- HTLM view to view all orders
#### `http://localhost:8000/api/orders`
- To Fetch Orders
- **Method:** GET
- **Response:**
  ```json
  [
    {
        "_id": "676eab7ced98b2c75182e217",
        "customerName": "Suraj",
        "items": [
            {
                "name": "Item 1",
                "price": 20,
                "quantity": 2,
                "_id": "676eab7ced98b2c75182e218"
            }
        ],
        "totalAmount": 40,
        "__v": 0
    }
  ]
  ```
#### `http://localhost:8000/api/orders`
- To place order
- **Method:** POST
- **Response:**
  ```json
  {
    "customerName":"Sukhi",
    "items":[
      {"name":"Apple","price":"1","quantity":"1"}
    ]
  }
  ```

