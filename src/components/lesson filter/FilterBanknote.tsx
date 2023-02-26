import React, {useState} from 'react';
import {SupperButton} from "./SupperButton";

type FilterMoney = 'dollar' | 'ruble' | 'all'
export const FilterBanknote = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    const [filter, setFilter] = useState<FilterMoney>('all')

    let filteredMoney = money;
    if (filter === 'dollar') {
        filteredMoney = money.filter(money => money.banknote === 'dollar')
    }
    if (filter === 'ruble') {
        filteredMoney = money.filter(money => money.banknote === 'ruble')
    }
    const onCLickHandler = (nameBanknote: FilterMoney) => {
        setFilter(nameBanknote)
    }

    return (
        <div>
            <ul>
                {filteredMoney.map((objFromMoneyArr) => {
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
                <SupperButton title={'dollar'} callback={() => onCLickHandler('dollar')}/>
                <SupperButton title={'ruble'} callback={() => onCLickHandler('ruble')}/>
                <SupperButton title={'all'} callback={() => onCLickHandler('all')}/>
            </div>
        </div>
    );
};
