import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import html2canvas from "html2canvas";
import { Navbar } from "./Navbar"
import "../App.css"
import SyncLoader from "react-spinners/SyncLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

export const Homepage = () => {

  const [data, setData] = useState({
    relation: "",
    personName: "",
    timeSince: "",
    sharedInterest: "",
    tone: "",
    greeting: ""
  })

  useEffect(() => {
    console.log(`This is from the object: ${data.greeting}`);
  }, [data.greeting]);

  const navigate = useNavigate()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const namePage = useRef({});
  const timePage = useRef({});
  const interestPage = useRef({});
  const tonePage = useRef({});


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const scrollDown =  (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const initConnection = async (event) => {
    setLoading(true);
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const API_ENDPOINT = `https://api.openai.com/v1/completions`;

    try {
      const res = await axios.post(API_ENDPOINT, {
        model: "text-davinci-003",
        prompt: `Generate a ramadan greeting for a person with ${data.relation} relation, with the name ${data.personName}, who did not meet for ${data.timeSince} and have the interest of ${data.sharedInterest} with ${data.tone} tone`,
        max_tokens: 70,
        n: 1,
        temperature: 0.3,
      }, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      });
      setData({
        ...data,
        greeting: res.data.choices[0].text
      });

      navigate(`/greetings?greeting=${res.data.choices[0].text}`);
      event.preventDefault();
      
    } catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false);
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

  

  return (
    <>
        {/*
        <button onClick={exportAsImage}>Export as Image</button>
      </div> */}



      <main>
        {/* <!-- NAVBAR CODE STARTS HERE --> */}
        {isNavbarOpen && <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>}
        <aside onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
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
                    <input type="text" value={data.relation} name="relation" onChange={handleChange} placeholder="e.g. Brother / Friend / Neighbour" />
                </div>
                <div className="input">
                    <p className="question">What's his/her name?</p>
                    <input type="text" value={data.personName} name="personName" onChange={handleChange} placeholder="e.g. Acutal Name / Nickname" />
                </div>
                <button type="submit" className="proceeding_cta" onClick={() => scrollDown(timePage)}>Next</button>
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
                    <input type="text" value={data.timeSince} name="timeSince" onChange={handleChange} placeholder="e.g. Last Week / 2 Months / 4 Years" />
                </div>
                <button className="proceeding_cta" type="submit" onClick={() => scrollDown(interestPage)}>Next</button>
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
                    <input type="text" value={data.sharedInterest} name="sharedInterest" onChange={handleChange}placeholder="e.g. Gaming / Ice-cream / Fishing" />
                </div>
                <button className="proceeding_cta" type="submit" onClick={() => scrollDown(tonePage)}>Next</button>
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
                    <input type="range" value={data.tone} name="tone" onChange={handleChange} min="1" max="3" list="tone"/>
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
                <button type="submit" onClick={initConnection} className="generate_greetings_cta">{loading ? <SyncLoader color="#2c04bc" margin={0} size={10} /> : "Generate Greeting"}</button>
               
                 
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

export default Homepage;

