import React, { Fragment, useState } from "react";
import Mission from './components/ourMission'
import OurVission from "./components/ourVission";
import OurValue from "./components/OurValue";
function OurMission({ }) {
    const [active, setActive] = useState("mission")

    return (
        <Fragment>
            <section className="statements-section">
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="tab-btn-box">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => { setActive("mission") }} className={`tab-btn ${active == 'mission' && 'active-btn'}`} data-tab="#tab-1">
                                    <span>Mission</span>
                                    <div className="icon-box"><img src="assets/images/icons/icon-71.png" alt /></div>
                                </li>
                                <li onClick={() => { setActive("vision") }} className={`tab-btn ${active == 'vision' && 'active-btn'}`} data-tab="#tab-2">
                                    <span>Vision</span>
                                    <div className="icon-box"><img src="assets/images/icons/icon-72.png" alt /></div>
                                </li>
                                <li onClick={() => { setActive("value") }} className={`tab-btn ${active == 'value' && 'active-btn'}`} data-tab="#tab-3">
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
                                active == "value" &&
                                <OurValue></OurValue>
                            }
                            {
                                active == "vision" &&
                                <OurVission></OurVission>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default OurMission;
