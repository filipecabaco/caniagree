import React from 'react'
import Search from '../../containers/App/search'
import Results from '../../containers/App/results'
import logo from '../../../../markup/assets/imgs/logo-small.svg'

const App = () => {
  return (
    <div className="home">
      <div className="container-fluid search-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <h1>
                <img src={logo} alt="Can I Agree?" height="45px" />
              </h1>
              <form>
                <div className="form-group">
                  <Search />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Results />
    </div>
  )
}

export default App
