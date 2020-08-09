import {createSelector} from 'reselect';

const inputList = state => state.list;

export const showList=createSelector(
    [inputList],
    list => list.sections
)