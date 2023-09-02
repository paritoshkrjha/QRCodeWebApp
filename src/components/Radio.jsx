function Radio({label, ...props}) {
  return (
    <div className="form-control w-full max-w-xs">
        <div className="flex justify-between items-center">
            <label className="label">
                <span className="label-text  text-black text-sm">{label}</span>
            </label>
            <input type="radio" name="radio-1" className="radio bg-gray-200 "/>
        </div>
    </div>
  )
}

export default Radio