# 🎯 User Quiz API

All routes in this section are prefixed with `/api` and require Bearer Token authentication.

```http
Authorization: Bearer {{token}}
```

##  Quizzes

### 🔐 GET `/user/quiz-assignments`

**Description:** Get the list of quiz assignments for the authenticated user.

### ✅ Success Response

```json
{
    "data": [
        {
            "id": 1,
            "score": 0,
            "completed_at": null,
            "quiz": {
                "id": 1,
                "title": "Basic PHP Quiz",
                "description": "Test your fundamental PHP knowledge.",
                "questions_count": 10,
                "category": {
                    "id": 1,
                    "name": "Programming"
                }
            }
        }
    ]
}
```

##  Questions

### ❓ GET `/api/user/quiz-assignments/{id}/questions`

**Description:** Get questions for a specific quiz assignment.

#### URL Parameters

| Param | Type | Required | Description        |
| ----- | ---- | -------- | ------------------ |
| id    | int  | ✅       | Quiz Assignment ID |

### ✅ Success Response

```json
{
  "data": [
    {
      "id": 1,
      "score": 0,
      "completed_at": null,
      "quiz": {
        "id": 1,
        "title": "Basic PHP Quiz",
        "description": "Test your fundamental PHP knowledge.",
        "questions": [
          {
            "id": 1,
            "question_text": "What does PHP stand for?",
            "choices": [
              { "id": 1, "choice_text": "Personal Home Page" },
              { "id": 2, "choice_text": "Private Hypertext Processor" },
              { "id": 3, "choice_text": "Professional Home Program" },
              { "id": 4, "choice_text": "Programmer Hosted Platform" }
            ]
          },
          ...
        ]
      }
    }
  ]
}

```

## Submit Answers

### 🔐 POST /api/user/quiz-assignments/{id}/answers

**Description:** Submit answers for a quiz.

#### URL Parameters

| Param | Type | Required | Description        |
| ----- | ---- | -------- | ------------------ |
| id    | int  | ✅       | Quiz Assignment ID |

#### Request Body

```json
{
    "answers": [
        { "question_id": 1, "choice_id": 5 },
        { "question_id": 2, "choice_id": 6 }
    ]
}
```

### ✅ Success Response

```json
{
    "score": 10
}
```

## Quiz Results

### 📄 GET `/api/user/quiz-assignments/{id}/results`

**Description:** Submit answers for a quiz.

#### URL Parameters

| Param | Type | Required | Description        |
| ----- | ---- | -------- | ------------------ |
| id    | int  | ✅       | Quiz Assignment ID |

### ✅ Success Response

```json
{
  "data": {
    "id": 1,
    "score": 0,
    "completed_at": null,
    "quiz": {
      "id": 1,
      "title": "Basic PHP Quiz",
      "description": "Test your fundamental PHP knowledge.",
      "questions": [
        {
          "id": 1,
          "question_text": "What does PHP stand for?",
          "explanation": null,
          "choices": [
            { "id": 1, "choice_text": "Personal Home Page", "is_correct": true },
            { "id": 2, "choice_text": "Private Hypertext Processor", "is_correct": false },
            ...
          ]
        },
        {
          "id": 2,
          "question_text": "Which of the following is a valid PHP variable?",
          "explanation": null,
          "choices": [
            { "id": 5, "choice_text": "var name", "is_correct": false },
            { "id": 6, "choice_text": "$name", "is_correct": true },
            ...
          ]
        },
        ...
      ]
    }
  }
}

```
