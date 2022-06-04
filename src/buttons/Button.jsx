import React from 'react'

export default function Button({text}) {
  return (
    <button className='bg-green-600 hover:bg-green-300 w-64 h-12 mx-auto mt-10 rounded-md flex justify-around text-slate-100 hover:text-slate-700 font-bold py-3'>
        {text}
    </button>
  )
}
