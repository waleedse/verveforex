import React, { Fragment } from "react";
import '../static.css'

function Legal() {
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
                        <h1>Legal Policy</h1>
                    </div>
                </div>
            </section>
            <ul className="static-li" style={{ padding: "30px 150px", color: "Black" }}>
                <li><strong>1.</strong> <strong>Introduction:</strong>
                    <ul>
                        <li><strong>1.1.</strong> This Legal Notice Policy governs the use of the Qondzo website (the "Website"). By accessing or using the Website, you agree to comply with this Legal Notice Policy and all applicable laws and regulations.</li>
                    </ul>
                </li>
                <li><strong>2.</strong> <strong>Copyright Notice:</strong>
                    <ul>
                        <li><strong>2.1.</strong> Unless otherwise indicated, all content on the Website, including text, graphics, logos, images, and software, is the property of Qondzo or its licensors and is protected by copyright laws.</li>
                        <li><strong>2.2.</strong> You may not reproduce, distribute, modify, or create derivative works of any content from the Website without prior written consent from Qondzo.</li>
                    </ul>
                </li>
                <li><strong>3.</strong> <strong>Trademark Notice:</strong>
                    <ul>
                        <li><strong>3.1.</strong> All trademarks, service marks, and logos displayed on the Website are the property of Qondzo or their respective owners.</li>
                        <li><strong>3.2.</strong> You may not use any trademarks, service marks, or logos from the Website without the prior written consent of Qondzo or the respective owner.</li>
                    </ul>
                </li>
                <li><strong>4.</strong> <strong>Third-Party Content:</strong>
                    <ul>
                        <li><strong>4.1.</strong> The Website may contain links to third-party websites or resources. Qondzo does not endorse or control any third-party content, and is not responsible for the accuracy, legality, or content of such websites or resources.</li>
                        <li><strong>4.2.</strong> Any use of third-party content is at your own risk, and you should review the terms and conditions and privacy policies of the third-party websites before accessing or using them.</li>
                    </ul>
                </li>
                <li><strong>5.</strong> <strong>Limitation of Liability:</strong>
                    <ul>
                        <li><strong>5.1.</strong> Qondzo makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the information on the Website.</li>
                        <li><strong>5.2.</strong> In no event shall Qondzo be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the Website or reliance on its content.</li>
                    </ul>
                </li>
                <li><strong>6.</strong> <strong>Governing Law and Jurisdiction:</strong>
                    <ul>
                        <li><strong>6.1.</strong> This Legal Notice Policy shall be governed by and construed in accordance with the laws of United Kingdom.</li>
                        <li><strong>6.2.</strong> Any disputes arising under this Legal Notice Policy shall be subject to the exclusive jurisdiction of the courts of United Kingdom.</li>
                    </ul>
                </li>
                <li><strong>7.</strong> <strong>Changes to Policy:</strong>
                    <ul>
                        <li><strong>7.1.</strong> Qondzo reserves the right to update or modify this Legal Notice Policy at any time without prior notice. Changes will be effective immediately upon posting on the Website.</li>
                        <li><strong>7.2.</strong> Your continued use of the Website after any such changes constitutes acceptance of the modified Legal Notice Policy.</li>
                    </ul>
                </li>
                <li><strong>8.</strong> <strong>Contact Us:</strong>
                    <ul>
                        <li><strong>8.1.</strong> If you have any questions or concerns about this Legal Notice Policy, please email us on <a href="mailto:support@qondzo.com">support@qondzo.com</a>.</li>
                    </ul>
                </li>


            </ul>


        </Fragment>
    );
}
export default Legal;
