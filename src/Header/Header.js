import React, { Component } from 'react'
import "./header.scss";

export default class Header extends Component {
    render() {
        return (
            <section className="header-section">
                <div className="header-title">
                    <div className="">
                        <i class="fas fa-list-alt"></i>
                    </div>

                    <div className="header-tt">
                        <label>Account</label>
                        <h4>*Ohana, Inc. <i class="fas fa-bezier-curve"></i></h4>
                    </div>
                </div>
                <div className="header-details">
                    <ul>
                        <li>
                            <label>Account Number</label>
                            <span>A465783655</span>
                        </li>
                        <li>
                            <label>Type</label>
                            <span>Enterprise</span>
                        </li>
                        <li>
                            <label>Industry</label>
                            <span>Biotechnology</span>
                        </li>
                        <li>
                            <label>Total Sales</label>
                            <span>$6542.87</span>
                        </li>
                        <li>
                            <label>Employees</label>
                            <span>20,040</span>
                        </li>
                        <li>
                            <label>Days Since Activity</label>
                            <span>408</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
