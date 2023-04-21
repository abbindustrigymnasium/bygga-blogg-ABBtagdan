<template>
  <div class = "h-full overflow-scroll w-full flex flex-nowrap snap-x snap-mandatory scrollbar-hide rounded-3xl">
    <NuxtLink v-for="post in posts" :key="post.path" :to="`/article/${post.slug}`" class="relative snap-always snap-center h-full w-full flex-shrink-0 overflow-hidden">
      <NuxtImg :src="post.img" class = "h-full w-full object-cover " />
      <div class = "absolute text-white w-20 divide-y bottom-10 left-10">
        
        <div class = "text-xl pb-2">
          {{ post.type }}
        </div>
        <div class = "text-6xl pt-2">
          {{post.title}}
        </div>
        
      </div>

      <div class = "absolute w-1/4 bottom-10 right-10 text-lg text-white">
        {{ post.description }}
      </div>
      
      <div class = "absolute bottom-10 left-[50%] -translate-x-50 w-20 flex justify-around items-center">
        <div v-if="`${posts.indexOf(post)}` == 0" class = "bg-white rounded-full w-3 h-3"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3"></div>
        <div v-if="`${posts.indexOf(post)}` == 1" class = "bg-white rounded-full w-3 h-3"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3"></div>
        <div v-if="`${posts.indexOf(post)}` == 2" class = "bg-white rounded-full w-3 h-3"></div>
        <div v-else class = "bg-gray-400 rounded-full w-3 h-3"></div>
      </div>

      <div class = "text-white text-lg absolute top-10 right-10"> {{ new Date(post.date).toLocaleDateString() }} </div>
      <div class = "text-white text-lg absolute top-10 left-10"> {{ post.author }} </div>

    </NuxtLink>
  </div>
</template>

<script setup>

 const {posts} = defineProps({
 posts: Object
 })

</script>

<style>

</style>