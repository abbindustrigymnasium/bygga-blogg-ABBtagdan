<template>
    <div>
    <header class="font-bold w-full h-[7vh] flex items-center font-sans">
        <nav class="container mx-auto flex px-6 justify-between text-black">
            <NuxtLink to="/" class="text-xl">Rytmer.se</NuxtLink>
            <div class="flex gap-x-10">
            <NuxtLink to="/about"><div class="hover:scale-110">About</div></NuxtLink>
            <NuxtLink to="/contact"><div class="hover:scale-110">Contact</div></NuxtLink>
        </div>
        </nav>
    </header>
        <slot />
    </div>
</template>