/**
 * Created by Yasin KANSU on 21.10.2018.
 */
import {actionTypes} from "../constants/actionTypes";

export const setOpen = isOpen => ({
    type: actionTypes.OPEN_THING,
    open: isOpen
});