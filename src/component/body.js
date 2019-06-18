import React from 'react';

class Body extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    header=() =>{
        console.log("sdfa")
        this.props.history.push('/header');
    }
    contact = () => {
        this.props.history.push('/contact');
    }
    render() {
        return (
            <div >
                <h2>This is a main page </h2>
                <button onClick={this.header}>Header</button>
                <button onClick={this.contact}>Contact</button>
            </div>
        );
    }

}

export default Body;
