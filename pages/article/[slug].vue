<template>
    <div class="min-h-[93vh] w-full md:w-[80%] lg:w-[60%] m-auto shadow-xl p-10">
    <nuxt-img :src="data.img" class = "w-full h-80 object-cover" />
    <div class = "p-2 divide-y divide-gray-400 w-full">
            <ContentRenderer :value="data">
                <ContentRendererMarkdown :value="data" class="md:text-[20px]" />
            </ContentRenderer>
        <div class = "px-5 text-lg text-black my-10">
            <div class = "my-10 flex gap-10">
                <span> {{ data.author }} </span>
                <span class = "font-light text-[1rem] md:text-lg"> {{ new Date(data.date).toLocaleDateString() }}</span>
            </div>
            
        </div>
    </div>
    </div>

</template>

<script setup>
    
const route = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(`/article/${route.params.slug}`).findOne())
useHead({
    meta: [{ property: 'og:title', content: `Rytmer - ${data.value.title}` }],
})

</script>

<style scoped>
:deep(h1) {
    font-size: 35px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
}
:deep(h2) {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: semibold;
}
:deep(p) {
    margin-top:15px;
}

:deep(h3){
    margin-top: 7px;
    margin-bottom: 7px;
}

:deep(ul) {
  list-style-type: disc;
  margin-top: 7px;
  margin-bottom: 7px; 
  padding-left: 15px;
}
:deep(strong) {
    font-weight: bold;
}
:deep(em){
    font-style: italic;
}
:deep(img){
    width: 100%;
    height: 20rem;
    object-fit: cover;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 2px;
}


</style>