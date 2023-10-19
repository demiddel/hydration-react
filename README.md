# Hydration React

This repo contains examples of how React uses hydration and rendering. This is purely for educational purposes. The ideal state is to have a very fast and optimal React application. The examples will be very simple, the concept is more important. Hydration is the concept of when something got rendered on the server side, that the events will be taken over on the client side.

## Getting Started

There are 2 folders, related to the approach being SSR or CSR.

- client
- server

## Prerequisites

You have worked with React or know what it is. If not, please check [React](https://react.dev/).

## Used React features

React supports both client and server side rendering. The examples will use both.

### Client API

- createRoot (no hydration support, added for comparison)
- hydrateRoot

### Server API

- renderToStaticMarkup (no hydration support, added for comparison)
- renderToString

- renderToPipeableStream
- renderToReadableStream

## Scripts

There are numourous scripts to run the application. The most important ones are:

### No hydration

- `npm run start:csr` - This will run a basic client-side-rendered example.
- `npm run start:ssg` - This will run a simple static site generated example.

### Hydration

- `npm run start:hydrate-1` - This will run a basic server-side-rendered example
- `npm run start:hydrate-2` - This will run the renderToPipeableStream example
- `npm run start:hydrate-3` - This will run the renderToReadableStream example

## Disclaimer

Most of these use examples are not something you will be doing yourself, this is a peek at what frameworks like Remix, NextJS, Gatsby, etc. are doing under the hood.

## Reach out

If you have any questions, create an issue or reach out to me on [LinkedIn](https://linkedin.com/martin-demiddel).
