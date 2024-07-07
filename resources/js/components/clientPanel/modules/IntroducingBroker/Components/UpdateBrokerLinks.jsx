
import React, { useEffect, useState } from 'react';
import { getClientBrokerLinks, updateClientBrokerLinks } from '../../../../services/client/commonService';
import { IMAGE_BASE_URL } from '../../../../config/constants';
import toast from 'react-hot-toast';

function UpdateBrokerLinks(props) {
    const [brokers, setBrokers] = useState();

    const brokerLinks = async () => {
        let res = await getClientBrokerLinks();

        if (res.status == 200) {
            setBrokers(res.brokers);
        } else {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        brokerLinks()
    }, [])
    const handleLinkChange = (value, index) => {
        let temp = JSON.parse(JSON.stringify(brokers));
        temp[index].broker_link = value;
        setBrokers(temp);
    }
    const updateLink = async (item, index) => {
        let payload = {
            link: item.broker_link,
            id: item.id
        }
        let res = await updateClientBrokerLinks(payload);
        if (res.status == 200) {
            toast.success(item?.broker?.title + "'s link updated")
        }
    }

    return (
        <div>
            <div class="page-header-title">
                <h2 class="mb-5">Update Broker Links</h2>
            </div>
            {
                brokers?.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='card-body'>
                                <img style={{ width: '150px' }} src={IMAGE_BASE_URL + item?.broker?.image}></img>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3>{item?.broker?.title}</h3>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <input defaultValue={item?.broker_link} onChange={(e) => { handleLinkChange(e.target.value, index) }} className="form-control " placeholder='Enter your broker link'></input>
                                        <div className='text-right pt-3'>
                                            <button className='btn btn-success' onClick={() => { updateLink(item, index) }}>Update link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default UpdateBrokerLinks;

