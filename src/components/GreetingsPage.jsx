import React, {useState, useRef} from "react";
import { Navbar } from "./Navbar"
import { useNavigate } from "react-router";
import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';

export const GreetingsPage = (initConnection) => {
  
    // USE NAVIGATE FOR NAVIGATING FROM ONE PAGE TO ANOTHER
    const navigate = useNavigate()

    //TOGGLE NAVBAR 
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    //TOGGLE SHARE COMPONENT
    const [isSharingComponentOpen, setIsSharingComponentOpen] = useState(false);

    // GET DATA FROM THE LOCAL STORAGE TO DISPLAY
    const greetingLocalStorage = JSON.parse(localStorage.getItem("greeting"));
    const parsedData = JSON.parse(localStorage.getItem("data"));

    // FUNCTION TO GENERATE ANOTHER GREETING
      const handleTryAnother = async () => {
        await initConnection();
      };

      // REFERNECE FOR IMAGE 
      const greetingRef = useRef(null);
 
      // LOGIC FOR IMAGE TO GENERATE AND DOWNLOAD
      const exportAsImage = async () => {

        const dataUrl = await htmlToImage.toPng(greetingRef.current);
        // DOWNLOAD THE IMAGE
        const link = document.createElement('a');
        link.download = "greeting.png";
        link.href = dataUrl;
        link.click();
      }

    return (
        <>
            <main className="greetings">
            {/* <!-- NAVBAR CODE STARTS HERE --> */}
            {/* {isNavbarOpen && <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>}
            <aside onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                <img className="hamburger" src="https://i.ibb.co/K9VXZQj/Asset-25.png" alt="Go Here To View Rewards" />
            </aside> */}
            {/* <!-- NAVBAR CODE ENDS HERE --> */}

            {/* <!-- PAGE 1 CODE : START --> */}
            <section className="greeting_section"> 
            <div className="generic_title">
                <p>Ta-Dah! <br /> Here's your greeting.</p>
            </div> 
            <div className="greeting_area black_text">
                <img className="top_left_stars" src="https://i.ibb.co/0BfyKPm/Asset-49.png" alt="" />
                
                <h2>Hey {parsedData.personName}!</h2>
                <p className="greeting">{greetingLocalStorage}</p>
                <img src="https://i.ibb.co/vQrWcPJ/Asset-50.png" alt="" className="bottom_right_stars" />
            </div>
            
            <nav className="greetings_nav">
                <div className="greeting_img">
                    <img src="https://i.ibb.co/xMxCcWC/Asset-31.png" alt="" />
                </div>
                <div className="greetings_actions">
                    <div className="share" onClick={() => setIsSharingComponentOpen(!isSharingComponentOpen)}>
                        <img src="https://i.ibb.co/Lh7rGGx/Asset-33.png" alt="" />
                        <p>Share greeting</p>
                    </div>
                    <div className="try_another" onClick={handleTryAnother}>
                        <img src="https://i.ibb.co/Y03Nbpr/Asset-32.png" alt="" />
                        <p>Try another</p>
                    </div>
                </div>
                <div className="start_over">
                    <button className="proceeding_cta" onClick={() => navigate('/')}>Start Over</button>
                </div>
            </nav>
        </section>
            {/* <!-- PAGE ONE CODE : END --> */}

            {/* SHARE GREETING COMPONENT : START */}
            <div style={{ bottom: isSharingComponentOpen ? '0%' : '-100%'}} className="share_greeting_component">
            <div className="close_greeting_component" onClick={() => setIsSharingComponentOpen(!isSharingComponentOpen)}>
                <img src="https://i.ibb.co/vv9y90q/Asset-47.png" alt="" />
            </div>
            <div className="greeting_to_share">
                <div className="greeting_area black_text" id="generatedGreeting" ref={greetingRef}>
                    <img className="bg_img" src="https://i.ibb.co/2Y0S3BQ/Asset-2.png" alt="" />
                    <img className="top_left_stars" src="https://i.ibb.co/0BfyKPm/Asset-49.png" alt="" />
                    <h2>Hey {parsedData.personName}!</h2>
                    <p className="greeting">{greetingLocalStorage}</p>
                    <img className="regreet_share_component_logo" src="https://i.ibb.co/cJFHdW5/Asset-27.png" alt="" />
                    <img src="https://i.ibb.co/vQrWcPJ/Asset-50.png" alt="" className="bottom_right_stars" />
                </div>
            </div>
            <div className="share_via_socials">
                <p className="share_title">Share via</p>
                <ul className="socials">
                    <li className="social_icon" onClick={exportAsImage}>
                        <img src="https://i.ibb.co/KK5Yxj4/Asset-55.png" alt="" />
                        <p className="black_text social_name">Whatsapp</p>
                    </li>
                    <li className="social_icon">
                        <img src="https://i.ibb.co/C9gMjxf/Asset-54.png" alt="" />
                        <p className="black_text social_name">Facebook</p>
                    </li>
                    <li className="social_icon">
                        <img src="https://i.ibb.co/34xvJm2/Asset-53.png" alt="" />
                        <p className="black_text social_name">Mail</p>
                    </li>
                    <li className="social_icon">
                        <img src="https://i.ibb.co/5xjSxz0/Asset-52.png" alt="" />
                        <p className="black_text social_name">Pinterest</p>
                    </li>
                </ul>
            </div>
            </div>
            {/* SHARE GREETING COMPONENT : END */}
        </main>
        </>
    )
} 

export default GreetingsPage;