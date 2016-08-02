import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Root from './containers/Root';
import Home from './containers/Home';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    // Uncomment this line, if you want a Error page for unmatched urls.
    // (Don't forget to create and import the Error component/container)
    {/*<Route path="*" component={Error} />*/}
  </Route>
)
