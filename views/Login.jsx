var React = require("react");

class Login extends React.Component {
    render(){
        return(
            <div style={{ fontFamily: 'sans-serif'}}>
                <h1>{this.props.msg}</h1>
	    		<form action="/login" method="POST">

	    		    <input name="email" type="text" placeholder="email" />

	    			<input name="password" type="text" placeholder="password"/>

	    			<input name="submit" type="submit" />

	    		</form>
            </div>    
        )
    }
}

module.exports = Login;