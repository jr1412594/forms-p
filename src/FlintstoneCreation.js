import { Component } from 'react'

class FlintstoneCreation extends Component {

    state = {
        name: ''
    }

 handleSubmit = (event) =>{
        event.preventDefault();
        const newFlintstone = this.state;
        this.props.addFlintstone(newFlintstone)
    }
 handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <form 
            className="flintstone-create"
            onSubmit={ this.handleSubmit }>
                <input type='text' name='name' placeholder='flintstone name' onChange={this.handleChange} value={ this.state.name }/>
                <input type='submit' value='new flintstone' />
            </form>
        )
    }
}
export default FlintstoneCreation;