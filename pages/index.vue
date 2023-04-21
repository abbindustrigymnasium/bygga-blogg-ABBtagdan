<template>
    <div class="h-[93vh] flex align-center py-2 w-full">
        <div class="grid grid-cols-1 md:grid-cols-8 h-full w-full grid-rows-1">
            <div class="hidden md:block col-span-6 mx-2 h-full">
                <Carousel :posts="data.slice(0,3)" />
            </div>
            <div class = "col-span-2 mx-2 overflow-y-scroll rounded-3xl scrollbar-hide h-full">
                <Preveiw v-for="post in data" v-bind:key="post._id" :post="post"></Preveiw>
            </div>
        </div>
    </div>
</template>

<script setup>

let { data } = await useAsyncData('', () => queryContent('/blog-posts').find().then())


</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
</style>