<template>
  <div>
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

    <!-- Actual Footer -->
    <footer class="w-full py-16 bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div class="space-y-6">
            <div class="text-xl font-bold text-slate-800 font-headline uppercase tracking-tighter">CITY CENTER</div>
            <div class="font-body text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
              <p>© 2026 ООО «СитиЦентр»</p>
              <p>ИНН 5190047839</p>
              <p>ОГРН 1155190005409</p>
              <p>Политика конфиденциальности</p>
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
            <span class="font-headline font-bold text-[10px] uppercase tracking-[0.3em] text-slate-500 block">Информация</span>
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
  </div>
</template>
