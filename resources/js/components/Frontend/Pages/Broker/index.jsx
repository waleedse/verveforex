import React, { Fragment } from 'react'
import Sidebar from './Components/SideBar'
import Banner from './Components/Banner'
import BrokerReview from './Components/BrokerReview'
import Reason from './Components/ReasonChoose'

function Broker() {
  return (
    <Fragment>
        <Banner></Banner>
        <Sidebar></Sidebar>
        <BrokerReview></BrokerReview>
        <Reason></Reason>
    </Fragment>
  )
}

export default Broker
