import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Navbar } from "./Navbar"
import "../App.css"
import SyncLoader from "react-spinners/SyncLoader";

export const Homepage = () => {

  // CREATING AN OBJECT FOR useState TO SET USER INPUTS
  const [data, setData] = useState({
    relation: "",
    personName: "",
    timeSince: "",
    sharedInterest: "",
    tone: "",
    greeting: ""
  })

  // USE NAVIGATE FOR NAVIGATING FROM ONE PAGE TO ANOTHER
  const navigate = useNavigate()

  //TOGGLE NAVBAR
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  //TOGGLE LOADING STATE FOR BUTTON WHIILE GENERATING GREETING
  const [loading, setLoading] = useState(false);

  // CREATE THE REFERENCES FOR PAGES -> FOR NAVIGATION
  const namePage = useRef({});
  const relationPage = useRef({});
  const timePage = useRef({});
  const interestPage = useRef({});
  const tonePage = useRef({});


  // CREATE FUNCTION TO SET THE USER INPUT DATA INTO THE useState OBJECT 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // CREATE A FUNCTION TO SET THE TONE OF THE GREETING BASED ON USER INPUT
  const handleRangeChange = (e) => {
    const val = parseInt(e.target.value);
    let tone = "";

    if (val >= 0 && val <= 25) {
      tone = "Serious";
    } else if (val >= 26 && val <= 50) {
      tone = "Formal";
    } else if (val >= 51 && val <= 75) {
      tone = "Casual";
    } else if (val >= 76 && val <= 100) {
      tone = "Funny";
    }

    setData((data) => ({
      ...data,
      tone: tone,
    }));
  };

  let toneValue = 0;
  switch (data.tone) {
    case "Serious":
      toneValue = 25;
      break;
    case "Formal":
      toneValue = 50;
      break;
    case "Casual":
      toneValue = 75;
      break;
    case "Funny":
      toneValue = 100;
      break;
    default:
      break;
  }


  // DO A SMOOTH SCROLL WITHIN THE PAGES
  const scrollDown =  (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  // INITIATE THE CONNECTION WITH OPEN AI - CHATGPT
  const initConnection = async (event) => {
    setLoading(true);
    
    // API KEYS
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_ENDPOINT = `https://api.openai.com/v1/completions`;

    try {
      //TRY TO CONNECT WITH CHATGPT AND GENERATE GREETING BASED ON USER INPUT DATA
      const res = await axios.post(API_ENDPOINT, {
        model: "text-davinci-003",
        prompt: `As a human post writer, without mentioning their name and skip hey, hie, hello and write me a ${data.tone} Ramadan Greeting message for my ${data.relation}, who did not meet since ${data.timeSince} and mentioning about ${data.sharedInterest} the common interest that we share and exclude the words like 'Salaam', 'Assalaamu Alikeum', etc and complete the message with within 70 words.`,
        max_tokens: 70,
        n: 1,
        temperature: 0.7,
      }, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      });
      // SET THE GENERATED GREETING INTO useState OBJECT 
      setData({
        ...data,
        greeting: res.data.choices[0].text
      });

      // SET THE GENERATED AND USER INPUT DATA INTO THE LOCAL STORAGE
      localStorage.setItem("greeting", JSON.stringify(res.data.choices[0].text));
      localStorage.setItem("data", JSON.stringify(data));

      // NAVIGATE TO THE GREETINGS PAGE AFTER THE GREETING IS GENERATED
      navigate(`/greetings`);
      event.preventDefault();
      
    } catch (err) {
      // IF THERE IS SOME ERROR WHILE GENERATING
      console.error(err);
    }
    finally {
      // SET THE LOADING STATE ON BUTTON TO FALSE
      setLoading(false);
    }
  }

  const getVal = () => {
    console.log(data.tone)
  }


  return (
    <>
      <main>
        {/* <!-- NAVBAR CODE STARTS HERE --> */}
        {isNavbarOpen && <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>}
        <aside onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <img className="hamburger" src="https://i.ibb.co/K9VXZQj/Asset-25.png" alt="Go Here To View Rewards" />
        </aside>
        {/* <!-- NAVBAR CODE ENDS HERE --> */}

        {/* <!-- PAGE 1 CODE : START --> */}
        <section>
            <div className="content">
                <img src="https://i.ibb.co/VDDHt8D/Asset-46.png" alt="Ramadan ReGreet" />
                <h1>Connect with loved ones or those you've lost touch with this Ramadan.</h1>
                <p>Have fun generating your greetings, with no fuss of what to write using our AI generator.</p>
            </div>
            <nav>
                <p>Ready to connect smarter this Ramadan?</p>
                <button className="proceeding_cta" onClick={() => scrollDown(relationPage)}>Let's go!</button>
            </nav>
        </section>
        {/* <!-- PAGE ONE CODE : END --> */}

        {/* <!-- PAGE TWO CODE : START --> */}
        <section ref={relationPage}>
            <div className="content">
                <h1 className="black_text">Tell us about the person you want to connect with </h1>
                <div className="input">
                    <input required type="text" value={data.relation} name="relation" onChange={handleChange} placeholder="e.g. Brother / Friend / Neighbour" />
                </div>
            </div>
            <nav>
                <p>Step One</p>
                <button className="proceeding_cta" onClick={() => scrollDown(namePage)}>Next</button>
            </nav>
        </section>
        {/* <!-- PAGE TWO CODE : END --> */}

        {/* <!-- PAGE THREE CODE : START --> */}
        <section ref={namePage}>
            <div className="content">
                <h1 className="black_text">What's their name</h1>
                <div className="input">
                    <input required type="text" value={data.personName} name="personName" onChange={handleChange} placeholder="e.g. Actual Name / Nickname" />
                </div>
            </div>
            <nav>
                <p>Step Two</p>
                <button className="proceeding_cta" onClick={() => scrollDown(timePage)}>Next</button>
            </nav>
        </section>
        {/* <!-- PAGE THREE CODE : END --> */}

        {/* <!-- PAGE FOUR CODE : START --> */}
        <section ref={timePage}>
            <div className="content">
                <h1 className="black_text">When was the last time you two interacted?</h1>
                <div className="input">
                    <input required type="text" value={data.timeSince} name="timeSince" onChange={handleChange} placeholder="e.g. Last Week / 2 Months / 4 Years" />
                </div>
            </div>
            <nav>
                <p>Step Three</p>
                <button required className="proceeding_cta" onClick={() => scrollDown(interestPage)}>Next</button>
            </nav>
        </section>
        {/* <!-- PAGE FOUR CODE : END --> */}

        {/* <!-- PAGE FIVE CODE : START --> */}
        <section ref={interestPage}>
            <div className="content">
                <h1 className="black_text">What's a fun interest you both share?</h1>
                <div className="input">
                    <input required type="text" value={data.sharedInterest} name="sharedInterest" onChange={handleChange} placeholder="e.g. Gaming / Ice cream / Fishing" />
                </div>
            </div>
            <nav>
                <p>Step Four</p>
                <button className="proceeding_cta" onClick={() => scrollDown(tonePage)}>Next</button>
            </nav>
        </section>
        {/* <!-- PAGE FIVE CODE : END --> */}

        {/* <!-- PAGE SIX CODE : START --> */}
        <section ref={tonePage}>
            <div className="content greeting_generator_page">
                <h1 className="black_text">Tell us how serious, casual or funny you want to be</h1>
                <div className="input">
                    <input type="range" value={toneValue} step="1" name="tone" onChange={handleRangeChange} min="0" max="100"/>
                      <div className="range_list">
                        <img src="https://i.ibb.co/DwnKdRP/Asset-40.png" alt="Serious" />
                        <img src="https://i.ibb.co/v48rbLP/Asset-41.png" alt="Casual" />
                        <img src="https://i.ibb.co/JFW7SvV/Asset-42.png" alt="Funny" />
                      </div>
                      <button onClick={getVal}>Get Value</button>
                </div>
                <div className="integration_samsung_prods">
                    <div className="c-checkbox c-checkbox--svg">
                        <input className="sr-only" id="cs" type="checkbox" />
                        <label className="c-checkbox__label c-checkbox__label--svg" htmlFor="cs">
                            <svg viewBox="0 0 100 100" className="icon-svg checkmark-icon" role="presentation">
                                <path className="checkbox-icon-svg-path" fill="none" stroke="#000" strokeWidth="14" strokeLinecap="square" strokeLinejoin="square" strokeMiterlimit="10" d="M12.1 52.1l24.4 24.4 53-53" />
                            </svg>Integrate Samsung product into greetings :)</label>
                    </div>
                </div>
            </div>
            <nav>
                <p>Step Five</p>
                <button className="generate_greetings_cta" onClick={initConnection}>{loading ? <SyncLoader color="#2c04bc" margin={0} size={10} /> : "Generate Greeting"}</button>
            </nav>
        </section>
        {/* <!-- PAGE SIX CODE : END --> */}
       
    </main>
    </>
  );
}

export default Homepage;

