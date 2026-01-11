# Autosuggestion Search

A simple autosuggestion (typeahead) search built with Angular, RxJS debouncing, and a Node.js + Express API.

## Tech Stack

- Angular (Reactive Forms, RxJS)
- Node.js, Express

## How It Works

Input -> debounceTime -> distinctUntilChanged -> switchMap -> API -> UI

Debouncing and request cancellation are handled on the frontend.

## Run Backend

cd server
npm install
node index.js

Server runs on http://localhost:3000

## API

GET /autosuggest?q=query

## License

None
