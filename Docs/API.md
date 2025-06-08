# Assignment API Documentation

**Base URL:** `http://localhost:3000/api/v1`

## Task-1: Endpoints
---
### 1. Upload File

**Endpoint:** `POST /file/upload`

**Description:** Uploads a CSV file to the server.

**Headers:**

* `Content-Type: multipart/form-data`

**Form Data:**

| Field | Type | Required | Description            |
| ----- | ---- | -------- | ---------------------- |
| file  | file | Yes      | The CSV file to upload |

**Example Request:**

```bash
curl --location 'http://localhost:3000/api/v1/file/upload' \
--form 'file=@"data-sheet.csv"'
```

**Response:**

```json
{
    "status": "success",
    "message": "File uploaded successfully",
    "data": {
        "filename": "data-sheet.csv",
        "upload_time": "2025-06-08T11:00:00Z"
    }
}
```
---

### 2. Search Policy by Username

**Endpoint:** `GET /policy/search/:username`

**Description:** Searches and returns policy details for a specific user by their name.

**Parameters:**

| Parameter | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| username  | string | Yes      | Full name of the user |

**Example Request:**

```bash
curl --location 'http://localhost:3000/api/v1/policy/search/Lura Lucca'
```

**Response:**

```json
{
    "code": 200,
    "status": "Success",
    "data": [
        {
            "_id": "6844843ef30f7b0e17d6498e",
            "policy_number": "YEEX9MOIBU7X",
            "account": {
                "_id": "6844843ef30f7b0e17d6498a",
                "name": "Lura Lucca & Owen Dodson",
                "type": "Commercial"
            },
            "agency_id": "",
            "agent": {
                "_id": "6844843ef30f7b0e17d64989",
                "name": "Alex Watson"
            },
            "applicant_id": "",
            "category": {
                "_id": "6844843ef30f7b0e17d6498d",
                "name": "Commercial Auto"
            },
            "company": {
                "_id": "6844843ef30f7b0e17d6498c",
                "name": "Integon Gen Ins Corp"
            },
            "createdAt": "2025-06-07T18:26:06.574Z",
            "csr": "Tami Ellison",
            "end_date": "2019-11-02T00:00:00.000Z",
            "has_active_client_policy": "",
            "policy_mode": "12",
            "policy_type": "Single",
            "premium_amount": 1180.83,
            "premium_amount_written": "0",
            "producer": "Brandie Placencia",
            "start_date": "2018-11-02T00:00:00.000Z",
            "updatedAt": "2025-06-08T04:54:44.507Z",
            "user": {
                "_id": "6844843ef30f7b0e17d6498b",
                "email": "madler@yahoo.ca",
                "address": "170 MATTHIAS CT",
                "first_name": "Lura Lucca",
                "user_type": "Active Client"
            }
        }
    ]
}
```
---

### 3. Get Policies Grouped by Each User

**Endpoint:** `GET /policy/by-each-user`

**Description:** Retrieves a grouped list of policies by user, showing all policies under each user.

**Example Request:**

```bash
curl --location 'http://localhost:3000/api/v1/policy/by-each-user'
```

**Response:**

```json
{
    "code": 200,
    "status": "Success",
    "data": [
        {
            "total_policies": 3,
            "total_premium": 1675.19,
            "user_id": "6844844af30f7b0e17d6545c",
            "user_name": "Dennise Laprade"
        },
        {
            "total_policies": 3,
            "total_premium": 11111.07,
            "user_id": "68448441f30f7b0e17d64c75",
            "user_name": "Minh Lovering"
        },
        {
            "total_policies": 2,
            "total_premium": 24630,
            "user_id": "68448443f30f7b0e17d64dc4",
            "user_name": "Renea Thorne"
        },
        {
            "total_policies": 2,
            "total_premium": 1570,
            "user_id": "6844844bf30f7b0e17d655e7",
            "user_name": "Stacie Abraham"
        },
        {
            "total_policies": 2,
            "total_premium": 920.22,
            "user_id": "68448444f30f7b0e17d64f77",
            "user_name": "Rosette Copley"
        },
        {
            "total_policies": 2,
            "total_premium": 3302,
            "user_id": "68448448f30f7b0e17d65334",
            "user_name": "Brandi Inge"
        },
        ...
    ]
}
```

## Task-2: Endpoints

### 1. Add New Message

**Endpoint:** `POST /message/add`

**Description:** Creates a new message with specified day and time.

**Headers:**
- `Content-Type: application/json`

**Request Body:**
```json
{
    "message": "string",
    "day": "string",
    "time": "string"
}
```

**Parameters:**
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| message   | string | Yes      | The message content |
| day       | string | Yes      | Day of the week (e.g., "Monday", "Tuesday") |
| time      | string | Yes      | Time in HH:MM format (e.g., "10:45") |

**Example Request:**
```bash
curl --location 'http://localhost:3000/api/v1/message/add' \
--header 'Content-Type: application/json' \
--data '{
    "message": "Hi",
    "day": "Monday",
    "time": "10:45"
}'
```

**Response:**
```json
{
    "status": "success",
    "message": "Message added successfully",
    "data": {
        "id": "12345",
        "message": "Hi",
        "day": "Monday",
        "time": "10:45",
        "created_at": "2025-06-08T10:45:00Z"
    }
}
```
---
### 2. List All Messages

**Endpoint:** `GET /message/list`

**Description:** Retrieves a list of all stored messages.

**Example Request:**

```bash
curl --location 'http://localhost:3000/api/v1/message/list'
```

**Response:**

```json
{
    "code": 200,
    "status": "Success",
    "data": [
        {
            "_id": "68451ebae65c557481de533d",
            "message": "Hello, World",
            "day": "Monday",
            "time": "10:45",
            "__v": 0
        },
        {
            "_id": "68452df676c0a7ad077ef82b",
            "message": "Today is sunday",
            "day": "Monday",
            "time": "10:45",
            "__v": 0
        }
    ]
}
```