// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
    enteringPassword = () => console.log('Entering password...')
    

    render() {
        return (
            <div>
                <input onKeyUp={this.enteringPassword} type="password"/>
            </div>
            )
    }
}