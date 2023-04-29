<template>
    <div class="h-[93vh] flex align-center py-2 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-8 h-full w-full grid-rows-1">
            <div class="hidden lg:block col-span-6 mx-2 h-full">
                <Carousel :posts="data[1]" />
            </div>
            <div class = "col-span-2 mr-2 ml-2 lg:ml-0 overflow-y-scroll rounded-3xl scrollbar-hide h-fit lg:h-full ">
                <Preveiw v-for="post in data[0]" v-bind:key="post._id" :post="post"></Preveiw>
            </div>
        </div>
    </div>
</template>

<script setup>

let { data } = await useAsyncData('', () => queryContent('/article').find().then(val => [val.sort((a, b) => (b.date > a.date) ? 1 : -1), val.sort((a, b) => (b.date > a.date) ? 1 : -1).slice(0,3)]))

useHead({
    title: 'Rytmer',
    meta: [
        { name: 'description', content: 'Rytmer är min blogg där jag skriver om den musik jag lyssnar på just nu. Innehållet kommer bestå av recensioner av låtar och artister. I framtiden hoppas jag även på att kanske få intervjua någon artist.' }
    ],
})

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