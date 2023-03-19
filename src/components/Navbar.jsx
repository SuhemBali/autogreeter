import React, {useState} from "react";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(true)
    const toggleNav = () => {
        setNavbar((current) => !current);
    }
    return(
        <>
            {navbar && <>
                <nav class="nav_drawer">
                <div class="close_cta" onClick={() => toggleNav()}>
                    <img src="https://samsung-crm.com/mena/Common/autogreet/close.png" alt="" />
                </div>

                <div class="nav_content">
                    <div class="nav_title">
                        <h1 class="title">my rewards</h1>
                    </div>
                    <div class="nav_desc">
                        <p>Here are the discount codes you've unlocked so far. Use it during your checkout at Samsung.com, or share it with someone who needs it more - It's all up to you.</p>
                    </div>
                    <div class="voucher_code_section">
                        <ul class="voucher_list">
                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>Free Galaxy Buds</p>
                                    <div class="product_voucher">JMD602</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>10% off Serif TV</p>
                                    <div class="product_voucher">RMD105</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>15% off Bespoke Fridge</p>
                                    <div class="product_voucher">CJV375</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>10% off Galaxy S23</p>
                                    <div class="product_voucher">KPN800</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>Free Wireless Car Charger</p>
                                    <div class="product_voucher">TVH2N0</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>Free Galaxy Buds</p>
                                    <div class="product_voucher">JMD602</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>

                        <li class="voucher">
                            <div class="voucher_item">
                                <div class="product_name">
                                    <p>25W Travel Adapter Free</p>
                                    <div class="product_voucher">CQM9P0</div>
                                </div>
                                <div class="share-cta">
                                    <button>share a gift</button>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="overlay" onClick={() => toggleNav()}></div>
            </>}
        </>
    )
}