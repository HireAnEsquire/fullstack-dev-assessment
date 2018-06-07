# Candidate Client

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The Create React App user guide is located [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Usage

To start the development server:

`yarn start` or `npm start`

This will start the dev server on port 3000.

This project has also been configured to proxy requests to an API server hosted at `localhost:8000`. This means that you can create API requests to an endpoint (e.g. `/candidates`) to communicate with the API without having to specify the host or port. If needed (e.g. if your API server is listening on a different port), this `proxy` setting can be changed in `package.json`.