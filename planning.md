# Dev notes

## Data Models

### User Schema

| Field     | Type     | Values              |
| :-------- | :------- | :------------------ |
| \_id      | Mongo ID | Generated           |
| firstName | String   | Letters Only        |
| lastName  | String   | Letters Only        |
| username  | String   | Alpha-numeric       |
| email     | String   | Email formatted     |
| role      | String   | "member" or "admin" |

### Message Schema

| Field     | Type     | Values           |
| :-------- | :------- | :--------------- |
| \_id      | Mongo ID | Generated        |
| title     | String   | Sanitized String |
| message   | String   | Sanitized String |
| createdAt | Date     | Generated        |
| author    | Mongo ID | Author's ID      |
