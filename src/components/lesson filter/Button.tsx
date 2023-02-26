import React from 'react';

export type PropsType = {
    title: string
    callback : () => void
}
export const Button = (props: PropsType) => {
    const onCLickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onCLickHandler}>{props.title}</button>
    );
};