import { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm";
import { useState } from "preact/hooks";
import OTPAuth from "./components/OTPAuth";

export function App() {
  const [currScreen , setCurrScreen]= useState('userform')
  return (
  <>
    <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col justify-center items-center text-white p-20">
      {/* <OTPAuth /> */}
      {
        currScreen == 'userform' && <UserForm setScreen = {setCurrScreen} />
      }
      {
        currScreen == 'otp' && <OTPAuth setScreen = {setCurrScreen}/>
      }
    </div>
    <Toaster />
  </>
  );
}
