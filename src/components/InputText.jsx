import React from 'react';


export function InputText({label, id, ...props}) {
  return(
      <>
        <label htmlFor={id} className='text-slate-300'>{label}</label>
       <input type="text" id={id} {...props}className='bg-slate-800 rounded p-2 outline-none focus:ring-1 focus:ring-pink-600'/>

      </>
    )
}

