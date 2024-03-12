import React from 'react';

function Deposit({ deposit }) {
    return (
        <div>
            {/* Withdrawal Section */}
            <div>
                {
                    deposit?.withdrawal &&

                    <div className="text-box">
                        <h2>{deposit.withdrawal.title}</h2>
                        <p>{deposit.withdrawal.description}</p>
                    </div>}
                {
                    deposit?.withdrawal?.image &&
                    <img className='mt-3' style={{ width: '100%' }} src={deposit.withdrawal.image} alt="Withdrawal Image" />
                }
            </div>

            {/* Deposit Section */}
            {
                deposit?.deposit &&

                <div className="text-box mt-3">
                    <h2>{deposit.deposit.title}</h2>
                    <p>{deposit.deposit.description}</p>
                </div>}
            {
                deposit?.deposit?.image &&
                <img className='mt-3' style={{ width: '100%' }} src={deposit.deposit.image} alt="Deposit Image" />
            }
        </div>
    );
}

export default Deposit;
