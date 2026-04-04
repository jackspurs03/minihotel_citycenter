<template>
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
</template>
