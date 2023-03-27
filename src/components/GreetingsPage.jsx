import React, {useState} from "react";
import { Navbar } from "./Navbar"
import { useLocation } from "react-router-dom";

export const GreetingsPage = (initConnection) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const greeting = params.get("greeting");

    //Share greeting
    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Share Greeting",
              text: greeting,
            });
          } catch (error) {
            console.error("Error sharing:", error);
          }
        } else {
          alert("Sorry, sharing is not supported on your browser");
        }
      };

      const handleTryAnother = async () => {
        await initConnection();
      };
    

    return (
        <>
        {isNavbarOpen && <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>}
            <main className="greetings">
            {/* <!-- NAVBAR CODE STARTS HERE --> */}
            <aside>
                
                    <img onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="hamburger" src="https://samsung-crm.com/mena/Common/autogreet/hamburger.png" alt="" />
                
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
                    <div className="share" onClick={handleShare}>
                        <img src="https://samsung-crm.com/mena/Common/autogreet/share.png" alt="" />
                        <p>Share greeting</p>
                    </div>
                    <div className="try_another" onClick={handleTryAnother}>
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