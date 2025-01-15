<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">イベント詳細</h1>
        </header>
        <main v-if="event">
            <h2 class="text-xl font-bold">{{ event.title }}</h2>
            <p>{{ event.date }} - {{ event.location }}</p>
            <p>{{ event.description }}</p>
            <NuxtLink to="/" class="mt-4 inline-block text-blue-500 underline">戻る</NuxtLink>
        </main>
        <div v-else>
            <p>イベント情報を読み込んでいます...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "#app";
import { useHead } from "#app";

const event = ref(null);
const route = useRoute();

const fetchEvent = async () => {
    try {
        const response = await fetch('http://localhost:3000/mock/events.json');
        const data = await response.json();
        if (data && data.events) {
            const id = parseInt(route.params.id, 10);
            event.value = data.events.find(e => e.id === id);
        }
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
};

onMounted(() => {
    fetchEvent();
});

useHead(() => ({
    title: event.value ? `${event.value.title} - イベント詳細` : 'イベント詳細',
    meta: [
        {
            name: 'description',
            content: event.value ? event.value.description : 'イベントの詳細情報を表示します。',
        },
        {
            property: 'og:title',
            content: event.value ? event.value.title : 'イベント詳細',
        },
        {
            property: 'og:description',
            content: event.value ? event.value.description : 'イベントの詳細情報を表示します。',
        },
        {
            property: 'og:image',
            content: '/event-og-image.jpg',
        },
    ],
}));
</script>

<style>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

header {
    text-align: center;
    margin-bottom: 20px;
}
</style>