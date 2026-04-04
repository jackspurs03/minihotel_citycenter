<script setup lang="ts">
const props = defineProps<{
  gallery: any[]
  baseURL: string
}>()

const lightbox = reactive({
  isOpen: false,
  index: 0
})

const fixPath = (path: string) => {
  if (path && path.startsWith('/') && !path.startsWith('http') && !path.startsWith(props.baseURL)) {
    return (props.baseURL + path.slice(1)).replace(/\/+/g, '/')
  }
  return path
}

const allPhotos = computed(() => props.gallery.flatMap(g => g.photos.map(p => ({ 
  ...p, 
  category: g.category, 
  image: fixPath(p.image) 
}))))

function openLightbox(photo: any) {
  const index = allPhotos.value.findIndex(p => p.image === fixPath(photo.image))
  lightbox.index = index
  lightbox.isOpen = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.isOpen = false
  document.body.style.overflow = ''
}

function nextPhoto() {
  lightbox.index = (lightbox.index + 1) % allPhotos.value.length
}

function prevPhoto() {
  lightbox.index = (lightbox.index - 1 + allPhotos.value.length) % allPhotos.value.length
}

onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (!lightbox.isOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextPhoto()
    if (e.key === 'ArrowLeft') prevPhoto()
  }
  window.addEventListener('keydown', handleKeydown)
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
})
</script>

<template>
  <section id="gallery" class="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
    <div class="text-center mb-12 lg:mb-16">
      <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">Галерея</span>
      <h2 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Фотографии отеля и комнат</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <div v-for="(group, groupIndex) in gallery" :key="groupIndex" class="space-y-6">
        <h3 class="font-headline text-2xl font-bold text-on-surface">{{ group.category }}</h3>
        <div class="grid grid-cols-2 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          <div v-for="(photo, photoIndex) in group.photos" :key="photoIndex" :class="['relative group overflow-hidden rounded-lg bg-surface-container cursor-zoom-in', photo.class]" @click="openLightbox(photo)">
            <img :src="fixPath(photo.image)" :alt="photo.title || group.category" class="w-full h-full object-cover transition-transform duration-700" loading="lazy" />
            <div v-if="photo.title" class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end h-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-white font-headline font-bold text-xs uppercase tracking-wider">{{ photo.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition 
        enter-active-class="transition duration-300 ease-out" 
        enter-from-class="opacity-0" 
        enter-to-class="opacity-100" 
        leave-active-class="transition duration-200 ease-in" 
        leave-from-class="opacity-100" 
        leave-to-class="opacity-0"
      >
        <div v-if="lightbox.isOpen" class="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm" @click.self="closeLightbox">
          <!-- Close Button -->
          <button class="absolute top-6 right-8 text-white/70 hover:text-white transition-colors z-50 p-2" @click="closeLightbox">
            <Icon name="material-symbols-light:close" class="text-4xl" />
          </button>

          <!-- Navigation Buttons -->
          <button class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 z-50 disabled:opacity-20" @click="prevPhoto">
            <Icon name="material-symbols-light:arrow-back-ios-new" class="text-5xl" />
          </button>
          <button class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-4 z-50 disabled:opacity-20" @click="nextPhoto">
            <Icon name="material-symbols-light:arrow-forward-ios" class="text-5xl" />
          </button>

          <!-- Content -->
          <div class="flex-grow flex items-center justify-center p-4 md:p-12 lg:p-24 select-none" @click.self="closeLightbox">
            <div class="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6">
              <img :src="allPhotos[lightbox.index]?.image" class="max-w-full max-h-[85vh] object-contain rounded-sm" @click.stop />
              <div class="text-center space-y-2">
                <div class="text-white font-headline font-bold text-xl md:text-2xl">{{ allPhotos[lightbox.index]?.title || allPhotos[lightbox.index]?.category }}</div>
                <div class="text-white/50 font-label text-xs uppercase tracking-[0.3em]">{{ lightbox.index + 1 }} / {{ allPhotos.length }}</div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
