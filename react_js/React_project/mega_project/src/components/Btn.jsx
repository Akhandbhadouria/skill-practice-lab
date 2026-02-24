//-----------------------------common buttons----------------------------
import React from 'react'

export default function Btn({
  children,
    type = "button",
    bgColor = "bg-emerald-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button type={type} className={`btn btn-emerald ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}


// use of this file ...............


// ham kisi bhi file me ho aur agar hame ek button banana hai to bs hame 
// bth se us button ko wrap karna hoga ayr jo additional properties dena hai de sakte hai 