import React from 'react'
import '../promotions.css'

function DubaiPromotion() {
  return (
    <section className='promotion-wrapper'>
      <div className='top-banner'>
        <figure>
          <img src="/assets/images/banner/TopBanner.jpg" />
        </figure>
      </div>
      <div className="promotion-heading">
        <h3>Dubai Trip Offer</h3>
        <p>Embark on an extraordinary journey to Dubai</p>
      </div>
      <div className="promotion-banner">
        <figure>
          <img src="/assets/images/banner/TripDetails.png"/>
        </figure>
        <figure>
          <img src="/assets/images/banner/HowtoParticipate.png"/>
        </figure>
        <figure>
          <img src="/assets/images/banner/OfferDetails.png"/>
        </figure>
      </div>

    </section>
  )
}

export default DubaiPromotion
