import React, { Fragment } from "react";
import '../static.css'

function PrivacyPolicy() {
    return (
        <Fragment>

            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/about-us-banner.jpg)' }} />
                <div className="line-box">
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
                <div className="auto-container">
                    <div className="content-box" style={{ paddingBottom: '150px' }}>
                        <h1>Privacy Policy</h1>
                    </div>
                </div>
            </section>
            <ul className="static-li" style={{ padding: "30px 150px", color: "Black" }}>

                <li><strong>1.</strong> <strong>Information We Collect:</strong>
                    <ul>
                        <li><strong>1.1.</strong> Personal Information: When you sign up for an account or use our services, we may collect personal information such as your name, email address, contact details, and payment information.</li>
                        <li><strong>1.2.</strong> Usage Data: We may also collect information about your interactions with our platform, including your trading activities, device information, IP address, and browsing behaviour.</li>
                        <li><strong>1.3.</strong> Cookies: We use cookies and similar tracking technologies to enhance your experience, analyse trends, and administer the website.</li>
                    </ul>
                </li>
                <li><strong>2.</strong> <strong>How We Use Your Information:</strong>
                    <ul>
                        <li><strong>2.1.</strong> We use the information we collect to provide and improve our services, personalise your experience, and communicate with you about updates, promotions, and relevant offers.</li>
                        <li><strong>2.2.</strong> Your personal information may also be used for account management, transaction processing, and to comply with legal obligations.</li>
                    </ul>
                </li>
                <li><strong>3.</strong> <strong>Data Sharing and Disclosure:</strong>
                    <ul>
                        <li><strong>3.1.</strong> We do not sell, trade, or rent your personal information to third parties without your consent.</li>
                        <li><strong>3.2.</strong> We may share your information with trusted service providers and partners who assist us in delivering our services, subject to confidentiality agreements.</li>
                        <li><strong>3.3.</strong> We may disclose your information in response to legal requests, enforce our policies, or protect our rights, property, or safety, or that of others.</li>
                    </ul>
                </li>
                <li><strong>4.</strong> <strong>Data Security:</strong>
                    <ul>
                        <li><strong>4.1.</strong> We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</li>
                        <li><strong>4.2.</strong> However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</li>
                    </ul>
                </li>
                <li><strong>5.</strong> <strong>Data Retention:</strong>
                    <ul>
                        <li><strong>5.1.</strong> We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</li>
                    </ul>
                </li>
                <li><strong>6.</strong> <strong>Your Rights:</strong>
                    <ul>
                        <li><strong>6.1.</strong> You have the right to access, update, or delete your personal information. You can manage your account settings or contact us for assistance.</li>
                        <li><strong>6.2.</strong> You may also opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in the communication.</li>
                    </ul>
                </li>
                <li><strong>7.</strong> <strong>Children's Privacy:</strong>
                    <ul>
                        <li><strong>7.1.</strong> Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors without parental consent.</li>
                    </ul>
                </li>
                <li><strong>8.</strong> <strong>Changes to This Policy:</strong>
                    <ul>
                        <li><strong>8.1.</strong> We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website.</li>
                    </ul>
                </li>
                <li><strong>9.</strong> <strong>Contact Us:</strong>
                    <ul>
                        <li><strong>9.1.</strong> If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please email us on <a href="mailto:support@qondzo.com">support@qondzo.com</a>.</li>
                    </ul>
                </li>
            </ul>


        </Fragment>
    );
}
export default PrivacyPolicy;
