<template>
    <div class="container">
        <header>
            <h1>イベント紹介サイト</h1>
            <p>地域イベントや趣味のコミュニティイベントをご紹介します。</p>
        </header>
        <main>
            <h2>イベント一覧</h2>
            <!-- イベント一覧の表示部分（仮のデータを使ってカード形式で表示） -->
            <div class="event-card" v-for="event in events" :key="event.id">
                <h3>{{ event.title }}</h3>
                <p>{{ event.date }} - {{ event.location }}</p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 仮のイベントデータ
const events = ref([
    { id: 1, title: '地域マラソン大会', date: '2025-02-10', location: '市民公園' },
    { id: 2, title: 'フリーマーケット', date: '2025-02-15', location: '中央広場' },
    { id: 3, title: '料理教室', date: '2025-03-01', location: '地域センター' }
]);
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

.event-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>