import React from 'react';


import Invoices from '../../containers/Invoices/'


const Layout = () => (
  <main className="main">
    <div className="container">
      <div className="columns is-variable">
        <div className="column is-5">
        Invoice Photo
        </div>
        <div className="column is-8 ">
          <Invoices />
        </div>
      </div>
    </div>
  </main>
);


export default Layout;
