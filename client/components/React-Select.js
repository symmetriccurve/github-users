import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			selectedOption : ''
		}
	}

	translateOptions(results){
		results = results.items || []

		return results.map((option)=>{
			return { value:option.html_url, label:option.login }
		})
	}

	handleChange(selectedOption){
		if(selectedOption && typeof selectedOption == 'string'){
			this.props.getUsers(selectedOption)
		}
	}

	gotoUserProfile(e){
		if(e){
			window.open(e.value)
		}
	}

	updateSelection(e){
		this.setState({selectedOption:e},()=>{
			this.gotoUserProfile(e)
		})
	}

	render() {
		const { selectedOption } = this.state
		const value = selectedOption && selectedOption.value

		return (
			<Select
				name="form-field-name"
				value={value}
				onChange={(e)=>this.updateSelection(e)}
				onInputChange={(e)=>this.handleChange(e)}
				options={this.translateOptions(this.props.options)}
			/>
		)
	}
}

module.exports = App
