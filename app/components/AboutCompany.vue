<template>
  <section id="about" class="py-16 lg:py-24 px-8 max-w-7xl mx-auto bg-surface">
    <div class="mb-12 lg:mb-16 text-center">
      <span class="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">О сервисе</span>
      <h2 class="font-headline text-3xl font-bold text-on-surface">Искусство гостеприимства</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div class="relative rounded-lg overflow-hidden group h-[400px] flex flex-col">
        <img alt="Modern minimalist hotel lobby" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1JWEDxG8xVhZP4Nyt8VbW-hS46vMokVLSro2wgidwoalvfYX-_P3d6UUOmhbk4gG1AhyNssou8jMcEVwhIGepvRimByu_y06VlbOATfDUkb_fIW2uFBD4AVIeLsIVQBkptmai2VICYKk-75VEECgPLZmdMqFS71JtAPlNzN9_aZ0Dio7EGEh1rpDMjTOC2rUfaZFKvOX73xf2K_K_hun31fKWiPpPXYfpE90tar9FkRxJu1e7f_mCMoRGQFC4FcvcvlvVdD-YYzk"/>
        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 text-white">
          <h4 class="font-headline text-lg font-bold mb-2">Локация в центре</h4>
          <p class="font-body text-xs opacity-90 leading-relaxed">В самом сердце Мурманска: всего 1,5 км до ж/д вокзала и 33 км до аэропорта.</p>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="bg-surface-container-low rounded-lg p-6 flex flex-col justify-between border border-outline-variant/20">
        <div class="space-y-4">
          <Icon name="material-symbols-light:hotel" class="text-primary text-3xl" />
          <h4 class="font-headline font-bold text-lg">Комфортный номерной фонд</h4>
          <p class="font-body text-xs text-on-surface-variant leading-relaxed">9 уютных номеров: 5 двухместных (2 кровати), 3 с двухъярусными кроватями и 1 улучшенный одноместный.</p>
        </div>
      </div>
      <!-- Card 3 -->
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
      <!-- Card 4 -->
      <div class="bg-surface-container-low rounded-lg p-6 flex flex-col justify-between border border-outline-variant/20">
        <div class="space-y-4">
          <Icon name="material-symbols-light:restaurant" class="text-primary text-3xl" />
          <h4 class="font-headline font-bold text-lg">Завтрак и кухня</h4>
          <p class="font-body text-xs text-on-surface-variant leading-relaxed">Континентальный завтрак включен для каждого гостя. Доступна общая кухня для самостоятельного приготовления.</p>
        </div>
      </div>
    </div>
  </section>
</template>
