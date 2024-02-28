import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import BrokerReview from '../BrokerReview'
import AccountTypes from '../AccountTypes'
import Deposit from '../Desposit'

function BrokerTabs() {
    const [activeTab, setActiveTab] = useState('broker')

    return (
        <Fragment>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="account-sidebar">
                    <div className="sidebar-widget category-widget">
                        <div className="widget-title">
                            <h3>Account Types</h3>
                        </div>
                        <div className="widget-content">
                            <ul className="category-list clearfix">
                                <li onClick={() => { setActiveTab('broker') }}><Link className={`${activeTab == 'broker' && 'current'}`} href="account-details.html"><h5>Cabana Capital</h5></Link></li>
                                <li onClick={() => { setActiveTab('commission') }}><Link className={`${activeTab == 'commission' && 'current'}`} href="account-details-2.html"><h5>Commision Account</h5></Link></li>
                                <li onClick={() => { setActiveTab('deposit') }}><Link className={`${activeTab == 'deposit' && 'current'}`} href="account-details-3.html" ><h5>STP Pro Account</h5></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="account-details-content">
                    {
                        activeTab == 'broker' &&
                        <BrokerReview></BrokerReview>
                    }
                    {
                        activeTab == 'commission' &&
                        <AccountTypes></AccountTypes>
                    }
                    {
                        activeTab == 'deposit' &&
                        <Deposit></Deposit>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default BrokerTabs
