<script setup>
// Importar los componentes necesarios
import { RouterView } from 'vue-router'
import CoronaPopup from '@/components/CoronaPopup.vue';
import PopupFinVidas from '@/components/PopupFinVidas.vue';
import PopupGanador from '@/components/PopupGanador.vue';
</script>

<template>
    <!-- Renderizar el componente RouterView para manejar las rutas -->
    <RouterView />

    <!-- Renderizar el componente CoronaPopup -->
    <CoronaPopup></CoronaPopup>

    <!-- Renderizar el componente PopupFinVidas -->
    <PopupFinVidas />

    <!-- Renderizar el componente PopupGanador -->
    <PopupGanador />
</template>
