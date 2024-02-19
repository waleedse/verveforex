import React, { Fragment, useState } from "react";
import Mission from './components/ourMission'
function OurMission({}) {
    const [active, setActive] = useState("mission")

    return (
        <Fragment>
            <section className="statements-section">
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="tab-btn-box">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li className="tab-btn active-btn" data-tab="#tab-1">
                                    <span>Mission</span>
                                    <div className="icon-box"><img src="assets/images/icons/icon-71.png" alt /></div>
                                </li>
                                <li className="tab-btn" data-tab="#tab-2">
                                    <span>Vision</span>
                                    <div className="icon-box"><img src="assets/images/icons/icon-72.png" alt /></div>
                                </li>
                                <li className="tab-btn" data-tab="#tab-3">
                                    <span>Value</span>
                                    <div className="icon-box"><img src="assets/images/icons/icon-73.png" alt /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {
                                active == "mission" && 
                                <Mission></Mission>
                            }
                            {
                                active == "mission" && 
                                <Mission></Mission>
                            }
                            {
                                active == "mission" && 
                                <Mission></Mission>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Our_mission;