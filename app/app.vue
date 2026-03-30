<script setup lang="ts">
import rooms from '~/data/rooms.json'
import advantages from '~/data/advantages.json'
import gallery from '~/data/gallery.json'

const lightbox = reactive({
  isOpen: false,
  index: 0
})

const allPhotos = computed(() => gallery.flatMap(g => g.photos.map(p => ({ ...p, category: g.category }))))

function openLightbox(photo: any) {
  const index = allPhotos.value.findIndex(p => p.image === photo.image)
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
  window.addEventListener('keydown', (e) => {
    if (!lightbox.isOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextPhoto()
    if (e.key === 'ArrowLeft') prevPhoto()
  })
})
</script>

<template>
  <Html class="scroll-smooth" lang="ru">
    <Head>
      <Title>CITY CENTER - Мини-отель в центре Мурманска</Title>
      <Link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      <Style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      </Style>
    </Head>
    <Body class="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <!-- TopAppBar -->
      <nav class="fixed top-0 w-full z-50 border-b border-slate-100">
        <!-- Top Mini Bar -->
        <div class="hidden md:block bg-slate-50 border-b border-slate-100 px-6 py-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div class="max-w-7xl mx-auto flex justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-label font-bold">
            <div class="flex items-center gap-6 text-slate-500">
              <div class="flex items-center gap-2">
                <Icon name="material-symbols-light:schedule" class="text-primary text-sm" />
                <span>Круглосуточно</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="material-symbols-light:location-on" class="text-primary text-sm" />
                <span>г. Мурманск</span>
              </div>
            </div>
            <div class="flex items-center gap-6 text-slate-900">
              <a href="tel:+79021301444" class="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="material-symbols-light:call" class="text-primary text-sm" />
                <span>+7 (902) 130-14-44</span>
              </a>
              <a href="mailto:citycentre-hotel@mail.ru" class="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="material-symbols-light:mail" class="text-primary text-sm" />
                <span>citycentre-hotel@mail.ru</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Main Navigation Bar -->
        <div class="bg-white/80 backdrop-blur-md px-6 h-14 md:h-16 flex items-center">
          <div class="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            <a href="#hero" class="flex flex-col -space-y-1 shrink-0 hover:opacity-80 transition-opacity">
              <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Мини-отель</span>
              <div class="text-lg font-bold tracking-tighter text-slate-900 uppercase font-headline">
                CITY CENTER
              </div>
            </a>
            
            <div class="hidden lg:flex items-center space-x-8 font-label text-[11px] uppercase tracking-wider font-bold">
              <a class="text-slate-500 hover:text-slate-900 transition-colors" href="#about">О компании</a>
              <a class="text-slate-500 hover:text-slate-900 transition-colors" href="#rooms">Номера</a>
              <a class="text-slate-500 hover:text-slate-900 transition-colors" href="#gallery">Галерея</a>
              <a class="text-slate-500 hover:text-slate-900 transition-colors" href="#reviews">Отзывы</a>
            </div>
            
            <button class="bg-primary text-on-primary px-4 py-2 rounded font-label font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary-dim transition-all active:scale-95 whitespace-nowrap">
              Заказать звонок
            </button>
          </div>
        </div>
      </nav>
      <main class="pt-16 md:pt-[110px]">
        <!-- Hero Section -->
        <section id="hero" class="relative min-h-[650px] flex items-center justify-center overflow-hidden px-8 py-16 lg:py-24">
          <div class="absolute inset-0 z-0">
            <img alt="Luxurious boutique hotel room with warm ambient lighting, plush neutral bedding, and elegant minimalist furniture in a serene morning atmosphere" class="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk5tSxaSo3VIBLJf7BJJMfDq5Oz4fYLK6rBGXqJiOMsAeGQD09XOfSVdGNhPiQFnqFa3bE4XzxGSFKBEhs79cW72YwRopWhPKsYS3MnlW8rtTaCbeQcTbprovz4XEPboqIU5Gf-W7cFANOXdT2zNkJDcjQYpEptRFLWk8_EhtIfTSgbQfaVr2HA4dPH1uNJ9Gbk_oDkqRIpBiV1zbt1pQsbg79llrNXfJrkJn_70UUa6Tmr139GVNvVPRGkGXhsc53McwGm3XSiPM"/>
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
            <div class="glass-card p-10 rounded-[4px] border border-white/30 max-w-lg ml-auto w-full">
              <div class="space-y-6">
                <div class="space-y-4">
                  <!-- Name Field -->
                  <div class="space-y-1.5">
                    <label class="block font-label text-[10px] uppercase text-slate-500 font-bold tracking-wider">Ваше Имя</label>
                    <input class="w-full bg-white border border-slate-200 rounded-[4px] px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Иван Иванов" type="text"/>
                  </div>
                  <!-- Phone Field -->
                  <div class="space-y-1.5">
                    <label class="block font-label text-[10px] uppercase text-slate-500 font-bold tracking-wider">Ваш Номер телефона</label>
                    <input class="w-full bg-white border border-slate-200 rounded-[4px] px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+7 (___) ___-__-__" type="tel"/>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                      <label class="block font-label text-[10px] uppercase text-slate-500 font-bold tracking-wider">Дата заезда</label>
                      <input class="w-full bg-white border border-slate-200 rounded-[4px] px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" type="date"/>
                    </div>
                    <div class="space-y-1.5">
                      <label class="block font-label text-[10px] uppercase text-slate-500 font-bold tracking-wider">Дата выезда</label>
                      <input class="w-full bg-white border border-slate-200 rounded-[4px] px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" type="date"/>
                    </div>
                  </div>
                  <!-- Room Selection -->
                  <div class="space-y-1.5">
                    <label class="block font-label text-[10px] uppercase text-slate-500 font-bold tracking-wider">Тип номера</label>
                    <select class="w-full bg-white border border-slate-200 rounded-[4px] px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                      <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.title }}</option>
                    </select>
                  </div>
                </div>
                <!-- Consent Checkbox -->
                <div class="flex items-start gap-3">
                  <input class="mt-1 h-4 w-4 rounded-[2px] border-slate-300 text-primary focus:ring-primary" id="privacy-consent" type="checkbox"/>
                  <label class="text-[10px] leading-relaxed text-slate-500 font-medium" for="privacy-consent">
                    Я выражаю согласие на передачу и обработку персональных данных в соответствии с Политикой конфиденциальности (согласно категориям и целям, поименованным в п. 4.2.1)
                  </label>
                </div>
                <!-- Submit Button -->
                <button class="w-full bg-primary text-white py-4 rounded-[4px] font-headline font-bold uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-[0.98]">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </section>
        <!-- Features Bento -->
        <section id="about" class="py-16 lg:py-24 px-8 max-w-7xl mx-auto bg-surface">
          <div class="mb-12 lg:mb-16 text-center">
            <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">О сервисе</span>
            <h2 class="font-headline text-3xl font-bold text-on-surface">Искусство гостеприимства</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1: Локация -->
            <div class="relative rounded-lg overflow-hidden group h-[400px] flex flex-col">
              <img alt="Modern minimalist hotel lobby in Murmansk city center" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1JWEDxG8xVhZP4Nyt8VbW-hS46vMokVLSro2wgidwoalvfYX-_P3d6UUOmhbk4gG1AhyNssou8jMcEVwhIGepvRimByu_y06VlbOATfDUkb_fIW2uFBD4AVIeLsIVQBkptmai2VICYKk-75VEECgPLZmdMqFS71JtAPlNzN9_aZ0Dio7EGEh1rpDMjTOC2rUfaZFKvOX73xf2K_K_hun31fKWiPpPXYfpE90tar9FkRxJu1e7f_mCMoRGQFC4FcvcvlvVdD-YYzk"/>
              <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 text-white">
                <h4 class="font-headline text-lg font-bold mb-2">Локация в центре</h4>
                <p class="font-body text-xs opacity-90 leading-relaxed">В самом сердце Мурманска: всего 1,5 км до ж/д вокзала и 33 км до аэропорта.</p>
              </div>
            </div>
            <!-- Card 2: Номерной фонд -->
            <div class="bg-surface-container-low rounded-lg p-6 flex flex-col justify-between border border-outline-variant/20">
              <div class="space-y-4">
                <Icon name="material-symbols-light:hotel" class="text-primary text-3xl" />
                <h4 class="font-headline font-bold text-lg">Комфортный номерной фонд</h4>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed">9 уютных номеров: 5 двухместных (2 кровати), 3 с двухъярусными кроватями и 1 улучшенный одноместный.</p>
              </div>
            </div>
            <!-- Card 3: Оснащение -->
            <div class="bg-primary text-white rounded-lg p-6 flex flex-col justify-between">
              <div class="space-y-4">
                <Icon name="material-symbols-light:check-circle" class="text-primary-container text-3xl" />
                <h4 class="font-headline font-bold text-lg">Полное оснащение</h4>
                <ul class="font-body text-xs opacity-90 space-y-2">
                  <li>• ТВ и светонепроницаемые шторы</li>
                  <li>• Ванная с душем и феном</li>
                  <li>• Косметические принадлежности</li>
                  <li>• Бесплатный Wi-Fi в номерах</li>
                </ul>
              </div>
            </div>
            <!-- Card 4: Завтрак и кухня -->
            <div class="bg-surface-container-low rounded-lg p-6 flex flex-col justify-between border border-outline-variant/20">
              <div class="space-y-4">
                <Icon name="material-symbols-light:restaurant" class="text-primary text-3xl" />
                <h4 class="font-headline font-bold text-lg">Завтрак и кухня</h4>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed">Континентальный завтрак включен для каждого гостя. Доступна общая кухня для самостоятельного приготовления.</p>
              </div>
            </div>
          </div>
        </section>
        <!-- Room Gallery -->
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
        <!-- Our Advantages Section -->
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
        <!-- Gallery Section -->
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
                  <img :src="photo.image" :alt="photo.title || group.category" class="w-full h-full object-cover transition-transform duration-700" loading="lazy" />
                  <div v-if="photo.title" class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end h-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white font-headline font-bold text-xs uppercase tracking-wider">{{ photo.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Apartments CTA Section -->
        <section class="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
          <div class="bg-primary text-white rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div class="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/apartments/1920/1080')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
            
            <div class="relative z-10 lg:w-1/2 space-y-6">
              <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary-container mb-2 block">Альтернатива</span>
              <h2 class="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight">Не нашли подходящий вариант?</h2>
              <h3 class="font-headline text-2xl lg:text-3xl font-bold text-primary-container">Не расстраивайтесь!</h3>
              <p class="font-body text-base text-primary-fixed-dim leading-relaxed">
                Вас ждут уютные апартаменты ООО «СитиЦентр», расположенные в тихом районе г. Мурманска с видом на озеро в 26 км от аэропорта и в 2 км от железнодорожного вокзала.
              </p>
              <a href="#" class="inline-block bg-white text-primary px-8 py-4 rounded-lg font-headline font-bold text-sm uppercase tracking-widest hover:bg-surface-container-low transition-all active:scale-95 mt-4">
                Перейти на сайт АПАРТАМЕНТЫ
              </a>
            </div>
            
            <div class="relative z-10 lg:w-1/2 flex flex-col gap-6 text-sm text-primary-fixed-dim font-body leading-relaxed bg-black/10 p-8 rounded-xl backdrop-blur-md border border-white/10">
              <p>Апартаменты оснащены всем необходимым для проживания: мебелью, бытовой техникой, постельными и банными принадлежностями, мини-кухней с чайником, микроволновой печью, индукционной плиткой, мини-холодильником, необходимым набором посуды.</p>
              <p>Собственная ванная комната с душем, туалетом, мини стиральной машинкой, феном, бесплатными косметическими принадлежностями. Свежий ремонт и бесплатный wi-fi.</p>
              <div class="border-t border-white/10 pt-4 mt-2">
                <p>Предоставляем отчетные документы.</p>
                <p class="font-bold text-white mt-1">Заезд с 14:00, выезд до 12:00.</p>
              </div>
              <div class="mt-2 text-white font-headline font-bold text-lg">
                Ждём Вас! С нами как дома!
                <span class="block text-xs font-normal opacity-80 mt-1">С уважением, коллектив АПАРТАМЕНТЫ "CITY CENTER"</span>
              </div>
            </div>
          </div>
        </section>
        <!-- Reviews Section -->
        <section id="reviews" class="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">Отзывы</span>
            <h2 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Что говорят наши гости</h2>
          </div>
          <div class="flex justify-center">
            <div class="w-full max-w-3xl bg-white border border-outline-variant/30 rounded-2xl overflow-hidden">
              <div class="relative w-full h-[600px] md:h-[800px] overflow-hidden">
                <iframe style="width:100%;height:100%;border:none;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/116927639185?comments"></iframe>
              </div>
              <div class="p-4 text-center border-t border-outline-variant/10">
                <a href="https://yandex.com/maps/org/city_center/116927639185/" target="_blank" class="font-body text-[10px] text-on-surface-variant hover:text-primary transition-colors">
                  Мини-отель СитиЦентр на Яндекс Картах
                </a>
              </div>
            </div>
          </div>
        </section>
        <!-- Location Section -->
        <section class="py-16 lg:py-24 bg-surface-container-low px-8">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="md:col-span-1 space-y-6">
              <h2 class="font-headline text-3xl font-bold text-on-surface">Наше расположение</h2>
              <p class="font-body text-sm text-on-surface-variant">Мы находимся в самом сердце Мурманска, в пешей доступности от центральной площади и главных транспортных узлов.</p>
              <div class="space-y-4 pt-4 border-t border-outline-variant/30">
                <div class="flex items-start gap-4">
                  <Icon name="material-symbols-light:location-on" class="text-primary text-xl mt-0.5" />
                  <div class="text-sm">
                    <p class="font-bold">Адрес</p>
                    <p class="text-on-surface-variant">г. Мурманск, ул. Володарского, д. 2А</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <Icon name="material-symbols-light:call" class="text-primary text-xl mt-0.5" />
                  <div class="text-sm">
                    <p class="font-bold">Телефон</p>
                    <a href="tel:+79021301444" class="text-on-surface-variant hover:text-primary transition-colors">+7 (902) 130-14-44</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2 h-[400px] rounded-xl overflow-hidden">
              <div style="position:relative;overflow:hidden;">
                <a href="https://yandex.com/maps/org/city_center/116927639185/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Мини-отель СитиЦентр</a>
                <a href="https://yandex.com/maps/23/murmansk/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Гостиница в Мурманске</a>
                <iframe src="https://yandex.com/map-widget/v1/org/city_center/116927639185/?ll=33.083361%2C68.977894&utm_content=org-name&utm_medium=reviews&utm_source=maps-reviews-widget&z=17" 
                width="100%" 
                height="400" 
                frameborder="1" 
                allowfullscreen="true" 
                style="position:relative;">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <!-- Footer -->
      <footer class="w-full py-16 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            <div class="space-y-6">
              <div class="text-xl font-bold text-slate-800 font-headline uppercase tracking-tighter">CITY CENTER</div>
              <div class="font-body text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
                <p>© 2026 ООО «СитиЦентр»</p>
                <p>ИНН 5190047839</p>
                <p>ОГРН 1155190005409</p>
              </div>
            </div>
            
            <div class="space-y-6">
              <span class="font-headline font-bold text-[10px] uppercase tracking-[0.3em] text-slate-500 block">Контакты</span>
              <div class="font-body text-sm text-slate-600 space-y-3">
                <p class="flex items-center gap-3">
                  <Icon name="material-symbols-light:location-on" class="text-primary text-xl" />
                  <span>г. Мурманск, ул. Володарского, д. 2А</span>
                </p>
                <a href="tel:+79021301444" class="flex items-center gap-3 hover:text-primary transition-colors group">
                  <Icon name="material-symbols-light:call" class="text-primary text-xl group-hover:scale-110 transition-transform" />
                  <span>+7 (902) 130-14-44</span>
                </a>
                <a href="mailto:citycentre-hotel@mail.ru" class="flex items-center gap-3 hover:text-primary transition-colors group">
                  <Icon name="material-symbols-light:mail" class="text-primary text-xl group-hover:scale-110 transition-transform" />
                  <span>citycentre-hotel@mail.ru</span>
                </a>
              </div>
            </div>

            <div class="space-y-6">
              <span class="font-headline font-bold text-[10px] uppercase tracking-[0.3em] text-slate-500 block">Информациия</span>
              <div class="flex flex-col space-y-4">
                <a class="font-body text-sm text-slate-500 hover:text-slate-900 transition-colors w-fit underline decoration-slate-200 underline-offset-4" href="#">Политика конфиденциальности</a>
                <div class="flex gap-4">
                  <a class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-200 hover:border-primary hover:text-primary transition-all overflow-hidden" href="#">
                    <Icon name="material-symbols-light:public" class="text-2xl" />
                  </a>
                  <a class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-200 hover:border-primary hover:text-primary transition-all overflow-hidden" href="#">
                    <Icon name="material-symbols-light:chat" class="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
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
    </Body>
  </Html>
</template>
