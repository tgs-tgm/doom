import { WEAPON_SWITCH_TIME } from '../constants';

const initState = {};
export default (prevState = initState, action) => {
    const {
        type,
        payload = {},
    } = action;

    const {
        nextWeapon,
        lowerWeaponDelay,
        raiseWeaponDelay,
        idleFrameDelay,
        currentIdleFrame,
    } = payload;

    switch (type) {
        default: return prevState;
        case 'START_LOWER_WEAPON': {
            return {
                ...prevState,
                nextWeapon,
                lowerWeaponDelay: WEAPON_SWITCH_TIME,
            };
        }
        case 'UPDATE_LOWER_WEAPON': {
            return {
                ...prevState,
                lowerWeaponDelay,
            };
        }
        case 'STOP_LOWER_WEAPON': {
            return {
                ...prevState,
                nextWeapon: undefined,
                lowerWeaponDelay: undefined,
            };
        }
        case 'START_RAISE_WEAPON': {
            return {
                ...prevState,
                raiseWeaponDelay: WEAPON_SWITCH_TIME,
            };
        }
        case 'UPDATE_RAISE_WEAPON': {
            return {
                ...prevState,
                raiseWeaponDelay,
            };
        }
        case 'STOP_RAISE_WEAPON': {
            return {
                ...prevState,
                raiseWeaponDelay: undefined,
            };
        }
        case 'UPDATE_WEAPON_ANIMATION_DELAY': {
            return {
                ...prevState,
                idleFrameDelay,
                currentIdleFrame,
            };
        }
        case 'SET_IDLE_WEAPON_SOUND': {
            return {
                ...prevState,
                playingIdleSound: true,
            };
        }
        case 'UNSET_IDLE_WEAPON_SOUND': {
            return {
                ...prevState,
                playingIdleSound: false,
            };
        }
    }
};
