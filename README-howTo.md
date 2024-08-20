# Getting Started

- Clone this repo:

```
git clone https://github.com/Erikang20/Kanban-task-management-web-app.git
```

You have to run the Server and the Client at the same time. Make sure you install all the dependencies:

`npm install`

## From the Server folder:

`npm start`

## From the Client folder:

`npm run dev`

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

The frontend is in the client folder and the backend in the server folder

```
|---FRONTEND APP
    |--client
|--BACKEND APP
    |--server
```

### Branch naming convention

To create a new branch, we use this pattern `git branch <category/description-in-kebab-case>`
example `feature/button-component`

https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4
