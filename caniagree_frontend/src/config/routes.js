import React from 'react'
import { Route } from 'react-router'
import { ParagraphsList } from '../containers'
import App from '../components/App'

const createRoutes = () => (
  <div>
    <Route path="/" component={App} />
    <Route path="/paragraphs" component={ParagraphsList} />
  </div>
)

export default createRoutes
