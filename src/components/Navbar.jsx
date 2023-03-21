import React, {useState} from "react";

export const Navbar = ( { isNavbarOpen, setIsNavbarOpen } ) => {
    return(
        <>
            <nav className={isNavbarOpen ? "nav_drawer" : "nav_drawer_closed"}>
                <div className="close_cta" onClick={() => setIsNavbarOpen(false)}>
                    <img src="https://samsung-crm.com/mena/Common/autogreet/close.png" alt="" />
                </div>

                <div className="nav_content">
                    <div className="nav_title">
                        <h1 className="title">my rewards</h1>
                    </div>
                    <div className="nav_desc">
                        <p>Here are the discount codes you've unlocked so far. Use it during your checkout at Samsung.com, or share it with someone who needs it more - It's all up to you.</p>
                    </div>
                    <div className="voucher_code_section">
                        <ul className="voucher_list">
                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>Free Galaxy Buds</p>
                                    <div className="product_voucher">JMD602</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>10% off Serif TV</p>
                                    <div className="product_voucher">RMD105</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>15% off Bespoke Fridge</p>
                                    <div className="product_voucher">CJV375</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>10% off Galaxy S23</p>
                                    <div className="product_voucher">KPN800</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>Free Wireless Car Charger</p>
                                    <div className="product_voucher">TVH2N0</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>Free Galaxy Buds</p>
                                    <div className="product_voucher">JMD602</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li className="voucher">
                            <div className="voucher_item">
                                <div className="product_name">
                                    <p>25W Travel Adapter Free</p>
                                    <div className="product_voucher">CQM9P0</div>
                                </div>
                                <div className="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="overlay" onClick={() => setIsNavbarOpen(false)}></div>
        </>
    )
}