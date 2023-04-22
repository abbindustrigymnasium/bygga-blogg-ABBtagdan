<template>
    <div class="min-h-[100vh] w-full md:w-[60%] m-auto shadow-xl p-10">
        <ContentDoc></ContentDoc>
    </div>
</template>

<style scoped>
:deep(h1) {
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: bold;
}

:deep(h2) {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: semibold;
}

:deep(h3) {
    margin-top: 7px;
    margin-bottom: 7px;
}

:deep(ul) {
    list-style-type: circle;
    margin-top: 7px;
    margin-bottom: 7px;
    padding-left: 15px;
}

:deep(strong) {
    font-weight: bold;
}

:deep(em) {
    font-style: italic;
}

:deep(img) {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 2px;
}

:deep() {
    font-size: 20px;
}</style>