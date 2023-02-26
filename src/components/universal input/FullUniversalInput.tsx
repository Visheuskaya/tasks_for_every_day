import React, {ChangeEvent, useState} from 'react';

type PropsType = {
callback : (value: string) => void
}
const FullUniversalInput = (props: PropsType) => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.callback(value)
        setValue('')
    }
    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullUniversalInput;