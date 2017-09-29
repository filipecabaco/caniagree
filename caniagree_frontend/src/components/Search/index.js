import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input } from 'reactstrap'

class Search extends React.Component {
  state = { value: '' }

  onSubmit = e => {
    e.preventDefault()

    const { value } = this.state

    if (value) {
      this.props.filterServices({ term: value })
    } else {
      this.props.clearFilter()
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="query"
            placeholder="search for a service. e.g.: Amazon, Facebook"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormGroup>
      </Form>
    )
  }
}

Search.propTypes = {
  filterServices: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired
}

export default Search
