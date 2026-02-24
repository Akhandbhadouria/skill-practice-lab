import React,{useId} from "react";

const Inputt=React.forwardRef(function Input({label,type="text",className="",...props},ref){
const id=useId()
return(
    <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1 text-gray-700" htmlFor={id}>{label}</label>}
        <input type={type} className={`input-base ${className}`}
            ref={ref}
            {...props}
            id={id}
        />
        
    </div>
)
})

export default Inputt



//important points....
// useId() generates a unique id string (useful for accessibility linking between <label> and <input>)....in label we use htmlFor={id}

// ...props: Spread operator to pass any additional props (e.g., placeholder, onChange).

