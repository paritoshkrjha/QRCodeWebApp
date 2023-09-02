import classNames from "classnames"

function Button({variant, label, loading, disable, ...props}) {
    return (
        <button className={classNames(`btn`,{
            'btn-disabled' : disable,
            'loading loading-spinner' : loading,
         }, variant )}>
            <span className={`${loading}`}></span>
            {label}
        </button>
    )
}

export default Button