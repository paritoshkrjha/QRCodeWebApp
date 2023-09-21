import { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm";
import { useEffect, useRef, useState } from "preact/hooks";
import OTPAuth from "./components/OTPAuth";


const Logo = () => {
  return (
    <>
      <p className=" text-center text-3xl text-black font-bold pt-6 mb-6 sm:mb-12">XYZ</p>
    </>
  )
}


export function App() {
  const [currScreen, setCurrScreen] = useState('userform');
  const message = useRef({})
  const [invalidUserId, setInvalidUserId] = useEffect(false)
  const [userId,setUserId] = useEffect(null)

  useEffect(()=>{
    const url = window.location.search;
    const urlParams = new URLSearchParams(url)
    const userId = urlParams.get('userId')
    if(!userId){
      setInvalidUserId(true)
    }
    else{
      setUserId(userId)
    }
  },[])

  return (
    <div className=" min-h-screen bg-[#f5f5f5] flex  justify-center items-center px-5 py-5">
      <div className="h-max bg-[#f5f5f5] flex flex-col justify-center items-center sm:p-20">
        <Logo />
        {
          currScreen == 'userform' && <UserForm setScreen={setCurrScreen}  message = {message}/>
        }
        {
          currScreen == 'otp' && <OTPAuth setScreen={setCurrScreen}  message = {message} userId = {userId}/>
        }
      </div>
      <Toaster />
    </div>
  );
}

