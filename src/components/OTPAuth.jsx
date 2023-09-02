import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { useState } from "preact/hooks";
import { auth } from '../firebase.js'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";

const OTPAuth = () => {
    const { register: register1, formState: formState1, handleSubmit: handleSubmit1, watch: watch1 } = useForm();
    const { register: register2, formState: formState2, handleSubmit: handleSubmit2, watch: watch2 } = useForm();
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(true);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [status, setStatus] = useState('phone');

    async function setUpRecaptcha(number) {
        const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {});
        await recaptcha.render();
        console.log(number);
        try {
            const result = await signInWithPhoneNumber(auth, number, recaptcha);
            console.dir(result);
            setConfirmationResult(result);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const requestOTP = async (values) => {
        const contactValue = '+91' + values.contact;
        try {
            const response = await setUpRecaptcha(contactValue);
            toast.success("OTP sent successfully")
            setStatus('otp');
            console.log(response);
            setLoading(false);

        } catch (err) {
            console.log('The error is', err);
            toast.error("Kuch toh gadbad hai daya")
        }
    };


    const submitHandler = async (values) => {
        const otpValue = values.otp;
        try {
            await confirmationResult.confirm(otpValue);
            toast.success("OTP successfully verified")
            console.log("HO gya bhai");
        } catch (error) {
            toast.error("Invalid OTP. Try again.")
            console.log(error);
        }
    };


    return (
        <div className="bg-white rounded text-black p-4 flex flex-col justify-center text-center">
            {status == 'phone' && <form onSubmit={handleSubmit1(requestOTP)}>
                <Input {...register1('contact', {
                    required: "Phone number can not be empty", validate: (number) => {
                        const regex = /^(?!0{10}$)[1-9][0-9]{9}$/;
                        return regex.test(number) || 'Given number is invalid';
                    }
                })} maxLength={10} label="Contact Number" type="tel" error={formState1.errors?.contact?.message} placeholder="Enter you contact number" />
                <div id='recaptcha-container' className="mb-2" />
                <Button type='submit' label="Get OTP" loading={loading == true ? "loading loading-spinner " : ""} variant='btn-wide' />
            </form>}

            {status == 'otp' && <form onSubmit={handleSubmit2(submitHandler)}>
                <Input {...register2('otp', {
                    required: "Please enter the otp", validate: (otp) => {
                        const regex = /^\d{6}$/;
                        return regex.test(otp) || 'The OTP must conatain 6 digits';
                    }
                })} maxLength={6} label="Enter OPT" error={formState2.errors?.otp?.message} placeholder="Enter 6-digit otp" />
                <div className="grid grid-cols-1 grid-rows-2 gap-3">
                    <Button type='submit' label="Verify" variant="btn-wide" disabled={disable} />
                    <Button label="Edit Phone Number" variant="btn-wide btn-outline text-black" />
                </div>
            </form>}

        </div>
    );
}

export default OTPAuth;