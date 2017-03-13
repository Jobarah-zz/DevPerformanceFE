/* =============================================
    HEADER COMPONENT
    SCSS: /sass/components/Header.scss
 ============================================== */
import React, { Component } from 'react';
import EmployeePerformance from './EmployeePerformance';

class Header extends Component {
    render() {
        return (
            <header className="hdr-performer">
                <h2>
                    <small className="show">{this.props.department}</small>
                    TOP PERFORMER
                </h2>

                <EmployeePerformance
                    employee="Luis Booth"
                    points="459"
                    src="https://aprendeeneagrama.files.wordpress.com/2013/06/darth-vader-face1.jpg?w=700&h=700"
                    medal="siasdasds"
                />
            </header>
        );
    }
}

Header.propTypes = {
    department: React.PropTypes.string.isRequired
};

export default Header;
