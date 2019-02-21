

import trackItems from "./fakeData";

// console.log('getting data..', trackItems);

export const fetchInvoices = async () =>
        // console.log('fetch invoices api...  ', trackItems[0].data[0] );
        // can be replaced with Request Axios or superagent
         new Promise(resolve => resolve(trackItems[0].data[0]))
  



