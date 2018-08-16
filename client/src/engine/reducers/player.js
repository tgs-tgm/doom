import player from '../../maps/player';

const initState = {
    x: 1,
    y: 1,
    rotDeg: 0,
    ...player,
	moveSpeed: 0.3,
    speed: 0,
    rotSpeed: 4,
    dir: 0,
};

export default (prevState = initState, action) => {
    const {
        type,
        payload,
    } = action;

    const nextState = { ...prevState };
    switch (type) {
        case 'INIT_PLAYER': {
            return payload;
        }
        case 'SET_PLAYER_COORDINATES': {
            return { ...payload };
        }
        case 'MOVE_PLAYER_FORWARD': {
            return {
                ...prevState,
                speed: 1,
            };
        }
        case 'MOVE_PLAYER_BACKWARD': {
            return {
                ...prevState,
                speed: -1,
            };
        }
        case 'ROTATE_PLAYER_LEFT': {
            return {
                ...prevState,
                dir: -1,
            };
        }
        case 'ROTATE_PLAYER_RIGHT': {
            return {
                ...prevState,
                dir: 1,
            };
        }
        case 'STOP_PLAYER_SPEED': {
            return {
                ...prevState,
                speed: 0,
            };
        }
        case 'STOP_PLAYER_DIRECTION': {
            return {
                ...prevState,
                dir: 0,
            };
        }
        default: {
            return nextState;
        }
    }
};
