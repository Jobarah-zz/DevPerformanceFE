/* =============================================
    HEADER COMPONENT
    SCSS: /sass/components/Header.scss
 ============================================== */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="hdr-performer">
                <h2>
                    <small className="show">{this.props.department}</small>
                    TOP PERFORMER
                </h2>
            </header>
        );
    }
}

Header.propTypes = {
    department: React.PropTypes.string.isRequired
};

export default Header;
