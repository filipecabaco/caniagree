import React from 'react'
import Search from '../../containers/App/search'
import Results from '../../containers/App/results'
import logo from '../../../markup/assets/imgs/logo-small.svg'

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
              <p>Find out the safe and unsafe parts of the Terms &amp; Conditions for multiple services.</p>
              <Search />
              <div className="latest">
                <ul className="list-inline small">
                  <li>Quick links:</li>
                  <li><a href="/service/6">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Results />

      <div className="container intro">

        <div className="row">
          <div className="col-sm-4">
            <h2><i className="icon fa-question-circle" aria-hidden="true"></i>Why?</h2>
            <p>"I have read and agree to the Terms &amp; Conditions” is the <a href="https://www.theguardian.com/technology/2017/mar/03/terms-of-service-online-contracts-fine-print">biggest lie on the web</a>.</p>
            <p>Some Terms &amp; Conditions have more words than some books.</p>
          </div>
          <div className="col-sm-4">
            <h2><i className="icon fa-cogs" aria-hidden="true"></i>How it works?</h2>
            <p>We allow people who <strong>do read</strong> Terms &amp; Conditions to vote on the safety of each paragraph.</p>
            <p>We can then show you the safe parts and highlight the unsafe ones, so that you are aware of what you're agreeing with. </p>
          </div>
          <div className="col-sm-4">
            <h2><i className="icon fa-heart" aria-hidden="true"></i>What are we aiming for?</h2>
            <p>Think of a web where Terms &amp; Conditions actually have meaning.</p>
            <p>Think of a web where companies know which paragraphs of their Terms &amp; Conditions actually make their users angry.</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App
