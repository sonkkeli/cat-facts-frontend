# Running the project locally

To run the project locally, you need two terminals. First install the node_modules with `npm install`. Then in the first terminal run `npm run proxy` to start the proxy to be able to use the cat-facts api from localhost:3000. Leave the proxy terminal on and running. Then in the second terminal run `npm start` to run the actual project.

## Available Scripts

In the project directory, you can run:

### `npm install`
To install the node_modules.

### `npm run proxy`

Starts the proxy to be able to use the cat-facts domain from localhost:3000. Please note, this has to be started before running the `npm start` command.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.