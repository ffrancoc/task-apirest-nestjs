## Description

This project is a simple REST API built with NestJS.  
It is designed as a practice project to learn and experiment with backend development concepts, including controllers, services, DTO validation, and RESTful design.  
Although the API is minimal (focused on task management), it serves as a foundation to later integrate more advanced features such as database persistence, authentication, and deployment workflows.

## Implemented Methods:

- [x] findAllTasks - GET
- [x] findTasksByFilters - GET
- [x] findOneTask - GET
- [x] createTask - POST
- [x] createTasks - POST
- [x] updateTask - PUT
- [x] updateTasks - PUT
- [x] removeTask - DELETE
- [x] removeTasks - DELETE

## RoadMap

- [x] Database integration (PostgreSQL)
- [ ] Authentication and authorization (JWT, roles)
- [ ] User and session management
- [ ] Pagination and sorting for endpoints
- [ ] API documentation with Swagger/OpenAPI
- [ ] Unit and integration testing

## Branchs Projects

This repository has two main branches:

- **main**  
  Implements task management using in-memory arrays.  
  Useful for quick testing, prototyping, and understanding basic CRUD logic without a database.

- **feature/database**  
  Implements persistence with **TypeORM** and **PostgreSQL (pg)**.  
  Provides full CRUD operations with migrations, validations, and a production-ready setup.

## Database Configuration

.env file configuration

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=password
DB_NAME=tasks
```

## Project setup

```bash
$ npm install
$ npm install class-transformer class-validator
$ npm install @nestjs/typeorm typeorm pg
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Francisco Curín](https://github.com/ffrancoc)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
