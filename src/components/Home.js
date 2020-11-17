import React from 'react';
import './Home.css';


class Home extends React.Component {
    state={
    inputText: '',
    finalText: ''
    }

    updateText = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    getText = () => {
        this.setState({
            finalText: this.state.inputText
        })
    }


    render() {
        console.log(this.state.inputText);
    return (
    <div className="homeContainer">
    <h1>This is the Home page</h1>
    <input type="text" onChange={this.updateText}/>
    <button onClick={this.getText}>Get Text</button>
    <h1>{this.state.finalText}</h1>
    </div>
    )
    }
}
    


export default Home;