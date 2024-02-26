import React from 'react'

function Sidebar() {
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
                              <li><a href="account-details.html"><h5>Cabana Capital</h5></a></li>
                              <li><a href="account-details-2.html"><h5>Commision Account</h5></a></li>
                              <li><a href="account-details-3.html" className="current"><h5>STP Pro Account</h5></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  )
}

export default Sidebar
