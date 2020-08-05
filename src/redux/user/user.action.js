import {usertypes} from './user.types'

const userAction = updated_user => ({
    type:usertypes.SET_CURRENT_USER,
    payload:updated_user
});

export default userAction;