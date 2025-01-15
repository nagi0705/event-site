<template>
    <div class="container mx-auto p-4 bg-gray-50 min-h-screen">
        <header class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">イベント紹介サイト</h1>
            <p class="text-gray-600">地域イベントや趣味のコミュニティイベントをご紹介します。</p>
        </header>
        <main>
            <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-700">イベント一覧</h2>
            <div v-if="loading" class="text-gray-500">イベントを読み込んでいます...</div>
            <div v-else-if="events.length === 0" class="text-gray-500">現在、イベント情報がありません。</div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard v-for="event in events" :key="event.id" :event="event" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import EventCard from "~/components/EventCard.vue";

const events = ref([]);
const loading = ref(true);

const fetchEvents = async () => {
    try {
        const response = await fetch("http://localhost:3000/mock/events.json");
        const data = await response.json();
        events.value = data.events || [];
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchEvents();
});
</script>

<style>
.container {
    max-width: 1200px;
}
</style>