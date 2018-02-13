import React, {Component} from 'react'

//redux
import {connect} from 'react-redux'
import SingleSelect from '../../components/React-Select'

//actions
import {getUsers} from '../../actions/APIActions'

//html
import '../../index.html'

class App extends Component {
	render() {
		return (
			<SingleSelect getUsers={(input)=>this.props.getUsers(input)} options={this.props.users}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.data.users,
	}
}

function mapDispatchToProps(dispatch){
	return {
		getUsers : (input) => dispatch(getUsers(input))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
