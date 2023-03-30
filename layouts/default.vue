<template>
    <div>
    <header class="font-bold w-full h-[10vh] flex items-center">
        <nav class="container mx-auto flex justify-between text-black">
            <NuxtLink to="/" class="text-xl">Musik Recensioner</NuxtLink>
            <div class="flex gap-x-10">
            <NuxtLink to="/about"><div class="hover:scale-110">About</div></NuxtLink>
            <NuxtLink to="/contact"><div class="hover:scale-110">Contact</div></NuxtLink>
        </div>
        </nav>
    </header>
        <slot />
    </div>
</template>