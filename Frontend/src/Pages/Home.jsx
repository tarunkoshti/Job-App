import React from 'react'

const Home = () => {
  return (


    <div className="w-full bg-white font-sans">
      <div className="flex flex-col items-center md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center gap-8 mt-10 md:mt-32">
          <h1 className="text-center text-[#1F2937] text-4xl md:text-6xl font-bold leading-tight md:pl-12">Unleash Your Potential: <br /> Find Your Dream Job Today</h1>
          <h4 className="text-center text-[#1F2937] text-2xl font-semibold md:text-3xl">Navigate Your Career Path with Precision and Ease.</h4>
          <p className="pl-4 md:pl-10 text-[#1F2937] leading-normal mt-5 text-base md:text-lg text-center tracking-wide">Discover endless opportunities and unlock your career Potential <br /> with <span className="font-semibold">Job-Seekers- An amazing job search platform</span></p>
          <img className="w-[410px] mt-5 pl-12 md:w-full h-auto pr-12 md:ml-0 md:max-w-[410px]" src="https://www.jobseeker.com/logo-black-text.svg" alt="" />
        </div>
      </div>

      <div className="w-full py-10 px-2 md:px-0 border-b-2 border-zinc-300 my-8">
        <h1 className="text-center text-[#1F2937] text-3xl md:text-5xl leading-tight font-semibold">Trusted <span className="text-[#1F2937] font-bold">1000+</span> company find best <br className="md:hidden" />job seekers</h1>
        <div className="w-full flex flex-wrap items-center justify-evenly mt-10">
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photos.png" alt="" />
        </div>
      </div>

      <div className="py-5 mt-5">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">Find your perfect dream jobs</h1>
        <p className="text-center text-[#1F2937] mt-2 md:mt-5 text-base md:text-lg tracking-wider">JobSeekrs present for help candidate for meet the dream company</p>
      </div>
    </div>

  )
}

export default Home