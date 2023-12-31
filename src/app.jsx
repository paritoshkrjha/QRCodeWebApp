import { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm";
import { useEffect, useRef, useState } from "preact/hooks";
import Router, { Route } from 'preact-router';

import OTPAuth from "./components/OTPAuth";
import Container from "./components/Container";
import Stepper from "./components/Stepper";
import ContactForm from "./components/ContactForm";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase"
import { sendMessage } from "./controller/sender";
import Success from "./components/Success";
import Home from "./pages/home";


const Logo = () => {
  return (
    <>
      <p className=" text-center text-2xl text-black font-bold pt-6 mb-6 sm:mb-12">QR-Helper</p>
    </>
  )
}


export function App() {
  const [currScreen, setCurrScreen] = useState('userform');
  const message = useRef({})
  const [invalidUserId, setInvalidUserId] = useState(false)
  const [userId, setUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [confirmationResult, setConfirmationResult] = useState(null)

  useEffect(() => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url)
    const userId = urlParams.get('userId')
    // getCurrentUserLocation()
    if (!userId) {
      setInvalidUserId(true)
    }
    else {
      console.log('Testing');
      setUserId(userId)
    }
  }, [])

  async function recaptchaCallback(number) {
    const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
      callback: () => {
        setLoading(true)
      }
    })
    recaptcha.render()
    try {
      const result = await signInWithPhoneNumber(auth, number, recaptcha)
      setConfirmationResult(result)
      return result
    } catch (err) {
      throw new Error(err)
    } finally {
      setLoading(false)
    }
  }

  async function phoneNumberVerfier(otpValue) {
    setLoading(true)
    try {
      console.log('confirmationResult ', confirmationResult);
      console.log('otp', otpValue)
      await confirmationResult.confirm(otpValue);
      setCurrScreen('successful')
      await sendMessage(message.current, userId);
    }
    catch (err) {
      console.log(err)
      throw new Error(err)

    }
    finally {
      setLoading(false)
    }
  }


  return (
    <Router>
    <div className=" min-h-screen bg-[#f5f5f5] flex  justify-center items-center px-5 py-5">
      <div className="h-max bg-[#f5f5f5] flex flex-col justify-center items-center sm:p-20">
        <Route component={<Home/>} path="/abc" />
        <Logo />
        <Container >
          {currScreen != 'successful' && <Stepper getActiveIndex={() => {
            switch (currScreen) {
              case 'userform': return 0;
              case 'contact': return 1;
              case 'otp': return 2;
            }
          }
        } />}
          {
            currScreen == 'userform' && <UserForm setScreen={setCurrScreen} message={message} />
          }
          {
            currScreen == 'contact' && <ContactForm setScreen={setCurrScreen} message={message} userId={userId} recaptchaCallback={recaptchaCallback} loading={loading} />
          }
          {
            currScreen == 'otp' && <OTPAuth setScreen={setCurrScreen} loading={loading} phoneNumberVerfier={phoneNumberVerfier} />
          }
          {
            currScreen == 'successful' && <Success />
          }
        </Container>
      </div>
      <Toaster />
    </div>
          </Router>

  );
}

