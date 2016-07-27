import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Header from 'components/Header'
import Crews from 'components/Crews'
import Home from 'components/Home'

export default () => {
  return (
    <Route path="/" component={Header}>
      <IndexRoute component={Home} />
      <Route path="/crews" component={Crews} />
      <Route path="/crews/:crew" component={Crews} />
    </Route>
  );
}
