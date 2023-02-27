import React, {useState} from 'react';
import {SupperButton} from "./SupperButton";
import {NewComponents} from "./NewComponents";

export type FilterMoney = 'dollar' | 'ruble' | 'all'
export type MoneyPropsType = {
    banknote: string
    nominal: number
    number: string
}
export const FilterBanknote = () => {
    const [money, setMoney] = useState<MoneyPropsType[]>([
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
    const onChangeFilter = (nameBanknote: FilterMoney) => {
        setFilter(nameBanknote)
    }

    return (
        <div>
            <NewComponents
                money={filteredMoney}
                onChangeFilter={onChangeFilter}
            />
        </div>
    );
};
