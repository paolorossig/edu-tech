# EduTECH

[EduTech](https://edutech.vercel.app) is a MERN Full Stack project developed in the Make it Real Bootcamp.

## Stack

This project is structured in a monorepo enabled by yarn workspaces with the following stack:

#### Frontend:

![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/-Vite-black?style=flat-square&logo=vite)
![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux)
![Tailwindcss](https://img.shields.io/badge/-Tailwindcss-black?style=flat-square&logo=Tailwindcss)

#### Backend:

![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)
![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=Express)
![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=MongoDB)

## Requests Flow

```mermaid
flowchart LR
A[HTTP Endpoint] -- Middleware --> B[Controller]
B[Controller] --> C[Service]
C[Service] --> D[(Database)]
```

## Deployment

- Client: Vercel
- Server: Heroku

## Development

```bash
# Clone the repository
git clone https://github.com/paolorossig/edu-tech.git
cd edu-tech
# Create your own feature branch
git checkout dev
git checkout -b feat/NAME
yarn install
# Then open a PR explaining your contribution
```
