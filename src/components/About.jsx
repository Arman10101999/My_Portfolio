import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About </p>
            </div>
                
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam atque tenetur dignissimos molestiae quia beatae temporibus sequi magni porro illo soluta odit quo sit, maiores nulla quasi quod commodi delectus ab eos aliquid. Amet enim magni corporis, doloremque itaque repellendus sed, eius quo quasi repellat, odio vel harum iste eligendi?
        </p>

        <br/>
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium earum, esse labore temporibus nobis exercitationem quidem, accusantium in voluptatum nisi provident et distinctio aut nulla assumenda aliquid, eos cum. 
        </p>
        </div>
    </div>
  )
}

export default About