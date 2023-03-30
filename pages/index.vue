<template>
    <div class="h-[90vh] flex align-center py-2">
        <div class="grid grid-cols-5 h-full grid-rows-1">
            <div class="col-span-4 mx-2 max-h-full">
                <Carousel :posts="data.slice(0,3)" />
            </div>
            <div class = "col-span-1 mx-2 overflow-y-scroll rounded-3xl scrollbar-hide h-full">
                <Preveiw v-for="post in data" v-bind:key="post._id" :post="post"></Preveiw>
            </div>
        </div>
    </div>
</template>

<script setup>

let { data } = await useAsyncData('',() => queryContent('/blog-posts').find().then())

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