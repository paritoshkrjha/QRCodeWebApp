import { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm";

export function App() {
  return (
  <>
    <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col justify-center items-center text-white p-20">
      {/* <OTPAuth /> */}
      <UserForm/>
    </div>
    <Toaster />
  </>
  );
}
