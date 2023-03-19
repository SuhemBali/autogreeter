import React, { useState } from "react";

export const Greetings = (props) => {
    return (
        <>
            <main class="greetings">
            {/* <!-- NAVBAR CODE STARTS HERE --> */}
            <aside>
                <a href="./navbar.html">
                    <img class="hamburger" src="./_assets/hamburger.png" alt="" />
                </a>
            </aside>
            {/* <!-- NAVBAR CODE ENDS HERE --> */}

            {/* <!-- PAGE 1 CODE : START --> */}
            <section>
                <div class="page_title">
                    <p>Ta-Dah! Here's your Ramadan Re-Greet</p>
                </div>
                <div class="greeting_card_area">
                    <div class="greeting_card">
                        <p>
                            {props.data}
                        </p>
                    </div>
                </div>
                <div class="greetings_actions">
                    <div class="share">
                        <img src="https://samsung-crm.com/mena/Common/autogreet/share.png" alt="" />
                        <p>Share greeting</p>
                    </div>
                    <div class="try_another">
                        <img src="https://samsung-crm.com/mena/Common/autogreet/try-again.png" alt="" />
                        <p>Try another</p>
                    </div>
                </div>
                <div class="start_over">
                    <a href="./index.html">Start Over</a>
                </div>
                <nav>
                    <div class="connect_smarter"><img src="./_assets/connect-smarter.png" alt="Connect smarter with this Ramadan" /></div>
                    <div class="samsung_logo"><img src="./_assets/samsung-nav.png" alt="SAMSUNG" /></div>
                </nav>
            </section>
            {/* <!-- PAGE ONE CODE : END --> */}

        </main>
        </>
    )
} 