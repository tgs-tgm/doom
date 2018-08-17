const initState = {
    showAutomap: true,
    showViewingCone: true,
    revealThings: false,
    revealMap: false,
};

export default (prevState = initState, action) => {
    const {
        type,
    } = action;

    switch (type) {
        default: return prevState;
        case 'TOGGLE_AUTOMAP': {
            return {
                ...prevState,
                showAutomap: !prevState.showAutomap,
            };
        }
        case 'TOGGLE_VIEWING_CONE': {
            if (prevState.showAutomap) {
                return {
                    ...prevState,
                    showViewingCone: !prevState.showViewingCone,
                };
            }
            return prevState;
        }
        case 'TOGGLE_CHEAT_AUTOMAP': {
            const reset = prevState.revealThings && prevState.revealMap;
            if (reset) {
                return {
                    ...prevState,
                    revealMap: false,
                    revealThings: false,
                };
            }
            if (prevState.revealMap) {
                return {
                    ...prevState,
                    revealMap: true,
                    revealThings: true,
                };
            }
            return {
                ...prevState,
                revealMap: true,
                revealThings: false,
            };         
        }
    }
};
