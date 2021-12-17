# HydraX school management system

This is a school management project. The goal is to have a central portal system where teachers, parents and learners will come together.
The system will allow schools to manage all their learners' and learners' parents' information.
It will allow teachers to upload learning content, tests, assignments, announcements etc which can be consumed by learners using the system.
Parents will have real time, up to date view of their child's academic progress from attendance, disciplinary merit/demerit points, marks etc.

The frontend (client folder) is built in Vue.js.
The backend (server folder) is built with Node.js (TypeScript).

# Pre-requisites
# Install quasar
- You will need to install the quasar-cli.

```bash
# Node.js >=12.22.1 is required.

$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

Visit their website for more info:
- Install the quasar-cli [quasar](https://quasar.dev/quasar-cli/installation)

# Install Node.js
- Install [Node.js](https://nodejs.org/en/) Make sure to install even versions of node. Do not install uneven versions i.e. 13, 15, etc or this could impact quasar above.

# Getting started
* The client folder uses YARN and the server folder uses NPM.


- Install CLIENT dependencies
```bash
cd client
yarn install
```
- Build and run the CLIENT project
```bash
quasar dev
```
```
  A browser window should open automatically. If it doesn't then manually open it and navigate to `http://localhost:8080`
```

- Install SERVER dependencies
```bash
cd server
npm install
```
- Build and run the SERVER project
```bash
npm run start:dev
```

## The database is hosted on the cloud and the neccesary db configs have been done so you don't have to install any database locally ;)

## CLIENT Project Structure
The folder structure of the client is explained below:

| Name               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| **dist**           | Contains the distributable (or output) from your TypeScript build. |
| **node_modules**   | Contains all  npm dependencies                                     |
| **src**            | Contains  source code that will be compiled to the dist dir        |
| **src/assets**     | Asset files (images, static media etc)                             |
| **src/boot**       | files that will be executed by quasar on boot up                   |
| **src/components** | Vue components                                                     |
| **src/css**        | .scss files to style the ui. app.scss is the global/main one.      |
| **src/layout**     | contains main vue layout component                                 |
| **src/pages**      | base Vue components                                                |
| **src/router**     | Contains Vue router files configurations.                          |
| **src/statics**    | Static files                                                       |
| **src/store**      | Vuex store files for global app state management                   |

## SERVER Project Structure
The folder structure of the client is explained below:

| Name                | Description                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **dist**            | Contains the distributable (or output) from your TypeScript build.                        |
| **node_modules**    | Contains all  npm dependencies                                                            |
| **src**             | Contains  source code that will be compiled to the dist dir                               |
| **src/controllers** | TypeScript source files that handle incoming client REST requests                         |
| **src/routes**      | TypeScript source files that handle routing endpoints to controllers                      |
| **routes**          | Temporary folder for incoming documents. This will eventually be an S3 server on amazon   |
| **util**            | Folder containing build script. Build script is executed when 'npm run build' is executed |