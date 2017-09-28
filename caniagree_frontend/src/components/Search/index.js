import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
  state = { value: '' }

  onSubmit = (e) => {
    e.preventDefault()

    const {value} = this.state

    if (value) {
      this.props.filterServices(value)
    } else {
      this.props.clearFilter()
    }
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.value} onChange={this.onChange} />
      </form>
    )
  }
}

Search.propTypes = {
  filterServices: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired
}

export default Search
