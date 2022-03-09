# github-repo-tracker

## Installation & Usage

### Installation

1. Clone the repo `git clone git@github.com:zmahmood98/github-repo-tracker.git`
2. Enter the repo directory `cd github-repo-tracker`
3. Install dependencies `npm install`

### Usage

* `npm run build` to make a production build of the app.
* `npm run dev` to start the app in development mode.
    * Available at `localhost:8080`.
* `npm run test` to run tests.
* `npm run coverage` to check test coverage.

## Changelog

* Removed `<WholePage />` component and factored it into `<App />`.
* Added heading to repo list.
* Added total number of repos to repo list heading.
* Added more repo information to the `<ResultItem />` component.
* Changed list layout to take up the screen.
* Clicking on a repo's name takes you to the page on GitHub.

## Bugs/Issues

- [x] State not updating after dispatching action.
- [x] `<Result />` component sends blank API request on first render.
- [x] Form does not change the state.
- [x] Uncaught `TypeError` from API response.
- [x] Long repo names break the styling.
- [x] Error in test setup file.

## Wins & Challenges

* The `TypeError` we were getting was because the API only returns an array when the request is successful and returns an object if there is an error like the username not being found or being rate limited. We solved this by manually `throw`ing if the response was not an array.