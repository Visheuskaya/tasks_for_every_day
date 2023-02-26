import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/universal input/Button";
import {Input} from "./components/universal input/Input";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    const [value, setValue] = useState<string>('')

    const addMessage = (value: string) => {
        const newMessage = {message: value}
        setMessage([newMessage, ...message])
    }
    const callbackButtonHandler = () => {
        addMessage(value)
        setValue('')
    }
    return (
        <div className={'App'}>
            <Input value={value} setValue={setValue}/>
            <Button name={'clickMe'} callback={callbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
