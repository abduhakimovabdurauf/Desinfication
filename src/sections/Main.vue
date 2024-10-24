<template>
  <main style="height: 90vh; width: 98%" class="flex flex-row flex-wrap justify-between m-auto">
    <div class="w-3/6 height-full left">
        <h1 class="mt-48 font-medium text-blue-800 text-7xl font-unbounded">
          {{ $t('main.title') }}
        </h1>
        <p class="mt-12 text-xl text-slate-800 w-96">
            {{ $t('main.text') }}
        </p>
    </div>
    <div class="w-3/6 height-full">
      <table>
        tf
      </table>
    </div>
  </main>
</template>

<script>
export default {
    
}
</script>

<style>
.left {
    background-image: url('../assets/images/main/main2.png');
    background-size: 350px 300px;
    background-repeat: no-repeat;
    background-position: right 280px;
}
</style>