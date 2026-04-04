<script setup lang="ts">
defineProps<{
  rooms: any[]
}>()
</script>

<template>
  <section id="rooms" class="py-16 lg:py-24 px-8 bg-surface-container-low">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-14 gap-6">
        <div>
          <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">Выбор номеров</span>
          <h2 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Ваш уютный уголок</h2>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="room in rooms" :key="room.id" class="bg-surface-container-lowest rounded-xl overflow-hidden group flex flex-col">
          <div class="relative h-80 md:h-[480px] overflow-hidden">
            <img :alt="room.imageAlt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" :src="room.image"/>
            <div class="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
              {{ room.badge }}
            </div>
          </div>
          <div class="p-10 flex flex-col flex-grow">
            <div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <h3 class="font-headline text-2xl font-bold leading-tight max-w-sm">{{ room.title }}</h3>
              <div class="text-left md:text-right shrink-0">
                <span class="text-xs text-on-surface-variant block uppercase tracking-widest mb-1">Стоимость</span>
                <span class="font-headline font-extrabold text-2xl text-primary">{{ room.price }}</span>
              </div>
            </div>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-10 opacity-80">{{ room.description }}</p>
            <div class="mt-auto">
              <button class="w-full py-5 rounded-lg bg-surface-container-high font-headline font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all border border-outline-variant/20">Забронировать номер</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
