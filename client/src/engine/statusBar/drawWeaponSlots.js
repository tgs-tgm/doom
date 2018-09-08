import getElementById from '../getElementById';
import drawSmallDigit from './drawSmallDigit';
import checkIfPlayerOwnsWeapon from '../weapons/checkIfPlayerOwnsWeapon';

const updateWeaponStatus = (state, slotNumber, weaponSlot) => {
    const owned = checkIfPlayerOwnsWeapon(state, slotNumber, weaponSlot);

    const element = getElementById(`weapon${slotNumber}`);
    const color = owned ? 'yellow' : 'grey';

    if (element.className !== color) {
        const { constants } = state;
        drawSmallDigit(element, slotNumber, color, constants);
    }
};


export default (state) => {
    const {
        constants: { WEAPON_SLOTS },
        game: { singlePlayer },
    } = state;
    if (singlePlayer) {
        updateWeaponStatus(state, 3, WEAPON_SLOTS[3]);
        updateWeaponStatus(state, 4, WEAPON_SLOTS[4]);
        updateWeaponStatus(state, 5, WEAPON_SLOTS[5]);
        updateWeaponStatus(state, 6, WEAPON_SLOTS[6]);
        updateWeaponStatus(state, 7, WEAPON_SLOTS[7]);
    }
};
