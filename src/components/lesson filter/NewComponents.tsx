import React from 'react';
import {SupperButton} from "./SupperButton";
import {FilterMoney, MoneyPropsType} from "./FilterBanknote";

type PropsType = {
    money: MoneyPropsType[]
    onChangeFilter: (nameBanknote: FilterMoney) => void
}
export const NewComponents = (props: PropsType) => {
    const onCLickDollarHandler = () => {
        props.onChangeFilter('dollar')
    }
    const onCLickRubleHandler = () => {
        props.onChangeFilter('ruble')
    }
    const onCLickAllHandler = () => {
        props.onChangeFilter('all')
    }
    return (
        <div>
            <ul>
                {props.money.map((objFromMoneyArr) => {
                    return (
                        <li>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <SupperButton title={'dollar'} callback={onCLickDollarHandler}/>
                <SupperButton title={'ruble'} callback={onCLickRubleHandler}/>
                <SupperButton title={'all'} callback={onCLickAllHandler}/>
            </div>
        </div>
    );
};

