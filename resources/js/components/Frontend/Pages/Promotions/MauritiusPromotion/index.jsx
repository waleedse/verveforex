import React from 'react'
import '../promotions.css'
import PromotionRules from './components/PromotionRules'


function MauritiusPromotion() {
    return (
        <section className='promotion-wrapper cashback'>
            <div className='top-banner'>
                <figure>
                    <img src="/assets/images/promotions/mauritius/TopBanner.jpg" />
                </figure>
            </div>
            <div className="container">
                <div className="promotion-heading">
                    <h3>Mauritius Trip Offer</h3>
                    <p className='text-center'>Indulge in a luxurious getaway to Mauritius!</p>

                </div>
                <div className="promotion-banner mt-3">
                    <figure>
                        <img src="/assets/images/promotions/mauritius/TripDetails.png" />
                    </figure>
                    <figure>
                        <img src="/assets/images/promotions/mauritius/HowtoParticipate.png" />
                    </figure>
                    <figure>
                        <img src="/assets/images/promotions/mauritius/OfferDetails.png" />
                    </figure>
                </div>
                <p className='promotion-details'>
                    Indulge in a luxurious getaway to Mauritius, where luxury and opportunity collide in our elite trip designed for forex traders. Get ready to experience the extravagant lifestyle of the city while delving into profitable trading opportunities in one of the globe's most vibrant financial centers.
                </p>
                <p className='promotion-details'>
                    Begin your lavish journey to Mauritius with a gracious reception that sets the stage for an opulent experience. Your accommodations will exude a mix of luxury and elegance, whether you opt for a chic high-rise hotel boasting panoramic city views or a sumptuous resort tucked away on pristine beaches. Your stay is guaranteed to be truly exceptional.
                </p>
                <p className='promotion-details'>

                    Experience the ultimate fusion of opulence and potential on our lavish trip to Mauritius, where you can expect an unforgettable journey that will ignite your inspiration and empower you to capitalize on fresh trading prospects in one of the globe's most vibrant markets.
                </p>

            </div>
            <div className='trip-details row'>

                <div className='trip-description col-md-6 '>
                    <h4 className='px-3' style={{ fontWeight: '600' }}>Trip Details</h4>
                    <p className='px-3'>By taking part in this exclusive promotion, you have the opportunity to
                        win a truly luxurious trip to Mauritius, featuring:</p>

                    <ul className='px-5'>

                        <li> A Lavish 5 Days/4 Nights Luxury trip in Mauritius for the lucky winner </li>
                        <li> Enjoy round-trip economy class airline tickets to the vibrant city of Mauritius</li>
                        <li> Indulge in a lavish stay at a top-tier hotel for a specified number of nights</li>
                        <li> Visa processing fees for your visit to the Mauritius are included</li>
                        <li> Explore Mauritius’s most sought-after attractions during your stay including
                            a visit to Flic and Flac, the Grand Baie, Port Louis, Riverboat trip along the
                            Mont Choisy beach and Tamarin Bay and more.</li>
                        <li> Daily Breakfast in the hotel</li>
                        <li> Airport pick up and drop off</li>
                        <li> Verve Forex will not cover additional expenses such as meals, personal
                            expenses, travel insurance, or any other cost not explicitly mentioned above</li>
                    </ul>

                </div>
                <figure className='col-md-6'>
                    <img style={{ width: '100%', height: '500px' }} src="/assets/images/promotions/mauritius/Slide2.png" />
                </figure>
            </div>

            <div className="promotion-heading px-3">
                <h3>How to participate in this offer?</h3>
                <p className='text-center'>This is Exclusive offer for Verve Forex client’s and is valid for clients trading with the following Brokers:</p>
                <div className="promotion-brokers">
                    <figure>
                        <img src="/assets/images/clients/client-7.png" />
                    </figure>
                    <figure>
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
                        <h5>Register with Verve Forex</h5>
                    </div>
                    <div className='col-md-4 promotion-steps' style={{ display: 'flex', gap: '10px' }}>
                        <h4>2</h4>
                        <h5>Login to your account on www.verveforex.com</h5>
                    </div>
                    <div className='col-md-4 promotion-steps' style={{ display: 'flex', gap: '10px' }}>
                        <h4>3</h4>
                        <h5>Then select Mauritius Luxury Trip
                            Promotion in the offer and click
                            on Sign Up for this offer</h5>
                    </div>
                </div>
            </div>
            <div className='trip-details row'>
                <figure className='col-md-6'>
                    <img style={{ width: '100%', height: '600px' }} src="/assets/images/banner/Slide2.png" />
                </figure>
                <div className='trip-description col-md-6'>
                    <h4 style={{ fontWeight: '600' }}>Offer Details</h4>
                    <ul>
                        <li>
                            <p>If you are signing up with the above Brokers you must use one of the following trading accounts:</p>
                            <ul>
                                <li>If you are trading with Cabana Capitals, your account type must be either Standard or Ultra Account.</li>
                                <li>If you are trading with OctaFx your account type must be Octa Trader Account.</li>
                                <li>If you are trading with Exness your account type must be Standard Account.</li>
                                <li>If you are trading with Exclusive Markets your account type must be Standard or Standard Plus Account.</li>
                            </ul>
                        </li>
                        <li>
                            <p>A minimum trading volume of standard lots during the Promotion Period</p>
                            <ul>
                                <li>600 Qualified (See Point X below for Qualified Lots) Standard lots to win a trip to Dubai for Single Person.</li>
                                <li>1,000 qualified (See Point X below for Qualified Lots) Standard lots to win a trip to Dubai for a Couple.</li>
                            </ul>
                        </li>
                        <li>Qualified lot means that the trade must be open for at least 3 minutes and the difference between the opening and closing price must be at least 3 pips.</li>
                        <li>
                            <p>As part of this great offer, Verve Forex also gives you an opportunity to combine the above number of lots over multiple brokers e.g.</p>
                            <ul>
                                <li>If you trade 400 lots with Cabana Capitals and 200 lots with OctaFx, you can still avail this offer. Please note that the accounts you are using for this offer are as per the account types listed above and also the Introducing Broker on your profile must be Verve Forex under all the Broker’s you will be using.</li>
                            </ul>
                        </li>
                    </ul>


                </div>
            </div>


            <PromotionRules />
        </section >
    )
}

export default MauritiusPromotion
