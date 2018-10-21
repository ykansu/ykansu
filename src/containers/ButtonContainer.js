/**
 * Created by Yasin KANSU on 21.10.2018.
 */
import {connect} from 'react-redux'
import Button from '../components/Button'
import * as mainActions from "../actions/mainActions";

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.mainReducer.open
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setOpen: (isOpen) => dispatch(mainActions.setOpen(isOpen))
});

let ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);
export default ButtonContainer;