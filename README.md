# Code Judge Admin Service

## How routing is working in the project
    - /api/v1/problems/ping
    - /api      -> /v1      -> /problems    -> /ping
    - apiRouter -> v1Router -> problemrouter -> problemController -> service layer