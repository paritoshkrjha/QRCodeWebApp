
function Checkbox({ label , ...props }) {
    return (
        <div className="form-control mb-4">
            <label className="label cursor-pointer">
                <span className="label-text font-normal text-black max-w-[200px]">{label}</span>
                <input type="checkbox" checked="" className="checkbox bg-gray-200" />
            </label>
        </div>
    )
}

export default Checkbox