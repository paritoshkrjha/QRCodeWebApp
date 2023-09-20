import { useForm } from "react-hook-form";
import { useState } from "preact/hooks";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";

import Button from "./Button";
import Input from "./Input";
import { auth } from '../firebase.js'
import Container from "./Container";
import Stepper from "./Stepper";
import { sendMessage } from "../controller/sender";
import doneImg from '../assets/correct.png';

const OTPAuth = ({ message }) => {
    const { register: register1, formState: formState1, handleSubmit: handleSubmit1, watch: watch1 } = useForm()
    const { register: register2, formState: formState2, handleSubmit: handleSubmit2, watch: watch2 } = useForm()
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [confirmationResult, setConfirmationResult] = useState(null)
    const [screenStatus, setScreenStatus] = useState('contact')


    async function setUpRecaptcha(number) {
        setDisabled(true);
        const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
            callback: () => {
                setLoading(true);
            }
        })
        recaptcha.render();
        try {
            const result = await signInWithPhoneNumber(auth, number, recaptcha);
            setConfirmationResult(result);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const requestOTP = async (values) => {
        const contactValue = '+91' + values.contact;
        const timeStamp = new Date();
        message.current = { ...message.current, contactValue, key: '0FK3vlS0WFOmvQ9KiuviNfHDBTj1',viewed : 'false', timeStamp: timeStamp }
        console.log(message.current)
        try {
            await setUpRecaptcha(contactValue);
            toast.success("OTP sent successfully")
            setLoading(false)
            setScreenStatus('otp');
        } catch (err) {
            setLoading(false);
            console.log('The error is', err);
        }
    };

    const submitHandler = async (values) => {
        setLoading(true);
        const otpValue = values.otp;
        try {
            await confirmationResult.confirm(otpValue);
            toast.success("OTP successfully verified");
            setLoading(false);
            await sendMessage(message.current);
            setScreenStatus('successful')
        } catch (error) {
            toast.error("Invalid OTP. Try again.")
            console.log(error);
        }
    };

    const editPhoneHandler = () => {
        setScreenStatus('contact');
    }


    return (
        <Container>
            {screenStatus != 'successful' && <Stepper />}
            {screenStatus == 'contact' && <form onSubmit={handleSubmit1(requestOTP)}>
                <Input {...register1('contact', {
                    required: "Phone number can not be empty", validate: (number) => {
                        const regex = /^(?!0{10}$)[1-9][0-9]{9}$/;
                        return regex.test(number) || 'Given number is invalid';
                    }
                })} maxLength={10} label="Contact Number" type="tel" error={formState1.errors?.contact?.message} placeholder="Enter you contact number" />
                <div id='recaptcha-container' className="mb-2" />
                <Button type='submit' label="Get OTP" loading={loading} variant='btn-wide' disable={disabled} />
                {disabled == true && <label className=" label-text-alt text-black text-center font-medium"> *The form will auto submit as soon recaptcha is verified</label>}
            </form>
            }

            {screenStatus == 'otp' && <form onSubmit={handleSubmit2(submitHandler)}>
                <Input {...register2('otp', {
                    required: "Please enter the otp", validate: (otp) => {
                        const regex = /^\d{6}$/;
                        return regex.test(otp) || 'The OTP must conatain 6 digits';
                    }
                })} maxLength={6} label="Enter OTP" error={formState2.errors?.otp?.message} placeholder="Enter 6-digit otp" />
                <div className="flex flex-col gap-5">
                    <Button type='submit' label="Verify" loading={loading} variant="btn-wide" disabled={false} />
                    <Button label="Edit Phone Number" onClick={editPhoneHandler} variant="btn-wide btn-outline text-black" />
                </div>
            </form>}

            {/* TODO : Add success screen */}
            {screenStatus == 'successful' &&
                <div className="flex justify-center items-center flex-col gap-5">
                    <img height={50} width={50} src={doneImg} />
                    <div className="text-center">
                        <p>You have been verified!</p>
                        <p>The message has been sent to the owner.</p>
                        <p>You might receive acknowledgement via sms or callback.</p>
                    </div>
                </div>

            }

        </Container>
    );
}

export default OTPAuth;