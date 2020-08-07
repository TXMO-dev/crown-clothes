import {createSelector} from 'reselect';

const selectCurrentInput = state => state.user;

export const selectCurrentUserOutput = createSelector(
    [selectCurrentInput],
    user => user.currentUser
)