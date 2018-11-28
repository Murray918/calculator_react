import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {
	render() {
		return (
			<div className='row '>
				<div className='column display-container'><h5>{this.props.value}</h5></div>
			</div>
		)
	}
}
Display.propTypes = {
	value: PropTypes.string,
};
