<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">イベント紹介サイト</h1>
            <p>地域イベントや趣味のコミュニティイベントをご紹介します。</p>
        </header>
        <main>
            <h2 class="text-xl font-bold mt-6 mb-4">イベント一覧</h2>
            <!-- データの読み込み状態を表示 -->
            <div v-if="events.length === 0">イベントを読み込んでいます...</div>
            <div v-else>
                <!-- イベント一覧の表示 -->
                <EventCard v-for="event in events" :key="event.id" :event="event" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventCard from '~/components/EventCard.vue';

// イベントデータ
const events = ref([]);

// データを取得する関数
const fetchEvents = async () => {
    try {
        const response = await fetch('http://localhost:3000/mock/events.json');
        const data = await response.json();
        events.value = data.events;
    } catch (error) {
        console.error('Error details:', error);
    }
};

onMounted(() => {
    fetchEvents();
});
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