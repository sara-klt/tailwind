import React from 'react'

export const Button = ({background="bg-blue-800",textColor="text-blue-100",children,onClick}) => {
    return (
        <button className={`${background} px-5 py-3 text-sm shadow-sm font-medium 
        tracking-wider border ${textColor} rounded-full hover:shadow-lg hover:bg-red-100`}>{children}</button>
    )
}
