import { serverTimestamp } from "firebase/database";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function ContactForm({ message, setScreen, userId, recaptchaCallback, loading }) {
    const { register: register1, formState: formState1, handleSubmit: handleSubmit1 } = useForm()

    const requestOTP = async (values) => {
        const contactValue = '+91' + values.contact;
        message.current = { ...message.current, contactValue, key: userId, viewed: 'false', time : serverTimestamp()  }
        try {
            await recaptchaCallback(contactValue);
            toast.success("OTP sent successfully")
            setScreen('otp');
        } catch (err) {
            console.log('The error is', err);
        }
    };

    return (
        <form onSubmit={handleSubmit1(requestOTP)}>
            <Input {...register1('contact', {
                required: "Phone number can not be empty", validate: (number) => {
                    const regex = /^(?!0{10}$)[1-9][0-9]{9}$/;
                    return regex.test(number) || 'Given number is invalid';
                }
            })} maxLength={10} label="Contact Number" type="tel" error={formState1.errors?.contact?.message} placeholder="Enter you contact number" />
            <div className="flex justify-center pb-2">
                <div id='recaptcha-container' className="mb-2" />
            </div>
            <Button type='submit' label="Get OTP" loading={loading} variant='btn-wide' disable={loading} />
            {loading == true && <label className=" label-text-alt text-black text-center font-medium"> *The form will auto submit as soon recaptcha is verified</label>}
        </form>
    )
}

export default ContactForm