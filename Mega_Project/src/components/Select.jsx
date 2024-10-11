/* eslint-disable react/prop-types */
import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id=useId()
  return (
    <div
    className='w-full'>
    {label && <lable htmlFor= {id} className=''></lable>}

    <select
    {...props}
    id={id}
    ref={ref}
    className={`${className} px-3 py-3 rounded-lg
    bg-white  text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ` }
    >
    {/* options and option.map() */}
    {options?.map((option) =>(
        <option key= {option} value={option}>
            {option}
        </option>
    ))}

    </select>
        


    </div>
  )
}

export default React.forwardRef(Select)
