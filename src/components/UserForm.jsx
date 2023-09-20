import { useForm, Controller } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Radio from "./Radio";
import Stepper from "./Stepper";
import Container from "./Container";



function UserForm({ setScreen, message }) {
    const { register, formState, handleSubmit, control } = useForm();

    const submitHandler = (values) => {
        message.current = values;
        console.log('Inside User Auth', message.current);
        setScreen('otp')
    }
    return (
        <Container>
            <Stepper />
            <form className=" w-full" onSubmit={handleSubmit(submitHandler)} >
                <span className="block mb-2 px-2 font-heading font-semibold text-base required:true">Select the reason:</span>
                <div className=" mb-4 px-2 font-body">
                    <Controller
                        name="radioOptions"
                        rules={{
                            required: "Select atleast on option",
                        }}
                        control={control}
                        render={({ field }) => (
                            <>
                                {radioOptions.map((entry, index) => (
                                    <Radio onChange={(e) => {
                                        field.onChange(e.target.value);
                                    }} key={index} label={entry.label} value={entry.value} />
                                ))}
                            </>
                        )} />

                    <span className="label-text-alt text-red-600 font-medium">{formState.errors.radioOptions && formState.errors.radioOptions.message}</span>
                </div>

                <Input {...register('desc', {
                    required: "The Descripton can not be empty!", validate: (text) => { }
                })} minLength={5} label="Describe your concern." type="textarea" error={formState.errors?.desc?.message} placeholder="" control='textarea' />


                <div className="form-control mb-4">
                    <label className="label cursor-pointer">
                        <span className="label-text font-medium text-black max-w-[200px]">Would you like to request a callback from the owner?</span>
                        <Controller
                            name="requestCall"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <input className="checkbox bg-gray-200" type="checkbox" {...field} />
                            )}
                        />
                    </label>
                </div>

                <Button type='submit' label="Proceed" variant='btn-wide' />
            </form>
        </Container>
    )
}

export default UserForm

const radioOptions = [
    {
        label: 'Car is being towed.',
        value: 'Car is being towed.'
    },
    {
        label: 'The car is in no paking.',
        value: 'The car is in no paking.'
    },
    {
        label: 'There is a baby or pet in car.',
        value: 'There is a baby or pet in car.'
    },
    {
        label: 'Something went wrong with the car.',
        value: 'Something went wrong with the car.'
    },
    {
        label: 'Other.',
        value: 'Other.'
    }
]