import React from 'react';

const index = () => {
    return (
        <div>
      <div className="boxed_wrapper home_3">

  {/*Search Popup*/}
  <div id="search-popup" className="search-popup">
    <div className="popup-inner">
      <div className="upper-box clearfix">
        <figure className="logo-box pull-left"><a href="index.html"><img src="assets/images/logo-5.png" alt /></a></figure>
        <div className="close-search pull-right"><i className="fa-solid fa-xmark" /></div>
      </div>
      <div className="overlay-layer" />
      <div className="auto-container">
        <div className="search-form">
          <form method="post" action="https://azim.hostlin.com/Bullion/index.html">
            <div className="form-group">
              <fieldset>
                <input type="search" className="form-control" name="search-input" defaultValue placeholder="Type your keyword and hit" required />
                <button type="submit"><i className="flaticon-loupe" /></button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* main header */}
  <header className="main-header header-style-three">
    {/* header-top */}
    <div className="header-top">
      <div className="auto-container">
        <div className="top-inner">
          <div className="support-box">
            <div className="icon-box"><img src="assets/images/icons/icon-47.png" alt /></div>
            <p><a href="tel:1222567890">+1 222 56 78 90</a> or Request for a <a href="tel:1222567890"><span>call back</span></a></p>
          </div>
          <div className="right-column">
            <div className="language-box">
              <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt /></div>
              <div className="select-box">
                <select className="wide">
                  <option data-display="English">English</option>
                  <option value={1}>Chinese</option>
                  <option value={2}>Hindi</option>
                  <option value={3}>Spanish</option>
                  <option value={4}>Turky</option>
                </select>
              </div>
            </div>
            <ul className="registration-box clearfix">
              <li>
                <div className="icon"><img src="assets/images/icons/icon-49.png" alt /></div>
                <a href="index-3.html">Login</a>
              </li>
              <li>
                <div className="icon"><img src="assets/images/icons/icon-50.png" alt /></div>
                <a href="index-3.html">Signup</a>
              </li>
            </ul>
            <ul className="social-links clearfix">
              <li><a href="index-3.html"><i className="fa-brands fa-instagram" /></a></li>
              <li><a href="index-3.html"><i className="fa-brands fa-square-twitter" /></a></li>
              <li><a href="index-3.html"><i className="fa-brands fa-facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* header-lower */}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><a href="index.html"><img src="assets/images/logo-5.png" alt /></a></figure>
          </div>
          <div className="menu-area">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="current dropdown"><a href="index.html">Home</a>
                    <ul>
                      <li><a href="index.html">Home One</a></li>
                      <li><a href="index-2.html">Home Two</a></li>
                      <li><a href="index-3.html">Home Three</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="index.html">Markets</a>
                    <ul>
                      <li><a href="markets.html">Markets</a></li>
                      <li><a href="market-details.html">Details Page</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="index.html">Trading</a>
                    <ul>
                      <li><a href="platform.html">Platform</a></li>
                      <li><a href="account.html">Our Accounts</a></li>
                      <li><a href="account-details.html">Standard Account</a></li>
                      <li><a href="account-details-2.html">Commision Account</a></li>
                      <li><a href="account-details-3.html">STP Pro Account</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="index.html">Education</a>
                    <ul>
                      <li><a href="education.html">Education</a></li>
                      <li><a href="education-details.html">Detail Page</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="index.html">About</a>
                    <ul>
                      <li><a href="about.html">Company</a></li>
                      <li><a href="history.html">History</a></li>
                      <li><a href="team.html">Team</a></li>
                      <li className="dropdown"><a href="index.html">Blog</a>
                        <ul>
                          <li><a href="blog.html">3 Columns</a></li>
                          <li><a href="blog-2.html">3 Columns Sidebar</a></li>
                          <li><a href="blog-3.html">List View 01</a></li>
                          <li><a href="blog-4.html">List View 02</a></li>
                          <li><a href="blog-details.html">Single Post</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="faq.html">Faq’s</a></li>
                      <li><a href="error.html">404</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="menu-right-content">
              <div className="search-box-outer search-toggler"><i className="flaticon-search" /></div>
              <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*sticky Header*/}
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><a href="index.html"><img src="assets/images/logo-5.png" alt /></a></figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
            <div className="menu-right-content">
              <div className="search-box-outer search-toggler"><i className="flaticon-search" /></div>
              <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* main-header end */}
  {/* Mobile Menu  */}
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn"><i className="fas fa-times" /></div>
    <nav className="menu-box">
      <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-6.png" alt title /></a></div>
      <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Chicago 12, Melborne City, USA</li>
          <li><a href="tel:+8801682648101">+88 01682648101</a></li>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li><a href="index.html"><span className="fab fa-twitter" /></a></li>
          <li><a href="index.html"><span className="fab fa-facebook-square" /></a></li>
          <li><a href="index.html"><span className="fab fa-pinterest-p" /></a></li>
          <li><a href="index.html"><span className="fab fa-instagram" /></a></li>
          <li><a href="index.html"><span className="fab fa-youtube" /></a></li>
        </ul>
      </div>
    </nav>
  </div>{/* End Mobile Menu */}
  {/* banner-style-three */}
  <section className="banner-style-three centred">
    <div className="pattern-layer">
      <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-23.png)'}} />
      <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-24.png)'}} />
    </div>
    <div className="image-layer">
      <figure className="image-1"><img src="assets/images/banner/banner-img-1.png" alt /></figure>
      <figure className="image-2 float-bob-y"><img src="assets/images/banner/banner-img-2.png" alt /></figure>
      <figure className="image-3 float-bob-y"><img src="assets/images/banner/banner-img-3.png" alt /></figure>
      <figure className="image-4 float-bob-x"><img src="assets/images/banner/banner-img-4.png" alt /></figure>
    </div>
    <div className="auto-container">
      <div className="content-box">
        <div className="inner-box">
          <h5>Market Capitalisation</h5>
          <h2>3.7 <span>B</span></h2>
          <div className="graph-box"><img src="assets/images/icons/graph-5.png" alt /></div>
        </div>
        <div className="upper-box">
          <h2><span>Leading</span> the way <br />in Online Forex <span>Trading</span></h2>
          <p>Deaching of the great explorer of the truth builder <br />of human happiness.</p>
          <a href="index-3.html" className="theme-btn"><span>Try Free Demo</span></a>
        </div>
        <div className="lower-box">
          <div className="icon-box"><img src="assets/images/icons/icon-44.png" alt /></div>
          <ul className="rating clearfix">
            <li><i className="flaticon-star" /></li>
            <li><i className="flaticon-star" /></li>
            <li><i className="flaticon-star" /></li>
            <li><i className="flaticon-star" /></li>
            <li><i className="flaticon-star" /></li>
          </ul>
          <p>4.8 Rating Based on 2.5k Reviews. <a href="index-3.html"><span>Read Reviews</span></a></p>
        </div>
      </div>
    </div>
  </section>
  {/* banner-style-three end */}
  {/* feature-section */}
  <section className="feature-section centred">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-inner">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}} />
                <div className="icon-box"><img src="assets/images/icons/icon-51.png" alt /></div>
              </div>
              <h6>We Offer</h6>
              <h3><a href="index-3.html">Technical Analysis</a></h3>
              <p>Find fault with a man who chooses to annoying consequences.</p>
              <div className="link-box">
                <a href="index-3.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-inner">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}} />
                <div className="icon-box"><img src="assets/images/icons/icon-52.png" alt /></div>
              </div>
              <h6>We Offer</h6>
              <h3><a href="index-3.html">Fundamental Analysis</a></h3>
              <p>Great explorer of the truth the master builder human happiness.</p>
              <div className="link-box">
                <a href="index-3.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-inner">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}} />
                <div className="icon-box"><img src="assets/images/icons/icon-53.png" alt /></div>
              </div>
              <h6>We Offer</h6>
              <h3><a href="index-3.html">Sentiment Analysis</a></h3>
              <p>Tationally encount consequences that again is there anyone.</p>
              <div className="link-box">
                <a href="index-3.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* feature-section end */}
  {/* pricing-style-three */}
  <section className="pricing-style-three">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-26.png)'}} />
    <div className="auto-container">
      <div className="sec-title centred">
        <span className="sub-title">Popular Pairs</span>
        <h2>Top <span>Pricing List</span> in Market</h2>
      </div>
      <div className="row clearfix">
        <div className="col-xl-12 col-lg-12 col-md-12 big-column">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-two">
                <div className="inner-box">
                  <div className="link red"><a href="index-3.html"><i className="flaticon-right-down" /></a></div>
                  <div className="currency-box">
                    <ul className="list-item clearfix">
                      <li>eur</li>
                      <li><i className="flaticon-exchange" /></li>
                      <li>usd</li>
                    </ul>
                    <span className="currency-rate red">-0.14%</span>
                  </div>
                  <p><span>$1.06199 USD</span><span>Sell at 1.06185</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-two">
                <div className="inner-box">
                  <div className="link green"><a href="index-3.html"><i className="flaticon-right-down" /></a></div>
                  <div className="currency-box">
                    <ul className="list-item clearfix">
                      <li>usd</li>
                      <li><i className="flaticon-exchange" /></li>
                      <li>jpy</li>
                    </ul>
                    <span className="currency-rate green">+0.04%</span>
                  </div>
                  <p><span>$1.22195 USD</span><span>Sell at 1.06199</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 pricing-block">
              <div className="pricing-block-two">
                <div className="inner-box">
                  <div className="link green"><a href="index-3.html"><i className="flaticon-right-down" /></a></div>
                  <div className="currency-box">
                    <ul className="list-item clearfix">
                      <li>usd</li>
                      <li><i className="flaticon-exchange" /></li>
                      <li>jpy</li>
                    </ul>
                    <span className="currency-rate green">+0.04%</span>
                  </div>
                  <p><span>$1.22195 USD</span><span>Sell at 1.06199</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12 col-md-12 big-column offset-xl-2">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-two">
                <div className="inner-box">
                  <div className="link green"><a href="index-3.html"><i className="flaticon-right-down" /></a></div>
                  <div className="currency-box">
                    <ul className="list-item clearfix">
                      <li>usd</li>
                      <li><i className="flaticon-exchange" /></li>
                      <li>jpy</li>
                    </ul>
                    <span className="currency-rate green">+0.04%</span>
                  </div>
                  <p><span>$1.22195 USD</span><span>Sell at 1.06199</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-two">
                <div className="inner-box">
                  <div className="link red"><a href="index-3.html"><i className="flaticon-right-down" /></a></div>
                  <div className="currency-box">
                    <ul className="list-item clearfix">
                      <li>eur</li>
                      <li><i className="flaticon-exchange" /></li>
                      <li>usd</li>
                    </ul>
                    <span className="currency-rate red">-0.14%</span>
                  </div>
                  <p><span>$1.06199 USD</span><span>Sell at 1.06185</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-box centred">
        <a href="index-3.html"><span>See More Pairs</span></a>
      </div>
    </div>
  </section>
  {/* pricing-style-three end */}
  {/* markets-section */}
  <section className="markets-section sec-pad">
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">Markets</span>
        <h2>Wide Range of <span>Markets</span></h2>
      </div>
      <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
        <div className="markets-block-one">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="assets/images/resource/market-1.jpg" alt /></figure>
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}} />
            </div>
            <div className="lower-content">
              <h3><a href="market-details.html">Trade Forex</a></h3>
              <p>To take a trivial example which of to some advantage.</p>
              <div className="link-box">
                <a href="market-details.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="markets-block-one">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="assets/images/resource/market-2.jpg" alt /></figure>
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}} />
            </div>
            <div className="lower-content">
              <h3><a href="market-details.html">Trade Gold &amp; Silver</a></h3>
              <p>Temporibus autem quibusdam et officiis debitis aut rerum.</p>
              <div className="link-box">
                <a href="market-details.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="markets-block-one">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="assets/images/resource/market-3.jpg" alt /></figure>
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}} />
            </div>
            <div className="lower-content">
              <h3><a href="market-details.html">Trade Oil &amp; Gas</a></h3>
              <p>Dignissimos ducimus qui blandiis praesentium voluptatum.</p>
              <div className="link-box">
                <a href="market-details.html"><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* markets-section end */}
  {/* ebook-section */}
  <section className="ebook-section">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
          <div className="image-box">
            <div className="image-shape" style={{backgroundImage: 'url(assets/images/shape/shape-28.png)'}} />
            <figure className="image"><img src="assets/images/resource/ipad-1.png" alt /></figure>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content-box">
            <div className="sec-title">
              <span className="sub-title">Ebook</span>
              <h2>Ebook Series for <br />Forex Trading <span>Beginners</span></h2>
            </div>
            <div className="text-box">
              <p>Minus id quod maxime place at facere possimus, omnis voluptas assu- menda omnis dolors repellendus tempor.</p>
            </div>
            <h6>Ebook Highlights</h6>
            <ul className="list-item clearfix">
              <li><h4>Ultra fast trade execution <span>01</span></h4></li>
              <li><h4>Trading from a smartphone or tablet <span>02</span></h4></li>
              <li><h4>No dealing desk, no requotes <span>03</span></h4></li>
            </ul>
            <div className="btn-box">
              <button type="button" className="theme-btn"><span>Download</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ebook-section end */}
  {/* chooseus-style-two */}
  <section className="chooseus-style-two sec-pad">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-20.png)'}} />
    <figure className="image-layer"><img src="assets/images/resource/chooseus-1.png" alt /></figure>
    <div className="auto-container">
      <div className="sec-title centred light">
        <span className="sub-title">Why Bullion</span>
        <h2>Reason For <span>Choose Bullion</span></h2>
      </div>
      <div className="inner-box">
        <div className="left-column">
          <div className="single-item">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-16.png)'}} />
            <div className="icon-box">
              <div className="icon"><img src="assets/images/icons/icon-40.png" alt /></div>
            </div>
            <div className="title-text"><h3>Friendly &amp; Expert<span>01</span></h3></div>
            <p>Beatae vitae dicta sun explicabo enim ipsam voluptatem volupta.</p>
          </div>
          <div className="single-item">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-17.png)'}} />
            <div className="title-text"><h3>Demo account<span>03</span></h3></div>
            <p>Omnis iste natus error sit volup minima accusantium doloremque.</p>
            <div className="icon-box">
              <div className="icon"><img src="assets/images/icons/icon-41.png" alt /></div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="single-item">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-18.png)'}} />
            <div className="icon-box">
              <div className="icon"><img src="assets/images/icons/icon-40.png" alt /></div>
            </div>
            <div className="title-text"><h3>24/7 Support<span>02</span></h3></div>
            <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
          </div>
          <div className="single-item">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-19.png)'}} />
            <div className="title-text"><h3>Award winner<span>04</span></h3></div>
            <p>Beguiled demoralized charms nonsed pleasure of the moment.</p>
            <div className="icon-box">
              <div className="icon"><img src="assets/images/icons/icon-41.png" alt /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* chooseus-style-two end */}
  {/* platform-style-two */}
  <section className="platform-style-two">
    <div className="auto-container">
      <div className="upper-box">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <div className="image-shape" style={{backgroundImage: 'url(assets/images/shape/shape-29.png)'}} />
              <figure className="image"><img src="assets/images/resource/mac-1.png" alt /></figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title">
                <span className="sub-title">Platform</span>
                <h2>Trade Forex from your <span>Desktop</span></h2>
              </div>
              <div className="text-box">
                <p>Laborious physical exercise, except to obtain some advantage from it but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
              </div>
              <ul className="download-list clearfix">
                <li>
                  <div className="icon-box"><i className="fa-brands fa-apple" /></div>
                  <div className="link-box"><a href="index-3.html"><span>Download App For IOS</span></a></div>
                </li>
                <li>
                  <div className="icon-box"><i className="fa-brands fa-windows" /></div>
                  <div className="link-box"><a href="index-3.html"><span>Download App For Windows</span></a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-30.png)'}} />
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Multiple Order Types <span>01</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Multiple Charting <span>02</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Newsfeeds  <span>03</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Technical Indicators <span>04</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Stop Loss Facilities <span>05</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="static-content">
                <h4><img src="assets/images/icons/icon-54.png" alt />Multilingual Support <span>06</span></h4>
              </div>
              <div className="overlay-content">
                <p>Beatae vitae dicta sun explicabo nemo enim ipsam voluptatem volupta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* platform-style-two end */}
  {/* benefits-section */}
  <section className="benefits-section">
    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/benefits-bg.jpg)'}} />
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-32.png)'}} />
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-xl-6 col-lg-12 col-md-12 content-column">
          <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            <div className="content-box">
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-31.png)'}} />
              <div className="sec-title">
                <h2>Open an Account &amp; Get <span>Benefits</span></h2>
              </div>
              <h3>Standard Account<span>01</span></h3>
              <ul className="list-item clearfix">
                <li>Maxime placefacere possimus menda omni tempor.</li>
                <li>Right to find fault with a man.</li>
                <li>Avoids a pain that produces no resultant. </li>
              </ul>
              <div className="btn-box">
                <a href="index-3.html" className="theme-btn"><span>Open Your A/c</span></a>
              </div>
            </div>
            <div className="content-box">
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-31.png)'}} />
              <div className="sec-title">
                <h2>Open an Account &amp; Get <span>Benefits</span></h2>
              </div>
              <h3>Standard Account<span>01</span></h3>
              <ul className="list-item clearfix">
                <li>Maxime placefacere possimus menda omni tempor.</li>
                <li>Right to find fault with a man.</li>
                <li>Avoids a pain that produces no resultant. </li>
              </ul>
              <div className="btn-box">
                <a href="index-3.html" className="theme-btn"><span>Open Your A/c</span></a>
              </div>
            </div>
            <div className="content-box">
              <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-31.png)'}} />
              <div className="sec-title">
                <h2>Open an Account &amp; Get <span>Benefits</span></h2>
              </div>
              <h3>Standard Account<span>01</span></h3>
              <ul className="list-item clearfix">
                <li>Maxime placefacere possimus menda omni tempor.</li>
                <li>Right to find fault with a man.</li>
                <li>Avoids a pain that produces no resultant. </li>
              </ul>
              <div className="btn-box">
                <a href="index-3.html" className="theme-btn"><span>Open Your A/c</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* benefits-section end */}
  {/* news-style-three */}
  <section className="news-style-three">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12 col-sm-12 left-column">
          <div className="left-content">
            <div className="sec-title">
              <span className="sub-title">News &amp; Updates</span>
              <h2>Read Recent Post From <span>Blog</span></h2>
              <p>Error sit voluptatem accusantium doloremque quia dolor sit amet, consectetu...</p>
              <div className="link-box">
                <a href="blog-3.html"><span>More News</span></a>
              </div>
            </div>
            <div className="subscribe-box">
              <h3>Subscribe Us</h3>
              <p>Receive news &amp; updates to your inbox.</p>
              <div className="form-inner">
                <form action="https://azim.hostlin.com/Bullion/contact.html" method="post">
                  <div className="form-group">
                    <div className="icon"><i className="far fa-envelope-open" /></div>
                    <input type="email" name="email" placeholder="Email address..." required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="theme-btn"><span>Subscribe</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 right-column">
          <div className="right-content">
            <div className="news-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-8.jpg" alt /></a></figure>
                  <span className="post-date">24 Dec</span>
                </div>
                <div className="lower-content">
                  <h3><a href="blog-details.html">Best FTSE 250 shares to buy in February 2023</a></h3>
                  <p>Error sit voluptatem accusantium doloremque quia dolor sit amet, consectetu...</p>
                  <div className="author-box">
                    <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt /></figure>
                    <h6>Trade Ideas</h6>
                    <ul className="post-info clearfix">
                      <li><span>By</span> <a href="blog-details.html">Justin Langer</a></li>
                      <li><span className="dots">..</span></li>
                      <li>2 Mins Read</li>
                    </ul>
                  </div>
                  <div className="link-box">
                    <a href="blog-details.html"><span>Read More</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-9.jpg" alt /></a></figure>
                  <span className="post-date">16 Dec</span>
                </div>
                <div className="lower-content">
                  <h3><a href="blog-details.html">Fixed vs floating exchange rates main differences</a></h3>
                  <p>Rerum facilis est et expedita distinctio libero magnam aliquam quaerat...</p>
                  <div className="author-box">
                    <figure className="author-thumb"><img src="assets/images/news/author-2.jpg" alt /></figure>
                    <h6>Economic</h6>
                    <ul className="post-info clearfix">
                      <li><span>By</span> <a href="blog-details.html">Mylah Sophia</a></li>
                      <li><span className="dots">..</span></li>
                      <li>3 Mins Read</li>
                    </ul>
                  </div>
                  <div className="link-box">
                    <a href="blog-details.html"><span>Read More</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* news-style-three end */}
  {/* contact-section */}
  <section className="contact-section sec-pad centred">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-33.png)'}} />
    <div className="auto-container">
      <div className="sec-title light">
        <span className="sub-title">Drop a Line</span>
        <h2>Send Your <span>Message</span> to us</h2>
      </div>
      <form method="post" action="https://azim.hostlin.com/Bullion/sendemail.php" id="contact-form">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 left-column">
            <div className="left-content">
              <div className="form-group">
                <input type="text" name="username" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" name="phone" placeholder="Phone" required />
                <div className="language-picker js-language-picker">
                  <label htmlFor="language-picker-select" />
                  <select id="language-picker-select">
                    <option lang="de" value="deutsch">de</option>
                    <option lang="en" value="english" selected>en</option>
                    <option lang="fr" value="francais">fr</option>
                    <option lang="it" value="italiano">it</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 right-column">
            <div className="right-content">
              <div className="form-group">
                <textarea name="message" placeholder="Write Your Message Here..." defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
        <div className="check-box">
          <input className="check" type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1">Agree to our private policies &amp; Conditions.</label>
        </div>
        <div className="message-btn">
          <button type="submit" className="theme-btn" name="submit-form"><span>Send Now</span></button>
        </div>
      </form>
    </div>
  </section>
  {/* contact-section end */}
  {/* footer-style-three */}
  <footer className="footer-style-three">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}} />
    <div className="widget-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
              <figure className="footer-logo"><a href="index-3.html"><img src="assets/images/logo-5.png" alt /></a></figure>
              <div className="widget-content">
                <h3>Have queries?</h3>
                <p><a href="mailto:supportyou@example.com">supportyou@example.com</a> <br /> <a href="tel:0884567890">+088 45 678 90</a></p>
                <ul className="social-links clearfix">
                  <li><a href="index-3.html"><i className="fa-brands fa-facebook" /></a></li>
                  <li><a href="index-3.html"><i className="fa-brands fa-square-twitter" /></a></li>
                  <li><a href="index-3.html"><i className="fa-brands fa-instagram" /></a></li>
                  <li><a href="index-3.html"><i className="fa-brands fa-square-pinterest" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h3>Company</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="index-3.html">About Us</a></li>
                  <li><a href="index-3.html">Careers</a></li>
                  <li><a href="index-3.html">Meet Our Team</a></li>
                  <li><a href="index-3.html">Process</a></li>
                  <li><a href="index-3.html">Mission &amp; Vision</a></li>
                  <li><a href="index-3.html">Faq’s</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h3>Useful Links</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="index-3.html">Trading Tools</a></li>
                  <li><a href="index-3.html">Pricing List</a></li>
                  <li><a href="index-3.html">Account Types</a></li>
                  <li><a href="index-3.html">MT4 Platform</a></li>
                  <li><a href="index-3.html">Mobile App</a></li>
                  <li><a href="index-3.html">Policies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget apps-widget">
              <div className="widget-title">
                <h3>Our App</h3>
              </div>
              <div className="widget-content">
                <p>Download our app &amp; keep track the markets.</p>
                <ul className="list-item clearfix">
                  <li>Smart alert notifications</li>
                  <li>Instant currency exchange</li>
                </ul>
                <ul className="download-apps clearfix">
                  <li><a href="index-2.html"><i className="fa-brands fa-windows" /></a></li>
                  <li><a href="index-2.html"><i className="fa-brands fa-apple" /></a></li>
                  <li><a href="index-2.html"><i className="fa-brands fa-android" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-three centred">
      <div className="auto-container">
        <div className="copyright">
          <p>© 2023 Bullion. All Rights Reserved. <a href="index-3.html">Policies,</a> <a href="index-3.html">Terms &amp; Conditions.</a></p>
        </div>
      </div>
    </div>
  </footer>
  {/* footer-style-three end */}
  {/* scroll to top */}
  <button className="scroll-top scroll-to-target" data-target="html">
    <i className="flaticon-up-arrow" />
  </button>
</div>



        </div>
    );
};

export default index;
