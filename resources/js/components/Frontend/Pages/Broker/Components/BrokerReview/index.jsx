import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function BrokerReview() {
    const [activeTab, setActiveTab] = useState('broker')
    return (
        <Fragment>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="account-sidebar">
                    <div className="sidebar-widget category-widget">
                        <div className="widget-title">
                            <h3>Account Types</h3>
                        </div>
                        <div className="widget-content">
                            <ul className="category-list clearfix">
                                <li onClick={() => { setActiveTab('broker') }}><Link className={`${activeTab == 'broker' && 'current'}`} href="account-details.html"><h5>Cabana Capital</h5></Link></li>
                                <li onClick={() => { setActiveTab('commission') }}><Link className={`${activeTab == 'commision' && 'current'}`} href="account-details-2.html"><h5>Commision Account</h5></Link></li>
                                <li onClick={() => { setActiveTab('deposit') }}><Link className={`${activeTab == 'deposit' && 'current'}`} href="account-details-3.html" ><h5>STP Pro Account</h5></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="account-details-content">
                    <div className="text-box">
                        <h2>Cabana Capital</h2>
                        <p>Cabana Capital operates as a forex licensed broker . Since its inception, it has furnished traders with a dependable and effective platform for forex, commodities, indices, and cryptocurrency trading. Through its extensive array of trading instruments, traders can diversify their portfolios and capitalise on market opportunities.
                            <br /><br />A notable aspect of Cabana Capital is its provision of high leverage, reaching up to 1:500. Nonetheless, the broker offers favourable trading conditions to enable traders to execute their strategies proficiently.
                            <br /><br />Cabana Capital presents four distinct types of trading accounts: Cent, Standard, Ultra and Elite accounts. Each account category boasts unique features and prerequisites, empowering traders to select the account that aligns with their trading preferences. For instance, the Cent account caters to beginners seeking to initiate trading with a modest capital, while the Standard and Ultra accounts cater to seasoned traders willing to engage with larger capital amounts.
                            <br /><br />Moreover, Cabana Capital facilitates demo accounts for traders keen on honing their strategies and financial risk. Additionally, Islamic accounts are available for traders adhering to Sharia law.
                            <br /><br />The broker's dedicated support team operates 24/5, ensuring prompt assistance for clients with any queries or concerns. Furthermore, the trading platform is accessible in multiple languages, enhancing accessibility for traders across the globe.</p>
                    </div>
                    <div className="content-one">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                <figure className="image-box"><img src="assets/images/resource/account-4.jpg" alt /></figure>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                <ul className="accordion-box">
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <h3>Pros</h3>
                                        </div>
                                        <div className="acc-content current">
                                            <ul className="list-item clearfix">
                                                <li>1.	Offers variety of trading instruments</li>
                                                <li>2.	Regulated Broker from Top Tier Regulation</li>
                                                <li>3.	High Leverage offerings up to 1:500</li>
                                                <li>4.	Low Minimum deposit requirement</li>
                                                <li>5.	No Deposit and Withdrawal charges</li>
                                                <li>6.	SWAP Free accounts </li>
                                                <li>7.	Negative Balance Protection</li>
                                                <li>8.	Dedicated Account Manager</li>
                                                <li>9.	24/5 Online Multilingual Chat support</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <h3>Cons</h3>
                                        </div>
                                        <div className="acc-content current">
                                            <ul className="list-item clearfix">
                                                <li>1.	Limited instruments for crypto trading</li>
                                                <li>2.	No Online Support on the weekends</li>
                                                <li>3.	Do not accept clients from certain countries</li>
                                                <li>4.	Limited educational resources and research tools</li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className='text-box'>

                                <h3>Regulations</h3>
                                <p>Cabana Capitals is regulated in South Africa under the name of Gao Financial Services (Pty) Ltd and holds a Financial Service Provider (FSP) license number 44692 from the Financial Sector Conduct Authority (FSCA) in South Africa
                                    Cabana capitals is regulated in Mauritius under the name of Cabana (Markets) Limited and is regulated by the Financial Services Commision of Mauritius (FSC) under the license number GB22200748. The FSC is the principal regulator of the financial services industry in Mauritius.
                                    Cabana Capitals Ltd incorporate in St. Vincent & the Grenadines with company registration number 24185 IBC 2017.
                                </p>


                                <h3>Leverage</h3>
                                <p>Cabana Capital extends leverage of up to 1:500 to its clientele, a notably high level. The extent of leverage available fluctuates based on the type of account selected by the client. It's imperative to recognise that heightened leverage has the potential to magnify prospective gains, albeit accompanied by heightened risks. Consequently, it is paramount for traders to comprehensively grasp the risks inherent in margin trading and to employ suitable risk management tactics.
                                </p>

                                <h3>Spread</h3>
                                <p>Cabana Capital presents competitive spreads and commissions across its diverse array of trading accounts. For the Cent, Standard, Ultra , and Elite accounts, the broker asserts no commissions, opting instead for spreads, which denote the disparities between bid and ask prices of trading instruments. The minimum spreads commence at 0.6 pips, 1.0 pip, 1.5 pips and 1.8 pips, respectively, within these trading accounts. Conversely, the Elite account offers narrow spreads from 0.0 pips, facilitating direct market access and swifter execution. Nevertheless, it's noteworthy that these account types entail a Nil commissions on Cent, Standard Ultra and $7 on Elite Account.
                                </p>

                                <h3>Educational Material</h3>
                                <p>In order to assist traders at various proficiency levels, Cabana Capitals furnishes a broad spectrum of educational materials. These resources encompass customised educational content catering to novices, intermediate traders, and advanced professionals alike. Furthermore, the brokerage offers analytical tools and indicators, empowering traders to scrutinise market trends, pinpoint trading prospects, and formulate decisions grounded in data
                                </p>

                                <h3>Swap Charges</h3>
                                <p>Swap-free accounts are accessible to all their clientele.</p>

                                <h3>Copy Trading</h3>
                                <p>Cabana Capitals' copy trading functionality is crafted for simplicity and effectiveness. Users can effortlessly discover traders to emulate and distribute funds to each selected trader. Moreover, Cabana Capitals provides an array of tools and materials to assist users in making well-informed decisions, including trader performance metrics and risk management utilities</p>

                                <h3>Trading Platforms</h3>
                                <p>Cabana Capital extends to its clients the widely acclaimed MetaTrader 4 (MT4) and MetaTrader 5 (MT5) trading platforms, renowned choices among traders globally. Renowned for its intuitive interface, advanced charting capabilities, and diverse array of trading tools and indicators, the MT4 platform empowers traders to swiftly execute trades, monitor real-time market movements, and access an extensive suite of analytical tools.</p>

                                <h3>Currencies</h3>
                                <p>Cabana Capital presents traders with an extensive array of trading instruments spanning multiple markets, granting clients access to a wide spectrum of options. This selection encompasses forex pairs, commodities, indices, precious metals, and cryptocurrencies.
                                    Forex Pairs: Cabana Capital provides a diverse array of forex currency pairs, encompassing major pairs like EUR/USD, USD/JPY, GBP/USD, and AUD/USD, alongside minor and exotic pairs.
                                    Commodities: The brokerage furnishes trading opportunities across various commodities, including precious metals like gold and silver, energy products such as oil and natural gas, and agricultural commodities like coffee and wheat.
                                    Indices: Cabana Capital extends a selection of indices sourced from diverse global markets, comprising the S&P 500, NASDAQ, Nikkei 225, and FTSE 100, among others.
                                    Precious Metals: Traders have access to various precious metals such as gold, silver, and platinum, enabling them to capitalise on price fluctuations within these markets.
                                    Cryptocurrencies: Additionally, Cabana Capital facilitates trading in cryptocurrencies, encompassing Bitcoin, Ethereum, Litecoin, and Ripple, offering traders exposure to the dynamic and volatile cryptocurrency markets.
                                </p>

                                <h3>Customer Support</h3>
                                <p>Cabana Capital offers various customer care support specialists are fluent in multiple languages, providing assistance 24/5 hours a day , including email support and Phone number for further assistance.A physical correspondence address is also furnished for clients to send inquiries.
                                    Every client is provided with a dedicated account manager who oversees the operations of their trading account.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-two">
                        <div className="text-box">
                            <h3>Standard Account Info</h3>
                            <p>Bound to ensue and equal blame belongs to those who fail in their,</p>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                <ul className="list-item clearfix">
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        Initial Deposit
                                        <span>$100</span>
                                    </li>
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        Order Volume
                                        <span>0.01 - 500 lots</span>
                                    </li>
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        24/7 Support
                                        <span>Yes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                <ul className="list-item clearfix">
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        Leverage
                                        <span>Upto 1:3000</span>
                                    </li>
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        Spread
                                        <span>Fixed from 3 pis</span>
                                    </li>
                                    <li>
                                        <div className="icon-box"><i className="fa-solid fa-chevron-right" /><i className="fa-solid fa-chevron-right" /></div>
                                        Multi Language CC
                                        <span>Yes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-three">
                        <div className="text-box">
                            <h3>Reason for Choose</h3>
                            <p>Bound to ensue; and equal blame belongs to those who fail in their,</p>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }} />
                                        <div className="icon"><img src="assets/images/icons/icon-64.png" alt /></div>
                                    </div>
                                    <div className="title-text"><h3>Friendly &amp; Expert<span>01</span></h3></div>
                                    <p>Beatae vitae dicta sun explicabo enim ipsam voluptatem volupta.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }} />
                                        <div className="icon"><img src="assets/images/icons/icon-65.png" alt /></div>
                                    </div>
                                    <div className="title-text"><h3>24/7 Support<span>02</span></h3></div>
                                    <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }} />
                                        <div className="icon"><img src="assets/images/icons/icon-66.png" alt /></div>
                                    </div>
                                    <div className="title-text"><h3>Demo account<span>03</span></h3></div>
                                    <p>Omnis iste natus error sit volup minima accusantium doloremque.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }} />
                                        <div className="icon"><img src="assets/images/icons/icon-67.png" alt /></div>
                                    </div>
                                    <div className="title-text"><h3>Award Winner<span>04</span></h3></div>
                                    <p>Beguiled demoralized charms nonsed pleasure of the moment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default BrokerReview
