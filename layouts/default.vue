<template>
    <div>
    <header class="font-bold w-full h-[7vh] flex items-center">
        <nav class="container mx-auto flex px-6 justify-between text-black">
            <a href="/" class="text-xl">Rytmer.se</a>
            <div class="flex gap-x-10">
            <NuxtLink to="/about"><div class="hover:scale-110">About</div></NuxtLink>
            <NuxtLink to="/contact"><div class="hover:scale-110">Contact</div></NuxtLink>
        </div>
        </nav>
    </header>
        <slot />
    </div>
</template>