import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket'
import Offer from './offer';

function Support() {
    return (
        <div>
            <Hero />
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <CreateTicket icon="add_circle" button="Account Opening" link1="Resident individual" link2="Minor" link3="Non Resident Indian(NRI" link4="Company,Partnership,HUF and LLP" link5="Glossary" />
                    <CreateTicket icon="account_circle" button="Your Zerodha Account" link1="Your Profile" link2="Account modification" link3="Client Master Report" link4="Nomination" link5="Transfer and conversion of securities" />
                    <CreateTicket icon="arrow_circle_left" button="Kite" link1="IPO" link2="Trading FAQ's" link3="Margin Trading Facility (MTF) and Margins" link4="Charts and orders" link5="Alerts and Nudges" link6="General" />
                    <CreateTicket icon="currency_rupee_circle" button="Funds" link1="Add money" link2="Withdraw money" link3="Add bank accounts" link4="eMandates" />
                    <CreateTicket icon="data_usage" button="Console" link1="Portfolio" link2="Corporate actions" link3="Funds statement" link4="Reports" link5="Profile" link6="Segments" />
                    <CreateTicket icon="pai" button="Coin" link1="Mutual funds" link2="National Pension Scheme(NPS)" link3="Features on coin" link4="Payments and Orders" link5="General" />
                </div>
                <div className="col-md-4">
                    <Offer />
                </div>
            </div>

        </div>
        </div>
    )
}
export default Support;