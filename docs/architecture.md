# Architecture

## Top Level

The program is divided in two layers: Logic layer and Interfaces Layer.

- **Logic layer** (`/data` directory) has the logic of the program. They are just functions written in JavaScript. These functions could call external databases, external services and so on.
- **Interfaces layer** (`/web`) are all ways that a user can interact with the program. Currently, a user can interact via HTTP and WebSocket interfaces. All the code included doesn't have any logic or storage. They should call the logic layer in order to *do actual things*.

![](http://www.plantuml.com/plantuml/png/NOwnJiKm34LtVuMLlNn3HqOadiI0EhY9WT0chX97VHBglwFd0TAEzzp4zunLgMXBAyIiN3x8CpxVRYzTVEFvLVp22h2HN-YJqUqyE_m1H2zfaynPqSKS-FxqNHrIHGkNNlvA0RGL70PyjwSJuFyG6fO7iz9oaQPSpYp545RUgV2PSmwRnAnrWgEp3gHqrQQcNu3z5xlmm1EWQNJWW95pQ6dz1G00)
