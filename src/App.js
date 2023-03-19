import React, { useState, useRef } from "react";
import axios from "axios";
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from "react-router-dom";
import html2canvas from "html2canvas";
import {Greetings} from "./components/Greetings"
import {Navbar} from "./components/Navbar"
import "./App.css"


function GreetingGenerator() {

  const [relation, setRelation] = useState("");
  const [personName, setPersonName] = useState("");
  const [timeSince, setTimeSince] = useState("");
  const [sharedInterest, setSharedInterest] = useState("");
  const [tone, setTone] = useState("");
  const [greeting, setGreeting] = useState("");

  const [navbar, setNavbar] = useState(false)
  const toggleNav = () => {
    setNavbar((current) => !current);
  }

  const namePage = useRef({});
  const timePage = useRef({});
  const interestPage = useRef({});
  const tonePage = useRef({});

  const initConnection = async (event) => {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_ENDPOINT = `https://api.openai.com/v1/completions`;

    try {
      const res = await axios.post(API_ENDPOINT, {
        model: "text-davinci-003",
        prompt: `Generate a ramadan greeting for a person with ${relation} relation, with the name ${personName}, who did not meet for ${timeSince} and have the interest of ${sharedInterest} with ${tone} tone`,
        max_tokens: 50,
        n: 1,
        temperature: 0.3,
      }, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      });
      console.log(res.data.choices[0].text);
      setGreeting(res.data.choices[0].text);
    } catch (err) {
      console.error(err);
    }
  }

  const exportAsImage = () => {
    html2canvas(document.querySelector("#greeting")).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.download = "greeting.jpeg";
      link.href = imgData;
      link.click();
    });
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
        {/* <div>
        <form>
          <label>
            Relation with the person:
            <input
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            />
          </label>
          <br />
          <label>
            Name of the person:
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Time since last interaction:
            <input
              type="text"
              value={timeSince}
              onChange={(e) => setTimeSince(e.target.value)}
            />
          </label>
          <br />
          <label>
            Shared interest:
            <input
              type="text"
              value={sharedInterest}
              onChange={(e) => setSharedInterest(e.target.value)}
            />
          </label>
          <br />
          <label>
            Tone:
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="serious">Serious</option>
              <option value="casual">Casual</option>
              <option value="funny">Funny</option>
            </select>
          </label>
          <br />
        </form>
        <button onClick={initConnection}>Generate Greeting</button>
        <br />
        <div id="greeting">{greeting}</div>
        <br />
        <button onClick={exportAsImage}>Export as Image</button>
      </div> */}



      <main>
        {/* <!-- NAVBAR CODE STARTS HERE --> */}
        {navbar && <Navbar />}
        <aside onClick={() => toggleNav()}>
            <img className="hamburger" src="https://samsung-crm.com/mena/Common/autogreet/hamburger.png" alt="" />
        </aside>
        {/* <!-- NAVBAR CODE ENDS HERE --> */}

        {/* <!-- PAGE 1 CODE : START --> */}
        <section>
            <div className="main-logo">
                <a href="https://www.samsung.com/"><img src="https://samsung-crm.com/mena/KSA/230302_Ramadan-Offers/_W2/SamsungLogo.png" alt="SAMSUNG" /></a>
            </div>
            <div className="content">
                <h1>Connect with loved ones or those you've lost touch with this Ramadan</h1>
                <p>Have fun generating your greetings, with no fuss of what to write using our AI generator. The more greetings you share, the more discount codes you'll unlock. Ready to connect smarter this Ramadan? Let's go</p>
                <p className="scroll_text">Scroll to start</p>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
            </div>
            <nav>
                <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="Connect smarter with this Ramadan" /></div>
                <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="SAMSUNG" /></div>
            </nav>
        </section>
        {/* <!-- PAGE ONE CODE : END --> */}

        {/* <!-- PAGE TWO CODE : START --> */}
        <section ref={namePage}>
            <div className="content">
                <h1 className="blue_text">Tell us about the person you want to connect with </h1>
                <div className="input">
                    <p className="question">How are you related?</p>
                    <input type="text" value={relation} onChange={(e) => setRelation(e.target.value)} placeholder="e.g. Brother / Friend / Neighbour" />
                </div>
                <div className="input">
                    <p className="question">What's his/her name?</p>
                    <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="e.g. Acutal Name / Nickname" />
                </div>
                <button className="proceeding_cta" onClick={() => scrollDown(timePage)}>Next</button>
            </div>
            <nav>
                <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="" /></div>
                <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="" /></div>
            </nav>
        </section>
        {/* <!-- PAGE TWO CODE : END --> */}

        {/* <!-- PAGE THREE CODE : START --> */}
        <section ref={timePage}>
            <div className="content">
                <h1 className="blue_text">When was the last time you two Interacted?</h1>
                <div className="input">
                    <input type="text" value={timeSince} onChange={(e) => setTimeSince(e.target.value)} placeholder="e.g. Last Week / 2 Months / 4 Years" />
                </div>
                <button className="proceeding_cta" onClick={() => scrollDown(interestPage)}>Next</button>
            </div>
            <nav>
                <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="" /></div>
                <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="" /></div>
            </nav>
        </section>
        {/* <!-- PAGE THREE CODE : END --> */}

        {/* <!-- PAGE FOUR CODE : START --> */}
        <section ref={interestPage}>
            <div className="content">
                <h1 className="blue_text">What's a fun Interest you both share?</h1>
                <div className="input">
                    <input type="text" value={sharedInterest} onChange={(e) => setSharedInterest(e.target.value)} placeholder="e.g. Gaming / Ice-cream / Fishing" />
                </div>
                <button className="proceeding_cta" onClick={() => scrollDown(tonePage)}>Next</button>
            </div>
            <nav>
                <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="" /></div>
                <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="" /></div>
            </nav>
        </section>
        {/* <!-- PAGE FOUR CODE : END --> */}

        {/* <!-- PAGE FIVE CODE : START --> */}
        <section ref={tonePage}>
            <div className="content">
                <h1>Tell us how serious, casual or funny you want to be</h1>
                <div className="input">
                    <input type="range" value={tone} onChange={(e) => setTone(e.target.value)} min="1" max="3" list="tone"/>
                      <div className="range_list">
                        <p>Serious</p>
                        <p>Casual</p>
                        <p>Funny</p>
                      </div>
                </div>
                <div className="integration_samsung_prods">
                    <input type="checkbox" id="samsung-products"/>
                    <label htmlFor="samsung-products">Integrate Samsung product into greetings :)</label>
                </div>

                <button className="generate_greetings_cta" onClick={initConnection} data={greeting}>Generate Greeting</button>
                

                 
                  
                {/* <a href="./greetings.html">
                    <button className="generate_greetings_cta">Generate Greeting</button>
                </a> */}
            </div>
            <nav>
                <div className="connect_smarter"><img src="https://samsung-crm.com/mena/Common/autogreet/connect-smarter.png" alt="" /></div>
                <div className="samsung_logo"><img src="https://samsung-crm.com/mena/Common/autogreet/samsung-nav.png" alt="" /></div>
            </nav>
        </section>
        {/* <!-- PAGE FIVE CODE : END --> */}

    </main>
    </>
  );
}

export default GreetingGenerator;

