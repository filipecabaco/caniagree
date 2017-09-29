import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap'

class ParagraphFilter extends React.Component {
    constructor() {
        super()
        this.state = {
            isToggled: false
        }
    }

    toggleHandler = (evt) => {
        evt.preventDefault()
        const obj = {
            isToggled: !this.state.isToggled
        }
        this.setState(obj)
        this.props.onToggleClick(obj)
    }

    render() {
        const icon = this.state.isToggled
            ? <span> <i className="icon fa-expand" aria-hidden="true"></i> Show all paragraphs </span> 
            : <span> <i className="icon fa-compress" aria-hidden="true"></i> Show only controversial paragraphs </span> 

        return (
            <ul className="small list-inline">
                <li>
                    <a href="" onClick={this.toggleHandler}>
                        {icon}
                    </a>
                </li>
            </ul>
        )
    }
}

ParagraphFilter.propTypes = {
    onToggleClick: PropTypes.func.isRequired
}

export default ParagraphFilter
