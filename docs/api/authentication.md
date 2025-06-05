# 📘 API Documentation

Laravel Sanctum API for Quiz App

## 🛡️ Authentication

All endpoints are prefixed with `/api` and require **Bearer Token** authentication via the `Authorization` header.

### 🔐 Example Authorization Header

```http
Authorization: Bearer {{token}}
```

## 🧑‍💼 Auth

### 🔐 POST `/login`

**Description:** Log in an existing user.

#### Request Body

| Field    | Type   | Required | Validation           |
| -------- | ------ | -------- | -------------------- |
| email    | string | ✅     | valid email format   |
| password | string | ✅     | minimum 6 characters |

#### Example

```json
{
    "email": "user@example.com",
    "password": "secret123"
}
```
