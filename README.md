# UofT SCS Full-Stack Web Development Boot Camp Project #9: Node.js/Express.js Note Taker

A Node.js/Express.js application that can be used to write, save, and delete notes

# [LIVE LINK](https://notetakerapps.herokuapp.com/)

![](screenShot.PNG)

## Table of Contents

- [UofT SCS Full-Stack Web Development Boot Camp Project #9: Node.js/Express.js Note Taker](#uoft-scs-full-stack-web-development-boot-camp-project-9-nodejsexpressjs-note-taker)
- [LIVE LINK](#live-link)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Business Context](#business-context)
  - [Minimum Requirements](#minimum-requirements)
  - [Development Strategy](#development-strategy)
  - [Built With](#built-with)



## About

Note Take is for users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.



## Business Context

```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Minimum Requirements

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Development Strategy

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

Initial directory structure:

```
db/            // json files for databases
public/        // rendered output
templates/     // HTML template(s)
server.js      // Server app
```

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript Backend Runtime Environment
- [Express.js](http://expressjs.com/) - Web framework for Node.js 
