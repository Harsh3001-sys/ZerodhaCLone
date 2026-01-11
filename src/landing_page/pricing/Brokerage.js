import React from 'react';
import { Link } from 'react-router-dom';
import './brokerage.css';
function Brokerage() {
    return (
        <div className='container'>
            <div className='row'>
                <section className='t-section'>
                    <h2 className='t-head'>Charges for account opening</h2>
                    <div className='table-container charges'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Type of account</th>
                                    <th>Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Online account</td>
                                    <td><span class="free-tag">FREE</span></td>
                                </tr>
                                <tr>
                                    <td>Offline account</td>
                                    <td><span class="free-tag">FREE</span></td>
                                </tr>
                                <tr>
                                    <td>NRI account (offline only)</td>
                                    <td>₹ 500</td>
                                </tr>
                                <tr>
                                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td>₹ 500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='t-section dmat'>
                    <h2 className='t-head'>Demat AMC (Annual Maintenance Charge)</h2>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Value of holdings</th>
                                    <th>AMC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Up to ₹4 lakh</td>
                                    <td><span class="free-tag">FREE</span></td>
                                </tr>
                                <tr>
                                    <td>₹4 lakh - ₹10 lakh</td>
                                    <td>₹ 100 per year, charged quarterly*</td>
                                </tr>
                                <tr>
                                    <td>Above ₹10 lakh</td>
                                    <td>₹ 300 per year, charged quarterly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className='t-p'>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href=''>click here.</a></p>
                </section>
                <section className='t-section'>
                    <h2 className='t-head'>Charges for optional value added services</h2>
                    <div className='table-container optional'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Billing Frquency</th>
                                    <th>Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tickertape</td>
                                    <td>Monthly / Annual</td>
                                    <td>Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr>
                                    <td>Smallcase</td>
                                    <td>Per transaction</td>
                                    <td>Buy & Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr>
                                    <td>Kite Connect</td>
                                    <td>Monthly</td>
                                    <td>Connect: 500 | Personal: Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='t-section'>
                    <h2 className='pric-h2'>Charges explained</h2>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <p className='p-head'>Securities/Commodities transaction tax</p>

                            <p className='p-txt'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                           <p className='p-txt'> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                            <p className='p-head'>Transaction/Turnover Charges</p>

                            <p className='p-txt'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                            <p className='p-txt'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                            <p className='p-txt'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                            <p className='p-txt'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

                            <p className='p-txt'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                            <p className='p-head'>Call & trade</p>

                            <p className='p-txt'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                            <p className='p-head'>Stamp charges</p>

                            <p className='p-txt'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                            <p className='p-head'>NRI brokerage charges</p>

                            <p className='p-txt'>
                            <ul>
                            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li></ul></p>

                            <p className='p-head'>Account with debit balance</p>

                            <p className='p-txt'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                            <p className='p-head'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

                            <p className='p-txt'>
                            <ul>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li></ul></p>

                            <p className='p-head'>Margin Trading Facility (MTF)</p>

                            <p className='p-txt'>
                            <ul>
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li></ul></p>
                        </div>
                        <div className='col-12 col-lg-6'>                            
                            <p className='p-head'>GST</p>

                            <p className='p-txt'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                            
                            <p className='p-head'>SEBI Charges</p>

                            <p className='p-txt'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                            <p className='p-head'>DP (Depository participant) charges</p>

                            <p className='p-txt'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>

                            <p className='p-txt'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>

                            <p className='p-txt'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                            <p className='p-head'>Pledging charges</p>

                            <p className='p-txt'>₹30 + GST per pledge request per ISIN.</p>

                            <p className='p-head'>AMC (Account maintenance charges)
                            </p>

                            <p className='p-txt'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href=''>Click here</a></p>

                            <p className='p-txt'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href=''>Click here</a></p>

                            <p className='p-head'>Corporate action order charges</p>

                            <p className='p-txt'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                            <p className='p-head'>Off-market transfer charges</p>

                            <p className='p-txt'>₹25 per transaction.</p>

                            <p className='p-head'>Physical CMR request</p>

                            <p className='p-txt'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                            <p className='p-head'>Payment gateway charges</p>

                            <p className='p-txt'>₹9 + GST (Not levied on transfers done via UPI)</p>

                            <p className='p-head'>Delayed Payment Charges</p>

                            <p className='p-txt'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href=''>Learn more.</a></p>


                            <p className='p-head'>Trading using 3-in-1 account with block functionality</p>

                            <p className='p-txt'>
                            <ul>
                            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                            <li>Intraday Brokerage: 0.05% per executed order.</li></ul></p>
                        </div>
                    </div>
                </section>
                <section className='t-section-2'>
                    <h2 className='p-head'>Disclaimer</h2>
                    <p className='p-txt'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </section>
            </div>
        </div>
    );
}

export default Brokerage;