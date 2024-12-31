import React from 'react'

interface Props {
    text: string
    }

const FaqButtons = ({text}:Props) => {
return (
    <button className='bg-[#FF7657] text-white font-bold py-4 px-8 rounded-[10px] w-[80vw] lg:w-[36vw] h-[12vh] text-[1rem] lg:text-[1.5rem] flex items-center justify-center text-start shadow-[0_4px_6px_rgba(0,0,0,0.1),10px_10px_0px_#FF9737] active:translate-y-[10px] active:translate-x-[10px] active:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition'>
    {text}
    </button>

)
}

export default FaqButtons