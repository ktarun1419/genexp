import React from 'react'
import "./Security.css"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function Security(props) {
    props.funcNav(true);
    useEffect(() => { document.title = "GenExp | Security"; }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
    <h1 className='heading1'>SECURITY AT GENEXP</h1>
    <div className='row'>
        <div className='box'>
            <h2>Your Data is Secure</h2>
            <p>1. Access restrictions on our servers to better protect your information<br/>2. Firewalls implemented to prevent unauthorized access</p>
        </div>
        <div className='box'>
        <h2>System Security</h2>
            <p>Our web servers use the strongest grade of HTTPS security (TLS 1.2) so that requests are protected from eavesdroppers and man-in-the-middle attacks.</p>
        </div>
    </div>

    <div className='row'>
        <div className='box'>
            <h2>Our Blockchain Security</h2>
            <p>1.  Used blockchain which data makes more secure.<br/>2. It is a decentralized public ledger network that allows organizations to connect to it via nodes for data storage and processing.</p>
        </div>
        <div className='box'>
        <h2>Data</h2>
            <p>1. All data within the blocks are validated and agreed upon by a consensus mechanism, ensuring that each transaction is true and correct. <br/>2. Blockchain technology produces a structure of data with inherent security qualities</p>
        </div>
    </div>

    <div className='row'>
        <div className='box'>
            <h2>Privacy</h2>
            <p>1.  We have unit, integration, and regression test cases in place to ensure that privacy controls work as expected.<br/>2. All tests are run every time changes are made on the platform.</p>
        </div>
        <div className='box'>
        <h2>Application monitoring</h2>
            <p>1. All access to superset applications are logged and audited.<br/>2. We place strict controls over our employees' access to your data and are committed to ensure that any customer data is not seen by anyone who should not have access to it.</p>
        </div>
    </div>


    </>
  )
}
