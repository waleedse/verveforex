import React, { Fragment } from 'react'
import Banner from './Components/Banner'
import BrokerReview from './Components/BrokerReview'
import Reason from './Components/ReasonChoose'
import BrokerTabs from './Components/BrokerTabs'

function Broker() {
    return (
        <div className='account-details'>
            <Banner></Banner>
            <div class="auto-container">
                <div class="row clearfix">
                    <BrokerTabs></BrokerTabs>
                </div>
            </div>
            {/* <Reason></Reason> */}
        </div>
    )
}

export default Broker
