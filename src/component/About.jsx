import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                I am a passionate individual with a deep interest in exploring the vast domain of information technology. My insatiable curiosity and commitment to continuous learning have molded me into a dedicated learner in the IT field. As a recent graduate in information technology, my journey extends beyond the academic realm as I actively seek opportunities to broaden my understanding of the latest technological trends and advancements. My dedication to ongoing learning propels me to explore new horizons, ensuring that I remain well-versed in the ever-evolving landscape of information technology.
            </p>
            <br />
            <p className='text-xl'> 
                My commitment to personal and professional growth is manifested in my proactive approach towards staying updated on emerging technologies. I am enthusiastic about contributing meaningfully to the tech industry and aspire to apply my knowledge to real-world scenarios. I am not merely a technophile; I am a forward-thinking individual who aims to make a positive impact by leveraging my skills and expertise in the continually expanding field of information technology.
            </p>
        </div>
    </div>
  )
}

export default About