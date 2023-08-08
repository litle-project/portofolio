<template>
    <div class="bg-yellow-500 flex justify-around px-40 py-10" id="contact">
        <div class="text-white flex flex-col gap-5 pr-30">
            <div class="text-2xl font-bold">Personal Portofolio</div>
            <div class="text-sm">
                This Portfolio made with ❤️ also this created to make you knowing me more and <br>
                to make you know what skill that I had.
            </div>
            <div class="text-sm">
                I hope you see detail of my project to know me better. I was write code since 2018, <br>
                my strong programing language is javascript <br>
                I love javascript because they very strong and stable on all device
            </div>
            <div class="text-sm">
                See you on the project.
            </div>
        </div>
        <div class="flex flex-row gap-24">
            <div class="text-white flex flex-col gap-2">
                <div class="text-md font-bold text-left pb-2">Social Media</div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/linkedin.png`" />
                    <a href="https://www.linkedin.com/in/muhammad-ilham-pratama/" target="_blank" class="truncate">
                        muhammad-ilham-pratama
                    </a>
                </div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/github.png`" />
                    <span>@seaglex</span>
                </div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/github.png`" />
                    <span>@litle.project@gmail.com</span>
                </div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/instagram.png`" />
                    <span>@seagleax</span>
                </div>
            </div>
            <div class="text-white flex flex-col gap-2">
                <div class="text-md font-bold text-left pb-2">Contact</div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/phone-call.png`" />
                    <span>+62 838-7102-8000</span>
                </div>
                <div class="text-md flex gap-2 filter grayscale hover:filter-none">
                    <img class="self-center w-5" :src="`./assets/images/site/gmail.png`" />
                    <span>seagleax700@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
</template>