# React Redux boilerplate
---
## About
Minimal boilerplate for a React, Redux, React Router application.

+ React
+ Redux
+ React Router
+ React Redux
+ React hot loader
+ Webpack

## Setup

```bash
git clone https://github.com/sanskar-modi/react-redux-boilerplate your-project-name
npm install && npm run start
```

##### Lint
```bash
npm run lint
```

## Enhancements
### Devtools

#### React

###### Devtools extension
You can install react developer tools extension from [react-devtools](https://github.com/facebook/react-devtools)

###### React monocle
Reat monocle generates visual representations of react app hierarchy.
For more [react-monocle](https://github.com/team-gryff/react-monocle)

#### Redux

###### Devtools extension
You can install redux devtools extension from [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

and change configure store from
```js
let store = createStore(reducer);
```
to
```js
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
```
for more advance setup go through docs [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

###### Logger
Redux logger provide pretty output on console on every dispatched event.

for further instruction go to [redux-logger](https://github.com/evgenyrodionov/redux-logger)

![redux-logger](http://i.imgur.com/pMR3OAv.png)

#### redux-thunk
Redux thunk can be used to dispatch function instead pure object action creator. This can be useful if you're fetching data asynchronously. For further instruction head over to [redux-thunk](https://github.com/gaearon/redux-thunk)

#### Awesome
For more awesome stuff about React and Redux head over to
+ [awesome-react](https://github.com/enaqx/awesome-react)
+ [awesome-redux](https://github.com/xgrommx/awesome-redux)
---

##### LICENSE
MIT
