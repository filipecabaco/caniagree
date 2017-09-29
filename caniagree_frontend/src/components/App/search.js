import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input } from 'reactstrap'

class Search extends React.Component {
  state = {
    value: this.props.term
  }

  onChange = e => {
    const { value } = e.target

    this.setState({ value })

    if (value) {
      this.props.filterServices({term: value})
    } else {
      this.props.clearFilter()
    }
  }

  render() {
    const {value, focus} = this.state

    return (
      <Form onSubmit={this.onSubmit} >
        <FormGroup>
          <Input
            type='text'
            name='query'
            placeholder='search for a service. e.g.: Amazon, Facebook'
            autoComplete='off'
            value={value}
            onChange={this.onChange}
          />
        </FormGroup>
      </Form>
    )
  }
}

Search.propTypes = {
  filterServices: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired
}

export default Search
