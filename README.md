# Portfolio

This is the repository for Software Engineer Rachel Reilly's portfolio site.

## Tech Stack

- React.js
- Next.js
- SASS
- Express.js
- [rss-parser](https://www.npmjs.com/package/rss-parser)

## Codebase 

### /api

This folder contains a simple Express.js API with one endpoint that returns the blog posts from [https://rachelrly.medium.com/](https://rachelrly.medium.com)

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

Scale your recipes with Sliced

[View project](https://sliced.rachanastasia.vercel.app/) ◇ 
[View repository](https://github.com/rachelrly/sliced) ◇ 
[View blog post](https://rachelrly.medium.com/a-tale-of-three-string-parsing-algorithms-ed62a13bc62b)

![](client/assets/scale-down.jpg)

### Spaced Repetition

A fullstack language learning app that uses the spaced repetition technique

[View project](https://spaced-repetition-dun.vercel.app/) ◇ 
[View repository](https://github.com/rachelrly/spaced-repetition-server)

### One Dimensional Chess

A static two-player One Dimensional Chess game

[View project](https://one-d-chess.vercel.app/) ◇ 
[View repository](https://github.com/Rachanastasia/one-dimensional-chess)


### GraphQL Bookshelf

A fullstack GraphQL project that allows users to view my virtual bookshelf and filter books by author, rating, or genre

[View project](https://bookshelf.rachanastasia.vercel.app/) ◇ 
[View repository](https://github.com/rachelrly/graphql-bookshelf-api)


### Loan Calculator

A simple loan calculator that utilizes the `useReducer()` hook to calculate the new value on change rather than on submit

[View project](https://loan-calculator-two.vercel.app/) ◇ 
[View repository](https://github.com/rachelrly/loan-calculator) ◇ 
[View blog post](https://rachelrly.medium.com/usestate-vs-usereducer-9bbfca768f51)



### Init

A social media platform for developers to share their work. Created for the team capstone at Thinkful's Software Engineering Immersion program

[View project](https://init-rachel.vercel.app/) ◇ 
[View repository](https://github.com/Rachanastasia/init) 
