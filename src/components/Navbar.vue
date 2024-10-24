<template>
  <nav class="w-full p-4 text-gray-600">
    <div class="container flex items-center justify-between w-full mx-auto">
      <div class="text-2xl font-bold">
        <a href="#">
          <img src="../assets/images/logo.png" alt="Site logo" width="300px" height="70px">
        </a>
      </div>

      <!-- Mobil uchun burger icon -->
      <button @click="toggleMenu" class="block text-black xl:hidden">
        <box-icon name="menu"></box-icon>
      </button>

      <div :class="['hidden xl:flex items-center justify-evenly']">
        <ul class="flex space-x-6 text-lg">
          <li><a href="#main" class="mx-2 hover:text-gray-500">{{ $t('navbar.menu.item1') }}</a></li>
          <li><a href="#about" class="mx-2 hover:text-gray-500">{{ $t('navbar.menu.item2') }}</a></li>
          <li><a href="#servise" class="mx-2 hover:text-gray-500">{{ $t('navbar.menu.item3') }}</a></li>
          <li><a href="#faq" class="mx-2 hover:text-gray-500">{{ $t('navbar.menu.item4') }}</a></li>
        </ul>
        <div class="flex items-center mx-4 space-x-4">
          <select v-model="currentLanguage" @change="changeLanguage" class="px-4 py-2 bg-white border border-gray-900 cursor-pointer rounded-xl">
            <option value="ru">Russian</option>
            <option value="uz">Uzbek</option>
          </select>
          <Button class="px-12 py-4">
            {{ $t('btn.btn_text1') }}
          </Button>
        </div>
      </div>

      <div :class="['fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out', isMenuActive ? 'translate-x-0' : 'translate-x-full']">
        <button @click="toggleMenu" class="absolute top-4 right-4">
          <box-icon name="x"></box-icon>
        </button>
        <ul class="flex flex-col p-6 space-y-4 text-lg">
          <li><a href="#" class="hover:text-gray-500">{{ $t('navbar.menu.item1') }}</a></li>
          <li><a href="#" class="hover:text-gray-500">{{ $t('navbar.menu.item2') }}</a></li>
          <li><a href="#" class="hover:text-gray-500">{{ $t('navbar.menu.item3') }}</a></li>
          <li><a href="#" class="hover:text-gray-500">{{ $t('navbar.menu.item4') }}</a></li>
        </ul>
        <div class="px-6 mt-4">
          <select v-model="currentLanguage" @change="changeLanguage" class="px-4 py-2 bg-white border border-gray-900 cursor-pointer rounded-xl">
            <option class="font-semibold" value="ru">Russian</option>
            <option class="font-semibold" value="uz">Uzbek</option>
          </select>
        </div>
        <div class="mt-6">
          <Button class="px-12 py-4 mx-0">
            {{ $t('btn.btn_text1') }}
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from './Button.vue';

export default {
  components: {
    Button
  },
  setup() {
    const { locale } = useI18n();
    const isMenuActive = ref(false);
    const currentLanguage = ref(locale.value);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const changeLanguage = () => {
      locale.value = currentLanguage.value;
    };

    return {
      isMenuActive,
      toggleMenu,
      changeLanguage,
      currentLanguage,
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
}
</style>
