import { Form, useForm } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Radio from "./Radio";

function UserForm({ setScreen }) {
    const { register, formState, handleSubmit, watch } = useForm();

    return (

        <div className="bg-white rounded text-black py-8 px-7">
            <form onSubmit={(e) => { e.preventDefault(); setScreen('otp') }} >
                <span className="block mb-2 font-medium">Select crow reason :</span>
                <div className="mb-4 px-2">
                    <Radio label={"Car is being towed"} />
                    <Radio label={"Car is being towed"} />
                    <Radio label={"Car is being towed"} />
                    <Radio label={"Car is being towed"} />
                </div>
                <Input {...register('desc', {
                    required: "Phone number can not be empty", validate: (number) => { }
                })} minLength={5} label="Decribe your Concern." type="textarea" error={formState.errors?.desc?.message} placeholder="" control='textarea' />
                <Checkbox label="Would you like to request a callback from the owner?" checked="" />
                <Button type='submit' label="Proceed" variant='btn-wide' />
            </form>
        </div>
    )
}

export default UserForm