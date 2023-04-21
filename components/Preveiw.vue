<template>
    <div class = "relative overflow-hidden mb-2 h-1/2 rounded-3xl">
    <NuxtLink :to="`/article/${post.slug}`" class="w-full group">
    <NuxtImg :src = "post.img" class="w-full h-full object-cover object-center blur-none group-hover:blur-sm transition" alt="post">

    </NuxtImg>
    <div class="absolute bottom-3 text-center group-hover:scale-110 text-2xl left-[50%] -translate-x-1/2 -translate-y-1/2 text-white">
        {{ post.title }}
    </div>
    <div class ="absolute hidden text-center w-[60%] lg:w-[80%] xl:w-[60%] group-hover:block text-lg left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-white">
        {{ post.description }}
    </div>
    <div class ="absolute hidden text-center group-hover:block right-5 top-5 text-sm text-white">
        {{ new Date(post.date).toLocaleDateString() }}
    </div>
    <div class ="absolute hidden text-center group-hover:block left-5 top-5 text-sm text-white">
        {{ post.author }}        
    </div>
    </NuxtLink>
    </div>
</template>

<script setup>

const { post } = defineProps({
    post: Object
})


</script>
