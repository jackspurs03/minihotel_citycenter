<script setup lang="ts">
defineProps<{
  rooms: any[]
}>()
</script>

<template>
  <section id="hero" class="relative min-h-[650px] flex items-center justify-center overflow-hidden px-8 py-16 lg:py-24">
    <div class="absolute inset-0 z-0">
      <img alt="Luxurious boutique hotel room" class="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk5tSxaSo3VIBLJf7BJJMfDq5Oz4fYLK6rBGXqJiOMsAeGQD09XOfSVdGNhPiQFnqFa3bE4XzxGSFKBEhs79cW72YwRopWhPKsYS3MnlW8rtTaCbeQcTbprovz4XEPboqIU5Gf-W7cFANOXdT2zNkJDcjQYpEptRFLWk8_EhtIfTSgbQfaVr2HA4dPH1uNJ9Gbk_oDkqRIpBiV1zbt1pQsbg79llrNXfJrkJn_70UUa6Tmr139GVNvVPRGkGXhsc53McwGm3XSiPM"/>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>
    </div>
    <div class="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-12">
      <div class="text-white">
        <h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
          Комфортный и уютный мини-отель <br/>CITY CENTER
        </h1>
        <div class="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
          <Icon name="material-symbols-light:ac-unit" class="text-yellow-400 text-2xl" />
          <p class="font-body text-sm tracking-wide">С Новым 2026 годом! Пусть ваш отдых будет волшебным.</p>
        </div>
      </div>
      <!-- Booking Widget -->
      <BookingForm :rooms="rooms" />
    </div>
  </section>
</template>
