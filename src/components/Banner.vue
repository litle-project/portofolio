<template>
  <div class="banner-content border-b-2">
    <div class="w-2/3 mx-auto pt-20 items-center flex flex-wrap">
      <div class="md:w-1/2 w-full md:order-first order-last flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <p class="text-md uppercase font-semibold text-left">Hello I'm<span class="text-yellow-400">&nbsp; Fullstack Engineer</span></p>
          <p class="text-5xl font-semibold flex text-left">Muhammad Ilham Pratama</p>
          <p class="text-slate-500 text-sm flex text-left">
            I love to learn new technologies to build some app or website, also love to coding with clean code. Do magic with code!<br>
            Currently I was learn about Ruby on Rails, rich and stable language.
          </p>
        </div>
        <div class="action flex flex-row gap-10">
          <button type="button" class="text-Currently bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900" onclick="alert('click')">Hire me</button>
          <button class="text-yellow-400 download" type="button">Download Resume</button>
        </div>
      </div>
      <div class="md:w-1/2 w-full md:order-last order-first">
        <img class="ml-auto" src="/assets/images/site/banner.png" alt="">
      </div>
    </div>
  </div>
</template>