import React, { Fragment } from 'react'
import Sidebar from './Components/SideBar'
import Banner from './Components/Banner'
import BrokerReview from './Components/BrokerReview'
import Reason from './Components/ReasonChoose'

function Broker() {
    return (
        <div className='account-details'>
            <Banner></Banner>
            <div class="auto-container">
                <div class="row clearfix">
                    <BrokerReview></BrokerReview>
                </div>
            </div>
            {/* <Reason></Reason> */}
        </div>
    )
}

export default Broker
