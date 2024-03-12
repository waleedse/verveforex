import React from 'react';

function AccountTypes({ account }) {
    console.log("account", account)
    return (
        <div className="content-two">
            <div className="text-box">
                <h3>Account Types</h3>
            </div>
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                    <ul className="list-item clearfix">
                        {account?.account_types.map((account, index) => (
                            <li key={index}>
                                <div className="icon-box">
                                    <i className="fa-solid fa-chevron-right" />
                                    <i className="fa-solid fa-chevron-right" />
                                </div>
                                {account.name}
                                <span>{account.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                    <ul className="list-item clearfix"></ul>
                </div>
            </div>
            {account?.table_data &&
                <div className="pricing-section">
                    <div className="table-outer home-1">
                        <table className="pricing-table">
                            <thead className="table-header">
                                <tr>
                                    {account?.table_data.headings.map((heading, index) => (
                                        <th key={index}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {account?.table_data.rows.map((row, index) => (
                                    <tr key={index}>
                                        {
                                            Object.keys(row)?.map((key) => (
                                                <td>{row[key]}</td>
                                            ))
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
}

export default AccountTypes;
