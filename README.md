# CodeAlpha_EventRegistrationSystem

## Project Overview

This project is an Event Registration System developed using Node.js and Express.js as part of the CodeAlpha Backend Development Internship.

The system allows users to:

- Create events
- View all events
- Register for events

All data is stored using JSON files for simplicity.

---

## Features

- Create new events
- View available events
- Register users for events
- Store event and registration data
- REST API-based implementation

---

## Technologies Used

- Node.js
- Express.js
- File System (fs)

---

## Project Structure

```
CodeAlpha_EventRegistrationSystem/
│
├── node_modules/
├── server.js
├── events.json
├── registrations.json
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd CodeAlpha_EventRegistrationSystem
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the server using:

```bash
node server.js
```

Server runs at:

```text
http://localhost:4000
```

---

## API Endpoints

### Home Route

```http
GET /
```

Response:

```text
Event Registration System Running
```

---

### Create Event

```http
POST /events
```

Request Body:

```json
{
  "name": "Tech Fest",
  "date": "2026-07-01"
}
```

Response:

```json
{
  "id": 1781788568874,
  "name": "Tech Fest",
  "date": "2026-07-01"
}
```

---

### View Events

```http
GET /events
```

Response:

```json
[
  {
    "id": 1781788568874,
    "name": "Tech Fest",
    "date": "2026-07-01"
  }
]
```

---

### Register for Event

```http
POST /register
```

Request Body:

```json
{
  "eventId": 1781788568874,
  "userName": "Shivani"
}
```

Response:

```json
{
  "message": "Registration Successful",
  "registration": {
    "eventId": 1781788568874,
    "userName": "Shivani"
  }
}
```

---

## Sample Output

Event Created Successfully:

```json
{
  "id": 1781788568874,
  "name": "Tech Fest",
  "date": "2026-07-01"
}
```

Registration Successful:

```json
{
  "message": "Registration Successful",
  "registration": {
    "eventId": 1781788568874,
    "userName": "Shivani"
  }
}
```

---

## Internship Information

- Internship: CodeAlpha Backend Development Internship
- Task: Event Registration System

---

## Author

**Shivani Gaddala**  
B.Tech CSE
