<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">イベント詳細</h1>
        </header>
        <main v-if="event">
            <h2 class="text-xl font-bold">{{ event.title }}</h2>
            <p>{{ event.date }} - {{ event.location }}</p>
            <p>{{ event.description }}</p>
        </main>
        <div v-else>
            <p>イベント情報を読み込んでいます...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "#app";

// イベントデータを格納する変数
const event = ref(null);

// 現在のルートから ID を取得
const route = useRoute();

// データを取得する関数
const fetchEvent = async () => {
    try {
        // データを取得
        const response = await fetch('http://localhost:3000/mock/events.json');
        const data = await response.json();

        // イベント ID に基づいて該当するイベントを取得
        if (data && data.events) {
            const id = parseInt(route.params.id, 10); // IDを整数に変換
            event.value = data.events.find(e => e.id === id);
        }
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
};

// ページが読み込まれたときにデータを取得
onMounted(() => {
    fetchEvent();
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