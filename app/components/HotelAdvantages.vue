<script setup lang="ts">
defineProps<{
  advantages: any[]
}>()
</script>

<template>
  <section class="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
    <div class="text-center mb-12 lg:mb-16">
      <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">Преимущества</span>
      <h2 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Наши преимущества</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      <div v-for="(adv, index) in advantages" :key="index" class="flex items-start gap-6 group">
        <div class="shrink-0 w-12 h-12 rounded-[4px] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon :name="adv.icon" class="text-2xl" />
        </div>
        <div>
          <h4 class="font-headline font-bold text-base text-on-surface mb-2">{{ adv.title }}</h4>
          <p class="font-body text-sm text-on-surface-variant leading-relaxed opacity-80">{{ adv.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
