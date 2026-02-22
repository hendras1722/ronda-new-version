import Elysia from "elysia";

export default () => new Elysia()
  .get('/hello-coy', () => ({ message: 'Hello world!' })) 