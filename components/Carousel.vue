<template>
  <div class = "h-full overflow-scroll w-full flex flex-nowrap snap-x snap-mandatory scrollbar-hide rounded-3xl">
    <NuxtLink v-for="post in posts" :key="post.path" :to="post.slug" class="relative snap-always snap-center h-full w-full flex-shrink-0 overflow-hidden">
      <NuxtImg :src="post.img" class = "h-full w-full object-cover" />
      <div class = "absolute text-white w-20 divide-y bottom-10 left-10">
        
        <div class = "text-xl pb-2">
          {{ post.type }}
        </div>
        <div class = "text-6xl pt-2">
          {{post.title}}
        </div>
        
      </div>

      <div class = "absolute w-1/4 bottom-10 right-10 text-xl text-white">
        {{ post.description }}
      </div>

      

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