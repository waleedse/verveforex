import React from 'react';

function AccountTypes(props) {
    return (
        <div className="content-two">
            <div className="text-box">
                <h3>Account Types</h3>
                {/* <p>Bound to ensue and equal blame belongs to those who fail in their,</p> */}
            </div>
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                    <ul className="list-item clearfix">
                        <li>
                            <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                            CENT ACCOUNT
                            <span>Proficient Trader</span>
                        </li>
                        <li>
                            <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                            STANDARD ACCOUNT
                            <span>Expert Trader</span>
                        </li>

                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                    <ul className="list-item clearfix">
                        <li>
                            <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                            ULTRA ACCOUNT
                            <span>Professional Trader</span>
                        </li>
                        <li>
                            <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                            ELITE ACCOUNT
                            <span>Executive Trader </span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='pricing-section'>

                <div className="table-outer home-1">
                    <table class="pricing-table">
                        <thead class="table-header">
                            <tr>
                                <th>Account Type</th>
                                <th>CURRENCY*</th>
                                <th>SPREAD</th>
                                <th>MINIMUM DEPOSIT</th>
                                <th>LEVERAGE*</th>
                                <th>SWAP</th>
                                <th>EA</th>
                                <th>INSTRUMENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cent Account</td>
                                <td>USD</td>
                                <td>From 2</td>
                                <td>$10</td>
                                <td>Fixed 1:500</td>
                                <td>Swap Free</td>
                                <td>No</td>
                                <td>Majors, Minors, Metals, Energy, US30, SP</td>
                            </tr>
                            <tr>
                                <td>Standard Account</td>
                                <td>USD</td>
                                <td>From 1.8</td>
                                <td>$10</td>
                                <td>Fixed 1:500</td>
                                <td>Swap Free</td>
                                <td>Yes</td>
                                <td>Majors, Minors, Metals, Energy, US30, SP</td>
                            </tr>
                            <tr>
                                <td>Ultra Account</td>
                                <td>USD</td>
                                <td>0.9</td>
                                <td>$200</td>
                                <td>Fixed 1:500</td>
                                <td>Swap Free</td>
                                <td>Yes</td>
                                <td>Majors, Minors, Metals, Energy, US30, SP</td>
                            </tr>
                            <tr>
                                <td>Elite Account</td>
                                <td>USD</td>
                                <td>Raw</td>
                                <td>$500</td>
                                <td>Fixed 1:200 + Dynamic</td>
                                <td>Swap Free</td>
                                <td>Yes</td>
                                <td>Majors, Minors, Metals, Energy, US30, SP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AccountTypes;
