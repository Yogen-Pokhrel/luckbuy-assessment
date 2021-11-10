import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Routes
} from 'react-router-dom'
// import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from 'Routes';
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <>
      <Suspense fallback={loading}>
          <Routes>
              {routes.map((route, idx) => {
              return route.component && (
                  <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
              )
              })}
              <Route from="/" to="/" />
          </Routes>
      </Suspense>
    </>
  )
}

export default React.memo(Content)