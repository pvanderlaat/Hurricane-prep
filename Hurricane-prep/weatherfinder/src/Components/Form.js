import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getweather}>
                <input type="text" name="city" placeholder="city..."/>
                <button>
                    Get Weather
                </button>
            </form>
        );
    }
}

export default Form; 