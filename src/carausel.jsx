import React from 'react'
import { useState } from 'react'
import Items from './items'

const Carausel = () => {

    const [aI, setAI] = useState(0);

    const tiles = [
        {
            description: "Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default ",
            icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>,


        },
        {
            description: "Second Items 2 Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default",
            icons: <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg" />,


        },
        {
            description: "Third Item 3 Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default",

            icons: <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg" />


        }, {
            description: "Fourth Items 4 Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default",
            icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>,
            icon2: <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg" />


        },
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;

        }
        else if (newIndex >= tiles.length) {
            newIndex = tiles.length - 1;
        }

        setAI(newIndex);
    }





    return (
        <div className='carausel'>
            <div className='inner' style={{ transform: `translate(-${aI * 100}%)` }} >
                {
                    tiles.map((tile) => {
                        return <>
                            <Items tile={tile} />
                        </>
                    })
                        
                }

                

            </div>

            <div className="buttons">
                <button onClick={() => { updateIndex(aI - 1); console.log(aI) }} className="button-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
                {/* <div className="indicators">
                    {tiles.map((tile,index)=>{
                        return( <button 
                        onClick = {() => {updateIndex(index);console.log(aI);}
                                            
                                            }
                        className="indicator-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        
    
                        </button>)
                    })

                    }
                   
                    
                </div> */}
                <button onClick={() => { updateIndex(aI + 1); console.log(aI) }} className="button-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>




            </div>


        </div>

    )
}

export default Carausel