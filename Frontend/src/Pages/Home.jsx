import React from 'react'

const Home = () => {
  return (
    <>

      <div class="w-full bg-white font-sans">
        <div class="flex flex-col md:flex-row items-center md:gap-12 px-4 md:px-0">
          <div class="md:w-1/2 flex flex-col items-start gap-10">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight md:pl-12">Unleash Your Potential: <br class="md:hidden" /> Find Your Dream Job Today</h1>
            <p class="pl-4 md:pl-16 leading-normal mt-5 text-base md:text-lg tracking-wide">Discover endless opportunities and unlock your career Potential <br class="md:hidden" /> with <span class="font-semibold">Job-Seekers- An amazing job search platform</span></p>
            <img class="w-[410px] pl-12 md:w-full  h-auto pr-12 md:ml-0 md:max-w-[410px]" src="https://www.jobseeker.com/logo-black-text.svg" alt="" />
          </div>
          <img class="w-full md:w-[500px] rounded-[50px] border-b-2 border-zinc-100 p-2" src="profile6.jpg" alt="" />
        </div>

        <div class="w-full py-10 px-2 md:px-0 border-b-2 border-zinc-300 my-8">
          <h1 class="text-center text-3xl md:text-5xl leading-tight font-semibold">Trusted <span class="text-gray-500 font-bold">1000+</span> company find best <br class="md:hidden" />job seekers</h1>
          <div class="w-full flex flex-wrap items-center justify-evenly mt-10">
            <img class="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
            <img class="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
            <img class="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
            <img class="w-[110px] h-auto mb-4" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" />
            <img class="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png" alt="" />
            <img class="w-[110px] h-auto mb-4" src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photos.png" alt="" />
          </div>
        </div>

        <div class="py-5 mt-5">
          <h1 class="text-center text-3xl md:text-5xl font-semibold">Find your perfect dream jobs</h1>
          <p class="text-center mt-2 md:mt-5 text-base md:text-lg tracking-wider">JobSeekrs present for help candidate for meet the dream company</p>
        </div>

      </div>

    </>

  )
}

export default Home