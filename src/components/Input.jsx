import { forwardRef } from 'preact/compat';

const Input = forwardRef(({ label, error, name, control = 'text', ...props }, ref) => {
    let component = null;
    switch (control) {
        case 'text': component = <input name={name} ref={ref} {...props} className="input input-bordered w-full max-w-xs bg-gray-200 focus:border-cyan-700" />
            break;
        case 'textarea' : component = <textarea name={name} ref={ref} className="textarea textarea-bordered  bg-gray-200 focus:border-cyan-700" {...props}/>
    }
    return (
        <div className="form-control w-full max-w-xs">
            <label htmlFor={name} className="label">
                <span className="label-text text-black text-base font-medium">{label}</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
            </label>
            {component}
            <label className="label">
                <span className="label-text-alt text-red-600">{error}</span>
                {/* <span className="label-text-alt">Bottom Right label</span> */}
            </label>
        </div>
    )
})

export default Input

