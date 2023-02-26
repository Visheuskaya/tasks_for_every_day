import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    setValue: (value: string) => void
}
export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.value} onChange={onChangeHandler}/>
        </div>
    );
};
