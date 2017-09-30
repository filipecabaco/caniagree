import React from 'react'
import PropTypes from 'prop-types'
import Results from '../../containers/App/results'
import { Form, FormGroup, Input } from 'reactstrap'

class Search extends React.Component {
  state = {
    value: this.props.term
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { value } = this.state

    if (value) {
      this.props.filterServices({term: value, force: true})
    } else {
      this.props.clearFilter()
    }
  }

  onChange = (e) => {
    const { value } = e.target

    this.setState({ value })

    if (value) {
      this.props.filterServices({term: value})
    } else {
      this.props.clearFilter()
    }
  }

  render() {
    const {value} = this.state

    const formClass = 'form-group' + (value && !this.props.services.length ? ' has-error' : '')

    return (
      <Form onSubmit={this.onSubmit} >
        <div className={formClass}>
          <div className="input-search">
            <button type="submit" className="input-search-btn"><i className="icon fa-search" aria-hidden="true"></i></button>
            <input type="text" className="form-control" autoFocus="true" placeholder="Search for a service. e.g.: Amazon, Facebook..." onChange={this.onChange} value={value} />
          </div>
          <Results />
        </div>
      </Form>
    )
  }
}

Search.propTypes = {
  filterServices: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  services: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired
}

export default Search
