import React from 'react';
import './App.css';
import {UniversalButton} from "./UniversalButton";

function App() {
    const ChangeUniversal1 = (name: string,age: number) => {
        console.log(name,age)
    }
    const ChangeUniversal2 = (name: string,age: number) => {
        console.log(name + age)
    }
    return (
        <div className="App">
           <UniversalButton title={'MyChangeUniversalButton1'} callback = {() => ChangeUniversal1('Valeryia',15)}/>
           <UniversalButton title={'MyChangeUniversalButton2'} callback = {() => ChangeUniversal2('Varvara', 20)}/>
        </div>
    );
}

export default App;
