# E-Commerce Store

This repository contains an e-commerce application with a frontend built in Next.js and a backend using Node.js + Express.

## How to Run the Project

1. Clone the Repository
git clone https://github.com/Mansi-prasad/Geer-intern-assignment
cd Geer-intern-assignment

2. install dependencies
Frontend (Next.js)
cd frontend
npm install
Backend (Express)
cd ../backend
npm install

3. Set Up Environment Variables
add /frontend/.env.local
and set the NEXT_PUBLIC_API_URL=

4. Run the Development Servers
In two separate terminal windows

For backend
cd backend
npm run server

For frontend
cd frontend
npm run dev


##  Tech Stack Used
Frontend
Next.js (React)
Tailwind CSS

Backend
Node.js
Express.js


## Notes
This project implements a Product Listing Page using Next.js for the frontend and a Node.js + Express server for the backend.

The store supports product listings, product detail page and also support for features like search/filter product.

Product data is stored in a JSON file

Product data is fetched from a separate Node.js + Express backend via API.

Backend includes 3 routes:

GET /api/products – Fetch all products

POST /api/products – Add a new product

DELETE /api/products/:id – Remove product by ID


https://geer-intern-assignment-of5cbgev0-mansi-prasads-projects.vercel.app/

