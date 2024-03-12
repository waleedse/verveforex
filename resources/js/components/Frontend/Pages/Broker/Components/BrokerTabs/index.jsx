import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BrokerReview from '../BrokerReview'
import AccountTypes from '../AccountTypes'
import Deposit from '../Desposit'
function BrokerTabs({ brokerProp }) {
    const [activeTab, setActiveTab] = useState('broker')
    const [broker, setBroker] = useState(brokerProp)

    useEffect(() => {
        setBroker(brokerProp)
    }, [brokerProp])

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
                                <li onClick={() => { setActiveTab('broker') }}><Link className={`${activeTab == 'broker' && 'current'}`} href="account-details.html"><h5>{broker?.about.name}</h5></Link></li>
                                <li onClick={() => { setActiveTab('commission') }}><Link className={`${activeTab == 'commission' && 'current'}`} href="account-details-2.html"><h5>Account Types</h5></Link></li>
                                <li onClick={() => { setActiveTab('deposit') }}><Link className={`${activeTab == 'deposit' && 'current'}`} href="account-details-3.html" ><h5>Desposit and Withdrawl</h5></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="account-details-content">
                    {
                        activeTab == 'broker' && broker &&
                        <BrokerReview broker={broker.about}></BrokerReview>
                    }
                    {
                        activeTab == 'commission' && broker &&
                        <AccountTypes account={broker?.account}></AccountTypes>
                    }
                    {
                        activeTab == 'deposit' && broker &&
                        <Deposit deposit={broker?.deposit}></Deposit>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default BrokerTabs
