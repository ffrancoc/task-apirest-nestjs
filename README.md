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
- [ ] updateTasks - PUT
- [x] removeTask - DELETE
- [ ] removeTasks - DELETE

## RoadMap

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Authentication and authorization (JWT, roles)
- [ ] User and session management
- [ ] Pagination and sorting for endpoints
- [ ] API documentation with Swagger/OpenAPI
- [ ] Unit and integration testing

## Project setup

```bash
$ npm install
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
