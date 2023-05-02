<template>
  <div class = "h-full w-full flex transition duration-75 text-shadow" @mouseover="slideshow = false" @mouseleave="{slideshow = true; t = false}">
    <div class="relative h-full w-full overflow-hidden rounded-3xl">
      <nuxt-img :src="posts[slide].img" class = "h-full w-full object-cover object-center" />
      <div class = "absolute text-white w-20 divide-y bottom-10 left-10 z-20">
        
        <div class = "text-xl pb-2">
          {{ posts[slide].type }}
        </div>
        <div class = "text-6xl pt-2">
          {{posts[slide].title}}
        </div>
        
      </div>

      <div class = "absolute max-w-[25%] bottom-10 right-10 text-lg text-white z-20">
        {{ posts[slide].description }}
      </div>
      
      <NuxtLink :to="`/article/${posts[slide].slug}/`" class = "text-white cursor-pointer absolute text-base hover:scale-110 font-bold bottom-24 w-40 h-14 flex left-[50%] border-2 justify-center items-center -translate-x-[50%] border-white rounded-full z-20"> 
      Läs Mer
      </NuxtLink>

      <nuxt-img src = "arrow.png" @click="slide = (slide + 1) % 3" class = "absolute right-8 top-[50%] -translate-y-[50%] w-10 h-10 hover:scale-110 z-20 cursor-pointer"/>
      <nuxt-img src = "arrow.png" @click=" {if (slide == 0) slide = 2; else slide --;}" class = "absolute left-8 top-[50%] -translate-y-[50%] rotate-180 w-10 h-10 hover:scale-110 z-20 cursor-pointer"/>


      <div class = "absolute bottom-10 left-[50%] -translate-x-[50%] w-20 flex justify-around items-center z-20">
        <div v-if="slide == 0" class = "bg-white rounded-full w-3 h-3 hover:scale-110 cursor-pointer"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3 hover:scale-110 cursor-pointer" @click="slide = 0"></div>
        <div v-if="slide == 1" class = "bg-white rounded-full w-3 h-3 hover:scale-110 cursor-pointer"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3 hover:scale-110 cursor-pointer" @click="slide = 1"></div>
        <div v-if="slide == 2" class = "bg-white rounded-full w-3 h-3 hover:scale-110 cursor-pointer"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3 hover:scale-110 cursor-pointer" @click="slide = 2"></div>
      </div>

      <div class = "text-white text-lg absolute top-10 right-10 z-20"> {{ new Date(posts[slide].date).toLocaleDateString() }} </div>
      <div class = "text-white text-lg absolute top-10 left-10 z-20"> {{ posts[slide].author }} </div>

      <div class = "absolute left-[50%] bg-black/50 -translate-x-[50%] top-[50%] -translate-y-[50%] backdrop-sepia-0 flex justify-center items-center w-full h-full object-cover">
        <div class = " bg-clip-text bg-white/90 flex justify-center items-center text-9xl font-extrabold text-transparent m-10">
            <span>NY MUSIK</span>
          </div>
      </div>
        

    </div>
  </div>
</template>

<script setup>

 const {posts} = defineProps({
 posts: {
  type: Array,
 }
 })

 const slide = ref(0)

 const slideshow = ref(true)
 const t = ref(false)

 function next() {
 setTimeout(() => {if (t.value && slideshow.value){slide.value = (slide.value + 1)%3; t.value = false;} else {t.value = true}; next()}, 1500)
 }

next()
</script>

<style>

</style>