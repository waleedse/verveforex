import React from 'react'
import '../promotions.css'
import PromotionRules from './components/PromotionRules'


function CashBackPromotion() {
    return (
        <section className='promotion-wrapper cashback'>
            <div className='top-banner'>
                <figure>
                    <img src="/assets/images/promotions/cashback/TopBanner.jpg" />
                </figure>
            </div>
            <div className="container">
                <div className="promotion-heading">
                    <h3>Qondzo</h3>
                    <h3 className='text-center mt-2'>CASHBACK <span style={{ fontWeight: '400' }} className='text-normal'>PROMOTION</span></h3>
                </div>

                <p className='promotion-details'>
                    Introducing the Qondzo Cashback Promotion - an exclusive opportunity for forex traders to maximize their earnings while enjoying the benefits of trading with us.
                </p>
                <p className='promotion-details'>
                    With our Cashback Promotion, traders can earn cash rewards simply by engaging in their usual forex trading activities. It's our way of showing appreciation for your loyalty and commitment to Qondzo.
                </p>

            </div>
            <div className='trip-details '>
                <div className='row '>
                    <div className='howitworks text-light col-md-6  '>
                        <h4 style={{ fontSize: '34px', fontWeight: '600', color: 'white' }}>HOW IT WORKS:</h4>
                        <div className='row mt-5'>
                            <div className='col-md-2'>
                                <img src='/assets/images/promotions/cashback/1.png'></img>
                            </div>
                            <div className='col-md-9 pl-3'>
                                <p className='text-light'>
                                    Every time you execute a trade, you'll earn cashback on every qualified trade. The more you trade, the more cashback you'll receive – it's that simple. Plus, there are no complicated requirements or restrictions. Just trade as you normally would and watch your cashback rewards grow. </p>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-2'>
                                <img src='/assets/images/promotions/cashback/2.png'></img>
                            </div>
                            <div className='col-md-9 pl-3'>
                                <p className='text-light'>
                                    What sets our Cashback Promotion apart is its flexibility. Unlike other promotions that tie you down with specific terms and conditions, our Cashback Promotion gives you the freedom to trade the way you want. Whether you're a seasoned trader or just starting out, everyone can benefit from earning extra cash with every trade.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-2'>
                                <img src='/assets/images/promotions/cashback/3.png'></img>
                            </div>
                            <div className='col-md-9 pl-3'>
                                <p className='text-light'>
                                    And the best part? There's no limit to how much cashback you can earn. So, whether you're trading big or small, you'll always be rewarded for your efforts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <figure className='col-md-6 px-0'>
                        <img src="/assets/images/promotions/cashback/Slide1.jpg" />
                    </figure>
                </div>
            </div>
            <div className="promotion-heading px-3">
                <h3>How to participate in this offer?</h3>
                <p className='text-center'>This is Exclusive offer for Qondzo client’s and is valid for clients trading with the following Brokers:</p>
                <div className="promotion-brokers">
                    <figure>
                        <img src="/assets/images/clients/client-7.png" />
                    </figure>
                    <figure className='mt-3'>
                        <img src="/assets/images/clients/client-14.png" />
                    </figure>
                    <figure>
                        <img src="/assets/images/clients/client-13.png" />
                    </figure>
                    <figure>
                        <img src="/assets/images/clients/client-11.png" />
                    </figure>
                    <figure>
                        <img src="/assets/images/clients/exclusive-markets.png" />
                    </figure>
                </div>
                <p className='text-center'>To participate in this offer, the client needs to follow the steps below:</p>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 promotion-steps' style={{ display: 'flex', gap: '10px' }}>
                        <h4>1</h4>
                        <h5>Register with Qondzo</h5>
                    </div>
                    <div className='col-md-4 promotion-steps' style={{ display: 'flex', gap: '10px' }}>
                        <h4>2</h4>
                        <h5>Login to your account on www.qondzo.com</h5>
                    </div>
                    <div className='col-md-4 promotion-steps' style={{ display: 'flex', gap: '10px' }}>
                        <h4>3</h4>
                        <h5>Then select Thailand Luxury Trip Promotion in the offer and click on Sign Up for this offer</h5>
                    </div>
                </div>
                <div className='mt-4'>
                    <p>If you are a new customer and haven’t already registered with the Brokers listed above, then register with the broker of your choice from the above list using the sign-up link provided on the promotion page. Please note that if you do not sign up with the broker sign up link on the promotion page, you will not be able to avail this offer.</p>
                    <br /><p>If you are already registered with the Broker listed above, then you need to send an email to the Broker to change your Introducing Broker to “Qondzo”. Please note that if you do not change your Introducing Broker, you will not be able to avail this offer.</p>
                    <br /><p>Please note that this offer can also be availed on multiple Broker’s at the same time. Please see below Offer Conditions section for further clarification on this point.</p>
                </div>
            </div>
            <div className='trip-details row'>
                <figure className='col-md-6'>
                    <img src="/assets/images/banner/Slide2.png" />
                </figure>
                <div className='trip-description col-md-6'>
                    <h4 style={{ fontWeight: '600' }}>Offer Details</h4>
                    <ul>
                        <li className='li-decicaml'> If you are signing up with the above Brokers you must use one of the following trading accounts:
                            <ul className='list-style-none'>
                                <li><strong>a.</strong> If you are trading with Cabana Capitals, your account type must be either Active Trader, Standard or Ultra Account.</li>
                                <li><strong>b.</strong> If you are trading with OctaFx, your account type must be Octa Trader Account.</li>
                                <li><strong>c.</strong> If you are trading with Exness, your account type must be Standard Account.</li>
                                <li><strong>d.</strong> If you are trading with Exclusive Markets, your account type must be Standard or Standard Plus Account.</li>
                                <li><strong>e.</strong> If you are trading with Multibank, your account type must Standard or Pro Account.</li>
                            </ul>
                        </li>
                        <li className='li-decicaml'> The Cash Back will be calculated as per the following table:
                            <ul className='list-style-none'>
                                <li><strong>a.</strong> Cabana Capitals
                                    <ul className='list-style-none'>
                                        <li><strong>i.</strong> Active Trader - $6 Per Standard Qualified Lot</li>
                                        <li><strong>ii.</strong> Standard Account - $5 Per Standard Qualified Lot</li>
                                        <li><strong>iii.</strong> Ultra Account - $4 Per Standard Qualified Lot</li>
                                    </ul>
                                </li>
                                <li><strong>b.</strong> OctaFx
                                    <ul className='list-style-none'>
                                        <li><strong>i.</strong> Octa Trader Account - $4 Per Standard Qualified Lot</li>
                                    </ul>
                                </li>
                                <li><strong>c.</strong> Exness
                                    <ul className='list-style-none'>
                                        <li><strong>i.</strong> Standard Account - $2 Per Standard Qualified Lot</li>
                                    </ul>
                                </li>
                                <li><strong>d.</strong> Exclusive Markets
                                    <ul className='list-style-none'>
                                        <li><strong>i.</strong> Standard Account - $3 Per Standard Qualified Lot</li>
                                        <li><strong>ii.</strong> Standard Plus Account - $2 Per Standard Qualified Lot</li>
                                    </ul>
                                </li>
                                <li><strong>e.</strong> MultiBank
                                    <ul className='list-style-none'>
                                        <li><strong>i.</strong> Standard Account - $3 Per Standard Qualified Lot</li>
                                        <li><strong>ii.</strong> Pro Account - $1.5 Per Standard Qualified Lot</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='li-decicaml'> There is no minimum trade requirement and neither is there any limit on the maximum cash back which can be earned. However, every trade must qualify for it to be eligible for the cash back promotion. The qualification criteria is as following for the above brokers:
                            <ul className='list-style-none'>
                                <li><strong>a.</strong> Cabana Capitals – The trade must be open for a minimum of 3 minutes</li>
                                <li><strong>b.</strong> OctaFX - The trade must be open for a minimum of 3 minutes and there must be a 3 pip difference between opening and closing price.</li>
                                <li><strong>c.</strong> Exness – The trade must be open for a minimum of 3 minutes</li>
                                <li><strong>d.</strong> Multibank – The trade must be open for a minimum of 3 minutes</li>
                                <li><strong>e.</strong> Exclusive Markets - The trade must be open for a minimum of 3 minutes</li>
                            </ul>
                        </li>
                        <li className='li-decicaml'> As part of this great offer, Qondzo also gives you an opportunity to earn this Cash Back offer on multiple different Brokers simultaneously. E.g. if you trade with Cabana Capitals and OctaFx you can earn cash back on your trades in both the Brokers. Please refer to Clause 3 and 4 above to ensure that you have listed Qondzo as your Introducing Broker before your trading commence.</li>
                    </ul>


                </div>
            </div>


            <PromotionRules />
        </section>
    )
}

export default CashBackPromotion
