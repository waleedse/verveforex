import React from 'react';

const index = () => {
    return (
        <div>
   <div className="boxed_wrapper home_2">
  {/* preloader */}
  <div className="loader-wrap">
    <div className="preloader">
      <div className="preloader-close">x</div>
      <div id="handle-preloader" className="handle-preloader">
        <div className="animation-preloader">
          <div className="spinner" />
          <div className="txt-loading">
            <span data-text-preloader="b" className="letters-loading">
              b
            </span>
            <span data-text-preloader="u" className="letters-loading">
              u
            </span>
            <span data-text-preloader="l" className="letters-loading">
              l
            </span>
            <span data-text-preloader="l" className="letters-loading">
              l
            </span>
            <span data-text-preloader="i" className="letters-loading">
              i
            </span>
            <span data-text-preloader="o" className="letters-loading">
              o
            </span>
            <span data-text-preloader="n" className="letters-loading">
              n
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* preloader end */}
  {/*Search Popup*/}
  <div id="search-popup" className="search-popup">
    <div className="popup-inner">
      <div className="upper-box clearfix">
        <figure className="logo-box pull-left"><a href="index.html"><img src="assets/images/logo-3.png" alt /></a></figure>
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
  <header className="main-header header-style-two">
    {/* header-top */}
    <div className="header-top">
      <div className="outer-container">
        <div className="left-column">
          <div className="language-box">
            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt /></div>
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
          <ul className="links-list clearfix">
            <li><a href="index-2.html">Faq’s</a></li>
            <li><a href="index-2.html">Career</a></li>
            <li><a href="index-2.html">News</a></li>
          </ul>
        </div>
        <div className="right-column">
          <div className="support-box">
            <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt /></div>
            <a href="index-2.html">Help Center</a>
          </div>
          <ul className="social-links clearfix">
            <li><a href="index-2.html"><i className="fa-brands fa-facebook" />3.2m Followers</a></li>
            <li><a href="index-2.html"><i className="fa-brands fa-square-twitter" />1.5m Followers</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* header-lower */}
    <div className="header-lower">
      <div className="outer-container">
        <div className="outer-box">
          <div className="menu-area">
            <div className="logo-box">
              <figure className="logo"><a href="index.html"><img src="assets/images/logo-3.png" alt /></a></figure>
            </div>
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
          </div>
          <div className="menu-right-content">
            <div className="search-box-outer search-toggler"><i className="flaticon-search" /></div>
            <div className="clients-box">
              <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt /></div>
              <a href="index.html">Client Portal<i className="flaticon-right-down" /></a>
            </div>
            <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
          </div>
        </div>
      </div>
    </div>
    {/*sticky Header*/}
    <div className="sticky-header">
      <div className="outer-container">
        <div className="outer-box">
          <div className="menu-area">
            <div className="logo-box">
              <figure className="logo"><a href="index.html"><img src="assets/images/logo-4.png" alt /></a></figure>
            </div>
            <nav className="main-menu clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
          </div>
          <div className="menu-right-content">
            <div className="search-box-outer search-toggler"><i className="flaticon-search" /></div>
            <div className="clients-box">
              <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt /></div>
              <a href="index.html">Client Portal<i className="flaticon-right-down" /></a>
            </div>
            <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
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
      <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-4.png" alt title /></a></div>
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
  {/* banner-style-two */}
  <section className="banner-style-two">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-8.png)'}} />
    <div className="banner-carousel owl-theme owl-carousel owl-dots-none nav-style-one">
      <div className="slide-item">
        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-5.jpg)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-7 col-lg-12 col-md-12 content-column">
              <div className="content-box">
                <div className="video-btn">
                  <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play" />How to Trade</a>
                </div>
                <h2>Future of <br />Trading is Here</h2>
                <p>Deaching of the great explorer of the truth the builder <br />of human happiness.</p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn btn-one"><span>Try Free Demo</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-6.jpg)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
              <div className="content-box">
                <div className="video-btn">
                  <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play" />How to Trade</a>
                </div>
                <h2>The Safest <br />Place to Trade</h2>
                <p>Deaching of the great explorer of the truth the builder <br />of human happiness.</p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn btn-one"><span>Try Free Demo</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-7.jpg)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-7 col-lg-12 col-md-12 content-column">
              <div className="content-box">
                <div className="video-btn">
                  <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play" />How to Trade</a>
                </div>
                <h2>Our Insights <br />Your Evolution</h2>
                <p>Deaching of the great explorer of the truth the builder <br />of human happiness.</p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn btn-one"><span>Try Free Demo</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner-style-two end */}
  {/* funfact-section */}
  <section className="funfact-section sec-pad centred">
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">Interesting Numbers</span>
        <h2><span>Achievements</span> of our Company</h2>
      </div>
      <div className="inner-box">
        <div className="funfact-block-one">
          <div className="shape">
            <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
            <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
            <div className="shape-3" style={{backgroundImage: 'url(assets/images/shape/shape-11.png)'}} />
          </div>
          <div className="count-outer count-box">
            <span className="count-text" data-speed={1500} data-stop={49}>0</span><span className="small-text">M</span>
          </div>
          <p>Active Traders</p>
          <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt /></div>
        </div>
        <div className="funfact-block-one">
          <div className="shape">
            <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
            <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
            <div className="shape-3" style={{backgroundImage: 'url(assets/images/shape/shape-11.png)'}} />
          </div>
          <div className="count-outer count-box">
            <span className="count-text" data-speed={1500} data-stop="3.7">0</span><span className="small-text">B</span>
          </div>
          <p>Market Capitalisation</p>
          <div className="icon-box"><img src="assets/images/icons/icon-33.png" alt /></div>
        </div>
        <div className="funfact-block-one">
          <div className="shape">
            <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
            <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
            <div className="shape-3" style={{backgroundImage: 'url(assets/images/shape/shape-11.png)'}} />
          </div>
          <div className="count-outer count-box">
            <span className="count-text" data-speed={1500} data-stop="73.4">0</span><span className="small-text">M</span>
          </div>
          <p>Total Revenue</p>
          <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt /></div>
        </div>
        <div className="funfact-block-one">
          <div className="shape">
            <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
            <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
            <div className="shape-3" style={{backgroundImage: 'url(assets/images/shape/shape-11.png)'}} />
          </div>
          <div className="count-outer count-box">
            <span className="count-text" data-speed={1500}>0</span><span className="small-text">M</span>
          </div>
          <p>Awards Won</p>
          <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt /></div>
        </div>
        <div className="funfact-block-one">
          <div className="shape">
            <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
            <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
            <div className="shape-3" style={{backgroundImage: 'url(assets/images/shape/shape-11.png)'}} />
          </div>
          <div className="count-outer count-box">
            <span className="count-text" data-speed={1500} data-stop={99}>0</span><span>+</span>
          </div>
          <p>Offices &amp; Branches</p>
          <div className="icon-box"><img src="assets/images/icons/icon-36.png" alt /></div>
        </div>
      </div>
      <div className="lower-box">
        <ul className="author-box clearfix">
          <li><img src="assets/images/resource/author-1.png" alt /></li>
          <li><img src="assets/images/resource/author-2.png" alt /></li>
          <li><img src="assets/images/resource/author-3.png" alt /></li>
        </ul>
        <h5>Average rating of 4.89/5 <br />on Trustpilot</h5>
      </div>
    </div>
  </section>
  {/* funfact-section end */}
  {/* pricing-style-two */}
  <section className="pricing-style-two bg-color-2 sec-pad">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-12.png)'}} />
    <div className="auto-container">
      <div className="title-box">
        <div className="sec-title light">
          <span className="sub-title">Forex Trading</span>
          <h2>Top <span>Pricing</span> List in Market</h2>
        </div>
        <div className="chat-box">
          <figure className="thumb-box"><img src="assets/images/resource/chat-1.jpg" alt /></figure>
          <div className="link-box"><a href="contact.html"><span>Live Chat With <br />Expert</span></a></div>
        </div>
      </div>
      <div className="row  clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
          <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="currency-box">
                <ul className="list-item">
                  <li><img src="assets/images/icons/flag-1.png" alt />eur</li>
                  <li><img src="assets/images/icons/flag-2.png" alt />usd</li>
                </ul>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Sell<span>Buy</span></li>
                  <li className="red">$1.06199<span className="yellow">$1.06185</span></li>
                  <li>Spread <br /><span className="green">-0.14</span><a href="index-2.html">Trade</a></li>
                </ul>
              </div>
              <div className="graph-box">
                <div className="graph"><img src="assets/images/icons/graph-1.png" alt /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
          <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="currency-box">
                <ul className="list-item">
                  <li><img src="assets/images/icons/flag-2.png" alt />usd</li>
                  <li><img src="assets/images/icons/flag-3.png" alt />jpy</li>
                </ul>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Sell<span>Buy</span></li>
                  <li className="yellow">$1.22195<span className="red">$1.22199</span></li>
                  <li>Spread <br /><span className="green">+0.04</span><a href="index-2.html">Trade</a></li>
                </ul>
              </div>
              <div className="graph-box">
                <div className="graph"><img src="assets/images/icons/graph-2.png" alt /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
          <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="currency-box">
                <ul className="list-item">
                  <li><img src="assets/images/icons/flag-4.png" alt />gbp</li>
                  <li><img src="assets/images/icons/flag-2.png" alt />usd</li>
                </ul>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Sell<span>Buy</span></li>
                  <li className="yellow">$0.65982<span className="red">$0.65994</span></li>
                  <li>Spread <br /><span className="green">+0.12</span><a href="index-2.html">Trade</a></li>
                </ul>
              </div>
              <div className="graph-box">
                <div className="graph"><img src="assets/images/icons/graph-3.png" alt /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
          <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="currency-box">
                <ul className="list-item">
                  <li><img src="assets/images/icons/flag-5.png" alt />aud</li>
                  <li><img src="assets/images/icons/flag-2.png" alt />cad</li>
                </ul>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Sell<span>Buy</span></li>
                  <li className="red">$14.785<span className="yellow">$13.625</span></li>
                  <li>Spread <br /><span className="green">-0.14</span><a href="index-2.html">Trade</a></li>
                </ul>
              </div>
              <div className="graph-box">
                <div className="graph"><img src="assets/images/icons/graph-4.png" alt /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-box centred">
        <a href="index-2.html"><span>See More</span></a>
      </div>
    </div>
  </section>
  {/* pricing-style-two end */}
  {/* account-style-two */}
  <section className="account-style-two sec-pad">
    <div className="auto-container">
      <div className="sec-title centred">
        <span className="sub-title">Account Types</span>
        <h2>Bullion Trading <span>Accounts</span></h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
          <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="upper-box centred">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-13.png)'}} />
                <h3>Standard a/c</h3>
                <p>Beguiled demoralized by charms non</p>
                <div className="icon-box"><img src="assets/images/icons/icon-37.png" alt /></div>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Initial Deposit <span>$100</span></li>
                  <li>Leverage <span>Up to 1:3000</span></li>
                  <li>Order Volume <span>0.01 - 500 lots</span></li>
                  <li>Spread <span>Fixed from 3 pips</span></li>
                </ul>
              </div>
              <div className="lower-box">
                <div className="link-box"><a href="index-2.html"><span>Open Your Account</span></a></div>
                <div className="more-link"><a href="index-2.html">More Info</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
          <div className="account-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="recommended-box">
              <h6>Most Recommended</h6>
            </div>
            <div className="inner-box">
              <div className="upper-box centred">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-13.png)'}} />
                <h3>Commission a/c</h3>
                <p>Case are perfectly simple free easy </p>
                <div className="icon-box"><img src="assets/images/icons/icon-38.png" alt /></div>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Initial Deposit <span>$100</span></li>
                  <li>Leverage <span>Up to 1:3000</span></li>
                  <li>Order Volume <span>0.01 - 500 lots</span></li>
                  <li>Spread <span>Fixed from 3 pips</span></li>
                </ul>
              </div>
              <div className="lower-box">
                <div className="link-box"><a href="index-2.html"><span>Open Your Account</span></a></div>
                <div className="more-link"><a href="index-2.html">More Info</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
          <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="upper-box centred">
                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-13.png)'}} />
                <h3>Stp Pro a/c</h3>
                <p>The claims off duty or the obligations</p>
                <div className="icon-box"><img src="assets/images/icons/icon-39.png" alt /></div>
              </div>
              <div className="content-box">
                <ul className="list-item clearfix">
                  <li>Initial Deposit <span>$100</span></li>
                  <li>Leverage <span>Up to 1:3000</span></li>
                  <li>Order Volume <span>0.01 - 500 lots</span></li>
                  <li>Spread <span>Fixed from 3 pips</span></li>
                </ul>
              </div>
              <div className="lower-box">
                <div className="link-box"><a href="index-2.html"><span>Open Your Account</span></a></div>
                <div className="more-link"><a href="index-2.html">More Info</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* account-style-two end */}
  {/* platform-section */}
  <section className="platform-section sec-pad">
    <div className="auto-container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content-box">
            <div className="sec-title">
              <span className="sub-title">MT4 Platform</span>
              <h2>Use <span>MT4?</span> Get Exclusive Tools with Bullion</h2>
            </div>
            <div className="text-box">
              <p>Minus id quod maxime place at facere possimus, omnis voluptas assu- menda omnis dolors repellendus tempor.</p>
            </div>
            <ul className="list-item clearfix">
              <li><h4>Ultra fast trade execution<span>01</span></h4></li>
              <li><h4>Trading from a smartphone or tablet<span>02</span></h4></li>
              <li><h4>No dealing desk, no requotes<span>03</span></h4></li>
            </ul>
            <div className="lower-box">
              <div className="btn-box">
                <a href="index-2.html" className="theme-btn"><span>Read More</span></a>
              </div>
              <ul className="download-apps clearfix">
                <li><a href="index-2.html"><i className="fa-brands fa-windows" /></a></li>
                <li><a href="index-2.html"><i className="fa-brands fa-apple" /></a></li>
                <li><a href="index-2.html"><i className="fa-brands fa-android" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
          <div className="image-box">
            <div className="image-shape">
              <div className="shape-1" />
              <div className="shape-2 rotate-me" style={{backgroundImage: 'url(assets/images/shape/shape-14.png)'}} />
            </div>
            <figure className="image"><img src="assets/images/resource/mockup-1.png" alt /></figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* platform-section end */}
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
  {/* news-section */}
  <section className="news-style-two sec-pad">
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">News &amp; Updates</span>
        <h2>Recent Post From Our <span>Blog</span></h2>
        <div className="link-box">
          <a href="blog.html"><span>More News</span></a>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-4.jpg" alt /></a></figure>
                <span className="post-date">24 Dec</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">Best FTSE 250 shares to buy in Feb 2023</a></h4>
                <p>Error sit voluptatem accusantium doloremque...</p>
                <div className="author-box">
                  <h6>Trade Ideas</h6>
                  <ul className="post-info clearfix">
                    <li><a href="blog-details.html">Justin Langer</a></li>
                    <li><span>..</span></li>
                    <li>2 Mins Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-5.jpg" alt /></a></figure>
                <span className="post-date">16 Dec</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">Fixed vs floatin exchange rates main differences</a></h4>
                <p>Rerum facilis est et expedita distin ctio libero  Itaque earum...</p>
                <div className="author-box">
                  <h6>Economic</h6>
                  <ul className="post-info clearfix">
                    <li><a href="blog-details.html">Mylah Sophia</a></li>
                    <li><span>..</span></li>
                    <li>3 Mins Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-6.jpg" alt /></a></figure>
                <span className="post-date">30 Nov</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">Surprise move with widening of yield curve...</a></h4>
                <p>Temporibus autem quibusdam et aut debitis tenetur...</p>
                <div className="author-box">
                  <h6>Updates</h6>
                  <ul className="post-info clearfix">
                    <li><a href="blog-details.html">Michael Rhys</a></li>
                    <li><span>..</span></li>
                    <li>2 Mins Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 news-block">
          <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><a href="blog-details.html"><img src="assets/images/news/news-7.jpg" alt /></a></figure>
                <span className="post-date">09 Nov</span>
              </div>
              <div className="lower-content">
                <h4><a href="blog-details.html">World Finance and Bullion Trader on Market</a></h4>
                <p>Recusandae itaque earum rerum hic tenetur a sapiente...</p>
                <div className="author-box">
                  <h6>Trade Ideas</h6>
                  <ul className="post-info clearfix">
                    <li><a href="blog-details.html">Haris Gulati</a></li>
                    <li><span>..</span></li>
                    <li>5 Mins Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* news-section end */}
  {/* testimonial-section */}
  <section className="testimonial-section">
    <div className="auto-container">
      <div className="sec-title centred">
        <span className="sub-title">Testimonials</span>
        <h2>Traders <span>Words</span> About Us</h2>
      </div>
      <div className="inner-container">
        <div className="testimonial-block">
          <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt /></figure>
          <div className="content-box">
            <h3><img src="assets/images/icons/icon-44.png" alt />Awesome!...</h3>
            <p>Dignissimos ducimus qui blanditiis pra esentium voluptatum deleniti at corrupt isint occaecati cupiditate.</p>
            <ul className="rating clearfix">
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><span>(5 out of 5)</span></li>
            </ul>
            <span className="date">Dec 14, 2022</span>
          </div>
          <div className="author-box">
            <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt /></figure>
            <h4>Nathan Felix</h4>
            <span className="designation">California</span>
          </div>
        </div>
        <div className="testimonial-block">
          <figure className="image-box"><img src="assets/images/resource/testimonial-4.png" alt /></figure>
          <div className="content-box">
            <h3><img src="assets/images/icons/icon-44.png" alt />It’s been fantastic!...</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>
            <ul className="rating clearfix">
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><i className="flaticon-star" /></li>
              <li><span>(4.5 out of 5)</span></li>
            </ul>
            <span className="date">Dec 14, 2022</span>
          </div>
          <div className="author-box">
            <figure className="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt /></figure>
            <h4>Nora Penelope</h4>
            <span className="designation">San Fransisco</span>
          </div>
        </div>
      </div>
      <div className="link-box centred">
        <a href="index-2.html"><span>More Reviews</span></a>
      </div>
    </div>
  </section>
  {/* testimonial-section end */}
  {/* location-section */}
  <section className="location-section sec-pad">
    <div className="auto-container">
      <div className="upper-box">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title">
                <span className="sub-title">Get in Touch</span>
                <h2>Support in <br />Multi <span>Language</span></h2>
              </div>
              <div className="text-box">
                <p>We can assure you high-quality certified translations of your brokerage documents in over 100 languages!</p>
                <a href="index-2.html" className="theme-btn"><span>Read More</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 location-column">
            <div className="location-inner">
              <div className="map" style={{backgroundImage: 'url(assets/images/icons/map-1.png)'}} />
              <div className="location-box">
                <div className="single-location"><a href="https://www.google.com/maps" target="_blank"><img src="assets/images/icons/location-1.png" alt /></a></div>
                <div className="single-location"><a href="https://www.google.com/maps" target="_blank"><img src="assets/images/icons/location-1.png" alt /></a></div>
                <div className="single-location"><a href="https://www.google.com/maps" target="_blank"><img src="assets/images/icons/location-1.png" alt /></a></div>
                <div className="single-location"><a href="https://www.google.com/maps" target="_blank"><img src="assets/images/icons/location-1.png" alt /></a></div>
                <div className="single-location"><a href="https://www.google.com/maps" target="_blank"><img src="assets/images/icons/location-1.png" alt /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 form-column">
            <div className="form-inner">
              <form action="https://azim.hostlin.com/Bullion/contact.html" method="post">
                <div className="form-group">
                  <div className="icon"><img src="assets/images/icons/icon-45.png" alt /></div>
                  <input type="email" name="email" placeholder="customercare@bullion.com" required />
                  <button type="submit"><i className="flaticon-right-down" /></button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 link-column">
            <div className="single-link">
              <button>Make a Call</button>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 link-column">
            <div className="single-link">
              <button>Live Chat</button>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 link-column">
            <div className="single-link">
              <a href="faq.html">Faq’s</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* location-section end */}
  {/* clients-style-two */}
  <section className="clients-style-two centred">
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">Our Partners</span>
        <h2><span>Partners</span> Around the World </h2>
      </div>
      <ul className="clients-logo-list clearfix">
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-6.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-7.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-8.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-9.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-10.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-11.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-12.png" alt /></a></figure></li>
        <li><figure className="clients-box"><a href="index-2.html"><img src="assets/images/clients/clients-13.png" alt /></a></figure></li>
      </ul>
      <div className="link-box centred">
        <a href="index-2.html"><span>See More</span></a>
      </div>
    </div>
  </section>
  {/* clients-style-two end */}
  {/* awards-section */}
  <section className="awards-section">
    <div className="auto-container">
      <div className="title-inner">
        <div className="sec-title mr-0">
          <span className="sub-title">Awards &amp; Achivements</span>
          <h2>We're Proud of Our <span>Awards</span></h2>
        </div>
        <div className="text-box">
          <p>Place at facere possimus omnis volupta assum <br />enda est omnis dolor repellendus.</p>
        </div>
      </div>
      <div className="three-item-carousel owl-carousel owl-theme">
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Global Forex <br />Broker of the Year</h3>
            <p>Global Forex Awards <br />Mar, 2021</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Most Transparent <br />FX Broker</h3>
            <p>The Forex Expo USA <br />Dec, 2018</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Best Forex Rewards <br />Program</h3>
            <p>Global Forex Awards <br />Jun, 2016</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Global Forex <br />Broker of the Year</h3>
            <p>Global Forex Awards <br />Mar, 2021</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Most Transparent <br />FX Broker</h3>
            <p>The Forex Expo USA <br />Dec, 2018</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Best Forex Rewards <br />Program</h3>
            <p>Global Forex Awards <br />Jun, 2016</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Global Forex <br />Broker of the Year</h3>
            <p>Global Forex Awards <br />Mar, 2021</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Most Transparent <br />FX Broker</h3>
            <p>The Forex Expo USA <br />Dec, 2018</p>
          </div>
        </div>
        <div className="awards-block-one">
          <div className="inner-box">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
            <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt /></div>
            <h3>Best Forex Rewards <br />Program</h3>
            <p>Global Forex Awards <br />Jun, 2016</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* awards-section end */}
  {/* cta-section */}
  <section className="cta-section centred">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-22.png)'}} />
    <span className="big-text">bullion</span>
    <div className="auto-container">
      <div className="inner-box">
        <h2>A 360 Trading Experience</h2>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate <br />velit esse quam nihil.</p>
        <a href="index-2.html" className="theme-btn"><span>Read More</span></a>
      </div>
    </div>
  </section>
  {/* cta-section end */}
  {/* footer-style-two */}
  <footer className="footer-style-two">
    <div className="widget-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
              <figure className="footer-logo"><a href="index-2.html"><img src="assets/images/logo-4.png" alt /></a></figure>
              <div className="widget-content">
                <div className="year-box">
                  <h4>Since</h4>
                  <h2>2012</h2>
                  <div className="link-box">
                    <a href="index-2.html"><span>More In Timeline</span></a>
                  </div>
                </div>
                <div className="text-box">
                  <p>Impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda omnis dolors.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_60">
              <div className="widget-title">
                <h3>Company</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="index-2.html">About Us</a></li>
                  <li><a href="index-2.html">Careers</a></li>
                  <li><a href="index-2.html">Meet Our Team</a></li>
                  <li><a href="index-2.html">Process</a></li>
                  <li><a href="index-2.html">Mission &amp; Vision</a></li>
                  <li><a href="index-2.html">Faq’s</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_15">
              <div className="widget-title">
                <h3>Education</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="index-2.html">Courses</a></li>
                  <li><a href="index-2.html">Lessons</a></li>
                  <li><a href="index-2.html">Seminars</a></li>
                  <li><a href="index-2.html">Platform Tutorials</a></li>
                  <li><a href="index-2.html">ebooks</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_80">
              <div className="widget-title">
                <h3>Useful links</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="index-2.html">Trading Tools</a></li>
                  <li><a href="index-2.html">Pricing List</a></li>
                  <li><a href="index-2.html">Account Types</a></li>
                  <li><a href="index-2.html">MT4 Platform</a></li>
                  <li><a href="index-2.html">Mobile App</a></li>
                  <li><a href="index-2.html">Policies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-two">
      <div className="auto-container">
        <div className="bottom-inner">
          <div className="guide-box">
            <h5><a href="index-2.html"><i className="flaticon-download" />Free <br />Trading Guides</a></h5>
          </div>
          <div className="copyright-box">
            <p>© <span>2023 <a href="index-2.html">Bullion</a>.</span> All Rights Reserved.</p>
            <ul className="footer-nav clearfix">
              <li><a href="index-2.html">Legal Notice</a></li>
              <li><a href="index-2.html">Privacy Policy</a></li>
              <li><a href="index-2.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <ul className="social-links clearfix">
            <li><a href="index-2.html"><i className="fa-brands fa-facebook" /></a></li>
            <li><a href="index-2.html"><i className="fa-brands fa-instagram" /></a></li>
            <li><a href="index-2.html"><i className="fa-brands fa-square-pinterest" /></a></li>
            <li className="scroll-to-target" data-target="html"><i className="flaticon-up-arrow" /></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* footer-style-two end */}
</div>




        </div>
    );
};

export default index;
