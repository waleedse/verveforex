import React, { Fragment, useMemo, useState } from "react";
import "../static.css";

function FAQ() {
    const [query, setQuery] = useState("");
    const [openItems, setOpenItems] = useState(new Set([0]));

    const faqs = useMemo(() => ([
        {
            question: "What are Forex trading signals?",
            answer: (
                <p>
                    Forex signals are trade ideas (buy/sell) based on technical and fundamental analysis, including
                    entry price, stop-loss and take-profit suggestions.
                </p>
            )
        },
        {
            question: "How are signals delivered?",
            answer: (
                <p>
                    Signals are delivered in real-time via email, SMS, and our mobile app so you never miss an opportunity.
                </p>
            )
        },
        {
            question: "What information does each signal include?",
            answer: (
                <ul className="list-item text-justify clearfix">
                    <li>Currency pair and trade direction (buy/sell)</li>
                    <li>Entry level, suggested stop-loss and take-profit targets</li>
                    <li>Short analyst notes when relevant</li>
                </ul>
            )
        },
        {
            question: "How many signals should I expect?",
            answer: (
                <p>
                    Signal volume varies with market conditions. We focus on quality over quantity and only share setups
                    that meet our criteria.
                </p>
            )
        },
        {
            question: "What time zone do you use?",
            answer: (
                <p>
                    All timestamps use your local device time when possible; otherwise, they default to GMT/UTC for clarity.
                </p>
            )
        },
        {
            question: "Do you offer free access?",
            answer: (
                <p>
                    Yes. Clients qualify for free access by completing a minimum of <strong className='highlight'>100 lots per month</strong>.
                </p>
            )
        },
        {
            question: "How should I manage risk?",
            answer: (
                <p>
                    Always use the suggested stop-loss and risk only a small percentage of your account per trade. Past
                    performance is not indicative of future results.
                </p>
            )
        },
        {
            question: "Which platforms/brokers can I use?",
            answer: (
                <p>
                    You can execute trades on your preferred trading platform and broker. Our signals are platform-agnostic.
                </p>
            )
        },
        {
            question: "Can I cancel anytime?",
            answer: (
                <p>
                    Yes. You can cancel your subscription at any time. Access continues until the end of the current billing period.
                </p>
            )
        },
        {
            question: "How can I contact support?",
            answer: (
                <p>
                    For any queries, please email <a href="mailto:support@qondzo.com">support@qondzo.com</a>.
                </p>
            )
        }
    ]), []);

    const filteredFaqs = useMemo(() => {
        if (!query) return faqs;
        const q = query.toLowerCase();
        return faqs.filter(item =>
            item.question.toLowerCase().includes(q) ||
            (typeof item.answer === 'string' ? item.answer.toLowerCase().includes(q) : false)
        );
    }, [faqs, query]);

    function toggleItem(index) {
        const newSet = new Set(openItems);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        setOpenItems(newSet);
    }

    return (
        <Fragment>
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/about-us-banner.jpg)' }} />
                <div className="line-box">
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
                <div className="auto-container">
                    <div className="content-box" style={{ paddingBottom: '80px' }}>
                        <h1>Frequently Asked Questions</h1>
                        <p className="faq-subtitle text-center">Quick answers about signals, delivery, risk and more.</p>
                        <div className="faq-search">
                            <span className="faq-search-icon"><i className="fa fa-search" /></span>
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-label="Search FAQs"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1">
                            <ul className="accordion-box">
                                {filteredFaqs.map((item, idx) => {
                                    const isOpen = openItems.has(idx);
                                    return (
                                        <li key={idx} className={`accordion block ${isOpen ? 'active-block' : ''}`}>
                                            <button
                                                type="button"
                                                className={`acc-btn ${isOpen ? 'active' : ''}`}
                                                onClick={() => toggleItem(idx)}
                                                aria-expanded={isOpen}
                                                aria-controls={`faq-panel-${idx}`}
                                                id={`faq-header-${idx}`}
                                            >
                                                <h3 className="acc-title">{item.question}</h3>
                                                {/* <span className="acc-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span> */}
                                            </button>
                                            <div
                                                id={`faq-panel-${idx}`}
                                                role="region"
                                                aria-labelledby={`faq-header-${idx}`}
                                                className={`acc-content ${isOpen ? 'current' : ''}`}
                                            >
                                                <div className="content">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                                {filteredFaqs.length === 0 && (
                                    <li className="accordion block">
                                        <div className="acc-content current">
                                            <div className="content">
                                                <p>No results found. Try different keywords.</p>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default FAQ;


