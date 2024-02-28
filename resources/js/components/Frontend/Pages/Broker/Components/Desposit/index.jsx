import React from 'react';

function Deposit(props) {
    return (
        <div>
            <div className="text-box">
                <h2>Withdrawl Methods, Charges and Processing Times</h2>
                <p>The minimum deposit required is $10. Cabana Capital provides a wide array of payment methods for deposit and withdrawal transactions, ensuring convenience and adaptability for its clients. Traders have the option to select from prominent e-wallet services like Neteller, Skrill, Paytrust, and Perfect Money. For those inclined towards cryptocurrencies, Cabana Capital accepts cryptocurrency as a deposit method, enabling traders to fund their accounts using the decentralised and widely recognised digital currency. Additionally, the broker facilitates traditional Bank Wire Transfer for both depositing and withdrawing funds. Cabana Capital also extends local transfer options, particularly advantageous for traders in specific regions. It's worth noting that the account currency may vary depending on the chosen payment method, allowing traders to operate in their preferred currency. Cabana Capital does not impose any deposit fees.</p>
            </div>
            <img className='mt-3' style={{ width: '100%' }} src='/assets/images/depositone.png'></img>
            <div className="text-box mt-3">
                <h2>Deposits Methods, Charges and Processing Times</h2>
                <p>Furthermore, Cabana Capital does not levy any fees for either deposits or withdrawals. The majority of deposits and withdrawals are processed instantly. Detailed information regarding withdrawal fees and withdrawal timeframes can be found in the provided screenshots below. Withdrawal fees and timeframes may vary depending on Cabana Capital's specific policies and procedures. While the broker states no withdrawal fees, traders should carefully review the terms and conditions or contact customer support for the most accurate and up-to-date information. Withdrawal timeframes can also vary based on factors such as the chosen payment method, account verification requirements, and the volume of withdrawal requests at any given time.
                </p>
            </div>
            <img className='mt-3' style={{ width: '100%' }} src='/assets/images/deposittwo.png'></img>
        </div>
    );
}

export default Deposit;
