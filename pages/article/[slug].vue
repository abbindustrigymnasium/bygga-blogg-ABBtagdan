<template>
    <div class="min-h-[100vh] w-full md:w-[60%] m-auto shadow-xl p-10">
    <NuxtImg :src="data.img" class = "w-full h-80 object-cover" />
    <div class = "p-5">
        <ContentRenderer :value="data"></ContentRenderer>
    </div>
    
    </div>

</template>

<script setup>
    
const route = useRoute()
const { data } = await useAsyncData('', () => queryContent(`/blog-posts/${route.params.slug}`).findOne())


</script>

<style scoped>
:deep(h1) {
    font-size: 30px;
}
</style>