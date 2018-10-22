/**
 * Created by Yasin KANSU on 21.10.2018.
 */

import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div style={{zIndex: 100}}>
                <input type="button" onClick={() => {
                    this.props.setOpen(!this.props.isOpen);
                }} value={this.props.isOpen ? "hide" : "show"}/>
                <div style={{visibility: this.props.isOpen ? "visible" : "hidden"}}>Yasin KANSU</div>
            </div>
        );
    }
}

export default Button;
