import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {

	render() {
		return (
			<div className='row '>
				<div className='column display-container'>
					<h5>
						{/* pass the props here*/}
						{this.props.value}
					</h5>
				</div>
			</div>
		)
	}
}
//this will show is what type of props we have
Display.propTypes = {
	value: PropTypes.string,
};
