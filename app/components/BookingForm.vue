<script setup lang="ts">
defineProps<{
  rooms: any[]
}>()
</script>

<template>
  <div class="glass-card p-10 rounded-[4px] border border-white/30 max-w-lg ml-auto w-full">
    <!-- Prices Updated Badge (from requirements) -->
    <div class="mb-6 flex items-center gap-3 bg-primary/10 border border-primary/20 p-3 rounded-lg">
      <Icon name="material-symbols-light:info-outline" class="text-primary text-xl" />
      <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Цены на 2026 г. обновлены</span>
    </div>

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
</template>
