import React, { Component } from 'react'
import buttons from '../logic/butnArray'

export default class Buttons extends Component {
	render() {
		//this tells the component which class to add to our button
		const classHelper = num =>
			num > 1 ? 'five columns zero' : 'three columns'


		const btns = buttons.map((btn, index) => {
			let size = parseInt(btn.size)
			console.log('this is the button name')
			return (
				<div key={index}>
					<button
						className={'btn button ' + classHelper(size) + ' ' + btn.color}
						value={btn.name}
						onClick={this.props.handleOnClick}>
					{btn.name}
					</button>
				</div>
			)
		})
		return (

			<div className='row btn-container'>
				{btns}
			</div>

		)
	}
}