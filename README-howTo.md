# But first

1. Clone this repo:

    ``` bash
    git clone https://github.com/Erikang20/Kanban-task-management-web-app.git
    ```

2. The frontend is in the client folder and the backend in the server folder

## Getting Started

1. `cd` into the client directory
2. run `npm install or yarn install`
3. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

``` file
|---FRONTEND APP
    |--client
|--BACKEND APP
    |--server
```

### Branch naming convention

To create a new branch, we use this pattern `git branch <category/description-in-kebab-case>`
example `feature/button-component`

[SitedArticle](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
