import React, { Fragment, useEffect, useState } from 'react'
import Banner from './Components/Banner'
import BrokerReview from './Components/BrokerReview'
import Reason from './Components/ReasonChoose'
import BrokerTabs from './Components/BrokerTabs'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import brokers from './data/brokers.json'

function Broker() {
    const [broker, setBroker] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        console.log(brokers.brokers)
        if (params?.slug) {
            let slugMatched = false;
            brokers.brokers?.map((item) => {
                if (item.slug == params.slug) {
                    setBroker(item)
                    slugMatched = true;
                }
            })
            !slugMatched && navigate('/')
        } else {
            navigate('/')
        }
    }, [location.pathname])

    return (
        <div className='account-details'>
            <Banner broker={broker}></Banner>
            <div class="auto-container">
                <div class="row clearfix">
                    <BrokerTabs brokerProp={broker}></BrokerTabs>
                </div>
            </div>
            {/* <Reason></Reason> */}
        </div>
    )
}

export default Broker
