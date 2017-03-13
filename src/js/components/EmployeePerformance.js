/* =============================================
    EmployeePerformance COMPONENT
    SCSS: /sass/components/EmployeePerformance.scss
 ============================================== */
import React, { Component } from 'react';

class EmployeePerformance extends Component {
    render() {
        return (
            <figure className="rct-employee">
                <div className="pr va-middle ib">
                    <div className="img-polygon background pr">
                        <img className="img-polygon img-center img-cover"
                             src={this.props.src}/>
                    </div>
                    <img className={this.props.medal ? 'medal pa' : 'hide' } src="/src/img/EmployeePerformance/medal.png"/>
                </div>

                <figcaption className="employee-caption ib va-middle">
                    <h3 className="va-middle">
                        {this.props.employee}
                        <strong className="txt-right show">{this.props.points} PTS</strong>
                    </h3>
                </figcaption>
            </figure>
        );
    }
}

export default EmployeePerformance;
