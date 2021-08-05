# Rachel Reilly |  Software Engineer

This is the repository for Rachel Reilly's portfolio site.

## Tech Stack

- React.js
- Next.js
- SASS
- Express.js
- [rss-parser](https://www.npmjs.com/package/rss-parser)

## Codebase 

### /api

This folder contains a simple Express.js API with one endpoint that returns the blog posts from [rachelrly.medium.com](https://rachelrly.medium.com)

#### index.js

Sets up Express.js app

#### getMediumArticles.js

Fetches and parses the RSS feed, preparing the blog posts for the client

### /client

#### /pages

Contains the layout for the routes on the app: `/`, `/blog`, `/projects`

#### /components

Contains the components that are used in `/pages` and elsewhere. In each folder, the default of the `index.js` is a stand-alone component, and the child components are not to be used outside their folder. 

##### /Banner

Contains the code for the animation on the home page

##### /Projects

Contains the content displayed in the `/projects` route

##### /Blog

Contains the content displayed in the `/blog` route

##### Card.js

A HOC that wraps the list items for projects and blogs

##### layout.js

A HOC that wraps the layout of the whole app

#### /styles

##### styles.sass

Imports all of the SASS partials into one file

##### _globals.sass

Holds all of the style variables for the project

##### _mixins.sass

Contains mixins for layout and brand style

##### _blog.sass, _project.sass, _about.sass

Contains the styles for their respective sections

## Project Overview

### Sliced

A recipe app that scales up and down ingredients.

![](client/assets/slice-down.png)

[View project](https://sliced.rachanastasia.vercel.app/) ◇ 
[View client repository](https://github.com/Rachanastasia/sliced-client) ◇ 
[View server repository](https://github.com/Rachanastasia/sliced-API) ◇ 
[View Medium article](https://rachelrly.medium.com/a-tale-of-three-string-parsing-algorithms-ed62a13bc62b)

### Spaced Repetition

A language learning app that uses the spaced repetition technique

[View project](https://spaced-repetition-dun.vercel.app/) ◇ 
[View client repository](https://github.com/Rachanastasia/spaced-repetition-client) ◇ 
[View server repository](https://github.com/Rachanastasia/spaced-repetition-server)

### One Dimensional Chess

A two-player One Dimensional Chess game

[View project](https://one-d-chess.vercel.app/) ◇ 
[View repository](https://github.com/Rachanastasia/one-dimensional-chess)


### GraphQL Bookshelf

A full stack GraphQL project that allows users to filter books by author, rating, or genre

[View project](https://bookshelf.rachanastasia.vercel.app/) ◇ 
[View client repository](https://github.com/Rachanastasia/graphql-bookshelf-client) ◇ 
[View server repository](https://github.com/Rachanastasia/graphql-bookshelf-api)


### Loan Calculator

[View project](https://loan-calculator-two.vercel.app/) ◇ 
[View repository](https://github.com/Rachanastasia/loan-calculator) ◇ 
[View Medium article](https://rachelrly.medium.com/usestate-vs-usereducer-9bbfca768f51)



### Init

A social media platform for developers to share their work

[View project](https://init-rachel.vercel.app/) ◇ 
[View client repository](https://github.com/Rachanastasia/init) ◇ 
[View server repository](https://github.com/Rachanastasia/init-api)
