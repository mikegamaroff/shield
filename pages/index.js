import Head from "next/head";
import React, { Component } from "react";
import { Input, Button, Textarea } from "../pattern/forms/Fields";
import { SlideShow } from "../components/SlideShow";
import { Player } from "video-react";

const teamData = [
  {
    name: "David Garner",
    title: "Production",
    image: "images/head01.jpg",
  },
  {
    name: "Andy Berman",
    title: "Sales",
    image: "images/head02.jpg",
  },
  {
    name: "David Berman",
    title: "Sales",
    image: "images/head03.jpg",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    validated: false,
    sent: "",
  };

  componentDidMount() {
    this._mounted = true;

    /* axios
      .get("https://us-central1-mikegamaroff-8ec96.cloudfunctions.net/getNews")
      .then((res) => {
        console.log(res.data);
        this.setState({ news: res.data });
      })
      .catch((err) => {
        console.log(err);
      }); */
    // this.slideChange();
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getMail = async (state) => {
    /*     fetch("http://localhost:3000/api/mail").then((r) => {
      console.log(r.json());
    }); */
    const data = JSON.stringify({
      name: state.name,
      email: state.email,
      phone: state.phone,
      address: state.address,
    });
    console.log(data);
    const config = {
      method: "POST",
      body: data,
    };
    const req = await fetch("api/mail", config);

    if (req.ok) {
      this.setState({ sent: "sent" });
    } else {
      this.setState({ sent: "failed" });
    }

    // const data = await res;
    //console.log(data);
    //  return data;
  };
  handleSubmit = (e) => {
    this.setState({ sending: "Sending...", errors: {} });
    e.preventDefault();

    this.getMail(this.state);

    /* axios
      .post(
        "https://us-central1-mikegamaroff-8ec96.cloudfunctions.net/sendEmail",
        this.state
      )
      .then((res) => {
        console.log(res);
        this.setState({ sending: false, sent: true });
      })
      .catch((err) => {
        console.log(err);
        //  this.setState({ sending: false, errors: err.response.data });
        //  console.log(err.response.data);
      }); */
  };

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    const title = "Roof Replacement Atlanta | SHIELD Storm Restoration";
    const description =
      "If your property has an older roof or you’ve had some intense hail or high wind storms recently, there’s a good chance that your roof has suffered some (or a lot) of wind or hail damage which means you should consider an inspection.";
    const sitename = "Shield Storm Restoration";
    const siteurl = "https://shieldroofrestoration.vercel.app/";
    const summary =
      "Atlanta’s Trusted Professionals For Roof Repair and Replacement";

    return (
      <div className="container">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={title} />
          <meta
            name="og:description"
            property="og:description"
            content={description}
          />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:url" content={siteurl} />
          <meta name="twitter:card" content={summary} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:site" content={siteurl} />
          <meta name="twitter:creator" content={sitename} />
          <link rel="icon" type="image/png" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <link rel="stylesheet" href="" />
          <meta
            property="og:image"
            content="https://shieldroofrestoration.vercel.app/images/logo_shield.svg"
          />
          <meta
            name="twitter:image"
            content="https://shieldroofrestoration.vercel.app/images/logo_shield.svg"
          />
          <link rel="canonical" href={siteurl} />
        </Head>

        <div className="heroHeaderContainer">
          <div className="heroHeader">
            <div className="heroLeft">
              <div
                className="backgroundRed"
                style={{ textAlign: "center", padding: "25px" }}
              >
                <div>
                  <h1>You may qualify for a new roof and not even know it!</h1>
                  <p>Request a free roof inspection and let us take a look.</p>
                </div>
                <div className="formContainer">
                  <div className="formContents">
                    <form>
                      <Input
                        placeholder="Your name"
                        name="name"
                        color="#323232"
                        type="text"
                        width="100%"
                        error={false}
                        onChange={this.handleChange}
                        autoComplete="off"
                        gap="20px"
                      />
                      <Input
                        placeholder="Phone Number"
                        name="phone"
                        type="number"
                        color="#323232"
                        width="100%"
                        error={false}
                        onChange={this.handleChange}
                        autoComplete="off"
                        gap="20px"
                      />
                      <Input
                        placeholder="Email"
                        name="email"
                        type="email"
                        color="#323232"
                        width="100%"
                        error={false}
                        onChange={this.handleChange}
                        autoComplete="off"
                        gap="20px"
                      />
                      <Input
                        placeholder="Address"
                        name="address"
                        type="text"
                        color="#323232"
                        width="100%"
                        error={false}
                        onChange={this.handleChange}
                        autoComplete="off"
                        gap="20px"
                      />
                      {/*
                          <Textarea
                            placeholder="Message"
                            name="message"
                            type="text"
                            color="white"
                            width="100%"
                            rows={3}
                            error={false}
                            onChange={this.handleChange}
                            autoComplete="off"
                            gap="20px"
                          />
                          */}
                      {this.state.sent !== "sent" ? (
                        <Button
                          label="SUBMIT"
                          submitting={this.state.sending}
                          fullwidth={false}
                          color="#262626"
                          disabled={false}
                          onClick={this.handleSubmit}
                          gradient={["#ffffff", "#ffffff"]}
                          gap="0px"
                        />
                      ) : (
                        <div className="thankyouMessage" id="success">
                          <>
                            <img src="images/copyComplete.gif" />
                            <div style={{ textAlign: "left" }}>
                              Thank you for your message. We'll be in touch
                              shortly.
                            </div>
                          </>
                        </div>
                      )}

                      {this.state.sent == "failed" ? (
                        <div className="thankyouMessage" id="error">
                          <div>
                            Sorry, there appears to have been an issue sending.
                          </div>
                        </div>
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="backgroundBlack"
                style={{
                  display: "grid",
                  gridRowGap: "20px",
                  gridTemplateColumns: "1fr 6fr",
                  padding: "25px",
                }}
              >
                <div>
                  <img style={{ height: "20px" }} src="/images/ico_phone.svg" />
                </div>
                <div
                  className="heavyText"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  404-882-8500
                </div>
                <div>
                  <img
                    style={{ height: "20px" }}
                    src="/images/ico_location.svg"
                  />
                </div>
                <div className="addressText">
                  PMB 313
                  <br />
                  6175 Hickory Flat Hwy
                  <br />
                  STE 110 Canton, Ga 30115
                </div>
              </div>
            </div>
            <div className="heroMiddle">
              <div
                className="logoHeaderContainer"
                style={{ background: "#ffffff" }}
              >
                <div className="logoHeader">
                  <div className="logoShield">
                    <img src="images/logo_shield.svg" />
                  </div>
                  <div>
                    <div className="logoWord">
                      <img id="word" src="images/logo_word.svg" />
                    </div>
                    <p>
                      Atlanta’s Trusted Professionals For Roof Repair and
                      Replacement
                    </p>
                  </div>
                </div>
              </div>
              <div className="videoHolder">
                <video
                  className="background_video"
                  width="100%"
                  preload="auto"
                  loop
                  autoPlay
                  muted
                  src="https://shieldroofrestoration.vercel.app/images/ShieldDrone.mp4"
                  type="video/mp4"
                >
                  <source src="images/shieldDrone.mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>

            <div className="heroRight">
              <div className="slideShowContainer">
                <SlideShow />
              </div>
              <div className="team" style={{ textAlign: "center" }}>
                <h1>Team</h1>
                <div className="teamMembers">
                  {teamData.map((val, i) => {
                    return (
                      <div className="teamMember">
                        <div
                          style={{
                            marginTop: "8px",
                            display: "flex",
                            boxSizing: "border-box",
                            webkitBoxSizing: "border-box",
                            MozBoxSizing: "border-box",
                            width: "80px",
                            height: "80px",
                            background: `url(${val.image}) no-repeat center center`,
                            borderRadius: "100%",
                            border: "3px solid #DADADA",
                            boxShadow: "3px 4px 12px 0 rgba(0,0,0,0.31)",
                            backgroundSize: "cover",
                          }}
                        />
                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "14px",
                            color: "#333333",
                            letterSpacing: 0,
                            fontWeight: 700,
                            textAlign: "center",
                          }}
                        >
                          {val.name}
                        </div>
                        <div
                          style={{
                            marginTop: "3px",
                            fontSize: "13px",
                            color: "#333333",
                            letterSpacing: 0,
                            fontWeight: 400,
                            fontStyle: "italic",
                            textAlign: "center",
                          }}
                        >
                          {val.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grayDivider" />
        </div>
        <div className="section2">
          <div className="section2-content">
            <div className="section2-content-left">
              <p>
                If your property has an older roof or you’ve had some intense
                hail or high wind storms recently, there’s a good chance that
                your roof has suffered some (or a lot) of wind or hail damage
                which means you should consider an inspection.
              </p>

              <p>
                Even though you may not be noticing any leaks, water spots, or
                missing shingles, there still might be damage that, over time,
                could lead to larger complications such as reduced lifespan,
                leaks and water damage.{" "}
              </p>

              <p>
                By identifying wind and hail damage early on, (this type of
                damage falls under the “Act of God” section of your policy),
                then you may be eligible for an insurance claim that could fully
                cover the cost of roof repair or replacement.
              </p>

              <p>
                We specialize in guiding you through this process, from the
                initial hail damage roof inspection and assessment to claim
                filing and the adjuster inspection process to the roof repair
                and replacement.{" "}
              </p>

              <p>
                We’ll even communicate with your insurance company on your
                behalf, supplying drone reports and verifiable storm dates
                ensuring that it all moves forwards smoothly and in a
                hassle-free manner.
              </p>
            </div>
            <div className="section2-content-right"></div>
          </div>
        </div>
        <div>
          <div className="redDivider" />
        </div>
        <div className="section3" style={{ backgroundColor: "#FFFFFF" }}>
          <div style={{ padding: "60px 60px 40px 60px" }}>
            <h1 style={{ marginBottom: "20px" }}>
              What exactly is “Act of God” Insurance Coverage and do you have
              it?
            </h1>
            <p>
              This clause in every homeowner’s insurance policy assures you that
              any damage caused by a natural hazard outside of human control
              such as:
            </p>
          </div>
          <div className="actOfGodTable">
            <div className="godIcons">
              <img src="images/god_hail.svg" />
              <h2>Hail</h2>
            </div>
            <div className="godIcons">
              <img src="images/god_rain.svg" />
              <h2>Rain</h2>
            </div>
            <div className="godIcons">
              <img src="images/god_tornado.svg" />
              <h2>Tornado</h2>
            </div>
            <div className="godIcons">
              <img src="images/god_lightning.svg" />
              <h2>Lightning</h2>
            </div>
            <div className="godIcons high-wind">
              <img src="images/god_wind.svg" />
              <h2>High Wind</h2>
            </div>
          </div>
          <div className="godIcons high-wind-alone">
            <img src="images/god_wind.svg" />
            <h2>High Wind</h2>
          </div>
          <div style={{ padding: "60px 60px 40px 60px" }}>
            <p>
              This is the specific type of damage for which no person can be
              held accountable and is covered by insurance.
            </p>

            <p>
              Here at SHIELD Storm Restoration, we will happily inspect your
              roof using a specific “Act of God” insurance damage assessment. If
              your roof qualifies, then we will work directly with your
              insurance company to ensure that they will pay 100% of your hail
              damage roof insurance claim which makes depreciation recoverable.
            </p>

            <p>
              Unlike many roofing contractors, we use a combination of aerial
              drones and artificial intelligence to get a detailed report of
              your roof’s damage that we can submit along with your insurance
              claim. This ensures that all aspects of the damage are considered
              and that you’re more likely to get full coverage out of your
              insurance company, depending on the extent of the damage.
            </p>
          </div>
        </div>
        <div className="section4">
          <div className="watermark" />
          <div className="drone">
            <img src="images/drone.png" />
          </div>
          <div className="backgroundRed" style={{ padding: "60px" }}>
            <h1>We’ll Work with your Insurance Company!</h1>
            <p>
              Filing a roof damage claim to your insurance company isn’t as easy
              as it might seem. While you can simply pick up the phone and call
              your representative or agent and ask them to send out an adjuster,
              you should know upfront that the adjuster works for your insurance
              company and may not offer you unbiased information.
            </p>

            <p>
              It’s always best to first contact a roofing company to come out
              and inspect your roof. However, when you can partner with a
              company willing to work with your insurance company on your
              behalf, you’ll find yourself in a much simpler and less stressful
              position.
            </p>

            <p>
              By utilizing a roofing contractor with drone experience and AI
              smart software, you can be sure that the full extent of your
              roofing damage will be identified and included in your insurance
              claim which will lead to a higher likelihood that all repairs or
              replacements will be covered by your insurance.
            </p>
          </div>
          <div className="backgroundBlack" style={{ padding: "60px" }}>
            <h1>It’s Time for a New Roof!</h1>
            <p style={{ marginBottom: "30px" }}>
              If your roof does have damage that falls under the “Act of God”
              section of your policy, and your insurance adjuster agrees with
              our findings, it will be time for us to put on your new roof at no
              cost to you! We’ve got experience with a wide variety of
              residential roofing materials, including:
            </p>
            <div className="materials">
              <div className="materialHolder">
                <div>
                  <img src="images/roof_slate.jpg" />
                </div>
                <div>
                  <h2>Slate</h2>
                </div>
              </div>
              <div className="materialHolder">
                <div>
                  <img src="images/roof_metal.jpg" />
                </div>
                <div>
                  <h2>Metal</h2>
                </div>
              </div>
              <div className="materialHolder">
                <div>
                  <img src="images/roof_asphalt.jpg" />
                </div>
                <div>
                  <h2>Asphalt</h2>
                </div>
              </div>
              <div className="materialHolder">
                <div>
                  <img src="images/roof_clay.jpg" />
                </div>
                <div>
                  <h2>Clay</h2>
                </div>
              </div>
              <div className="materialHolder">
                <div>
                  <img src="images/roof_copper.jpg" />
                </div>
                <div>
                  <h2>Copper</h2>
                </div>
              </div>
              <div className="materialHolder">
                <div>
                  <img src="images/roof_cedar.jpg" />
                </div>
                <div>
                  <h2>Cedarwood</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="backgroundWhite" style={{ padding: "60px" }}>
            <h1>Sit Back, Relax, and Let us Do all the Heavy Lifting</h1>
            <p>
              SHIELD Storm Restorations is dedicated to providing you the
              ultimate customer service experience, which is why we’ll be
              respectful of your property and your time.{" "}
            </p>{" "}
            <p>
              We will work for the amount in the insurance scope, guaranteeing
              you only have to pay your deductible, allowing you to move on with
              life in a stress and hassle-free environment, and a brand new roof
              that will last you for years to come and add value to your
              property!
            </p>
            <p>
              When you turn to SHIELD Storm Restorations, not only do we handle
              the entire process from start to finish so you don’t have to worry
              about it, but we will also keep you updated every step of the way,
              ensuring that there are no miscommunications, no surprises, and no
              frustrations.{" "}
            </p>{" "}
            <p>
              When we take on your project, we complete the work as if it was
              our own home, ensuring only the highest quality products,
              supplies, and craftsmanship.
            </p>
          </div>
          <div className="backgroundRed" style={{ padding: "60px" }}>
            <img src="images/logo_white.svg" />
            <p style={{ margin: "10px" }}>
              Atlanta’s Trusted Roof Replacement Contractor
            </p>
            <h1 style={{ margin: "40px 0 30px 0" }}>
              Request a FREE roof inspection now!
            </h1>
            <div className="formContainer">
              <div className="formContents">
                <form>
                  <Input
                    placeholder="Your name"
                    name="name"
                    color="#323232"
                    type="text"
                    width="100%"
                    error={false}
                    onChange={this.handleChange}
                    autoComplete="off"
                    gap="20px"
                  />
                  <Input
                    placeholder="Phone Number"
                    name="phone"
                    type="number"
                    color="#323232"
                    width="100%"
                    error={false}
                    onChange={this.handleChange}
                    autoComplete="off"
                    gap="20px"
                  />
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    color="#323232"
                    width="100%"
                    error={false}
                    onChange={this.handleChange}
                    autoComplete="off"
                    gap="20px"
                  />
                  <Input
                    placeholder="Address"
                    name="address"
                    type="text"
                    color="#323232"
                    width="100%"
                    error={false}
                    onChange={this.handleChange}
                    autoComplete="off"
                    gap="20px"
                  />
                  {/*
                          <Textarea
                            placeholder="Message"
                            name="message"
                            type="text"
                            color="white"
                            width="100%"
                            rows={3}
                            error={false}
                            onChange={this.handleChange}
                            autoComplete="off"
                            gap="20px"
                          />
                          */}
                  {this.state.sent !== "sent" ? (
                    <Button
                      label="SUBMIT"
                      submitting={this.state.sending}
                      fullwidth={false}
                      color="#262626"
                      disabled={false}
                      onClick={this.handleSubmit}
                      gradient={["#ffffff", "#ffffff"]}
                      gap="0px"
                    />
                  ) : (
                    <div className="thankyouMessage" id="success">
                      <img src="images/copyComplete.gif" alt="sent" />
                      <div>
                        Thank you for your message. We'll be in touch shortly.
                      </div>
                    </div>
                  )}

                  {this.state.sent === "failed" ? (
                    <div className="thankyouMessage" id="error">
                      <div>
                        Sorry, there appears to have been an issue sending.
                      </div>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  height: "30px",

                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img style={{ height: "20px" }} src="/images/ico_phone.svg" />
              </div>
              <div style={{ height: "30px" }} className="heavyText">
                404-882-8500
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  height: "30px",

                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img style={{ height: "20px" }} src="/images/ico_phone.svg" />
              </div>
              <div style={{ height: "30px" }} className="heavyText">
                404-882-8500
              </div>
            </div>
            <div className="addressText">
              Shield Storm Restoration | © All Rights Reserved
            </div>
          </div>
          <div className="footerAddress" style={{ display: "flex" }}>
            <div>
              <img
                style={{ height: "20px", marginRight: "10px" }}
                src="/images/ico_location.svg"
              />
            </div>
            <div className="addressText">
              PMB 313 6175 Hickory Flat Hwy
              <br />
              STE 110 Canton, Ga 30115
            </div>
          </div>
        </div>

        <style jsx>{``}</style>

        <style jsx global>{``}</style>
      </div>
    );
  }
}
export default Home;
