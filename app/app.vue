<script setup lang="ts">
import rooms from '~/data/rooms.json'
import advantages from '~/data/advantages.json'
import gallery from '~/data/gallery.json'

const { app: { baseURL } } = useRuntimeConfig()

// Общий хелпер для путей к изображениям (все еще нужен для данных из JSON)
const fixPath = (path: string) => {
  if (path && path.startsWith('/') && !path.startsWith('http') && !path.startsWith(baseURL)) {
    return (baseURL + path.slice(1)).replace(/\/+/g, '/')
  }
  return path
}

const processedRooms = computed(() => rooms.map(r => ({ ...r, image: fixPath(r.image) })))
</script>

<template>
  <Html class="scroll-smooth" lang="ru">
    <Head>
      <Title>CITY CENTER - Мини-отель в центре Мурманска</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    </Head>
    <Body class="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <TheHeader />

      <main class="pt-16 md:pt-[110px]">
        <HeroSection :rooms="processedRooms" />
        
        <AboutCompany />
        
        <RoomCatalog :rooms="processedRooms" />
        
        <HotelAdvantages :advantages="advantages" />
        
        <HotelGallery :gallery="gallery" :baseURL="baseURL" />
        
        <ApartmentsCta />
        
        <HotelReviews />
      </main>

      <TheFooter />
    </Body>
  </Html>
</template>
