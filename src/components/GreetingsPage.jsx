import React, { useState } from "react";

export const GreetingsPage = (props) => {
    const { greeting } = props;
    return (
        <>
            <main className="greetings">
            {/* <!-- NAVBAR CODE STARTS HERE --> */}
            <aside>
                <a href="./navbar.html">
                    <img className="hamburger" src="https://samsung-crm.com/mena/Common/autogreet/hamburger.png" alt="" />
                </a>
            </aside>
            {/* <!-- NAVBAR CODE ENDS HERE --> */}

            {/* <!-- PAGE 1 CODE : START --> */}
            <section>
                <div className="page_title">
                    <p>Ta-Dah! Here's your Ramadan Re-Greet</p>
                </div>
                <div className="greeting_card_area">
                    <div className="greeting_card">
                        <p>
                        {greeting}
                        </p>
                    </div>
                </div>
                <div className="greetings_actions">
                    <div className="share">
                        <img src="https://samsung-crm.com/mena/Common/autogreet/share.png" alt="" />
                        <p>Share greeting</p>
                    </div>
                    <div className="try_another">
                        <img src="https://samsung-crm.com/mena/Common/autogreet/try-again.png" alt="" />
                        <p>Try another</p>
                    </div>
                </div>
                <div className="start_over">
                    <a href="./index.html">Start Over</a>
                </div>
                <nav>
                    <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="Connect smarter with this Ramadan" /></div>
                    <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="SAMSUNG" /></div>
                </nav>
            </section>
            {/* <!-- PAGE ONE CODE : END --> */}

        </main>
        </>
    )
} 

export default GreetingsPage;