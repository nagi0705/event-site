<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">イベント紹介サイト</h1>
            <p>地域イベントや趣味のコミュニティイベントをご紹介します。</p>
        </header>
        <main>
            <h2 class="text-xl font-bold mt-6 mb-4">イベント一覧</h2>
            <div v-if="loading">イベントを読み込んでいます...</div>
            <div v-else-if="events.length === 0">現在、イベント情報がありません。</div>
            <div v-else>
                <EventCard v-for="event in events" :key="event.id" :event="event" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead, useNuxtApp } from '#app';
import EventCard from '~/components/EventCard.vue';

// ミドルウェアの設定
definePageMeta({
    middleware: ['logger']
});

// データ用の変数
const events = ref([]);
const loading = ref(true);

// Axiosのインスタンスを取得
const { $axios } = useNuxtApp();

// データ取得用の関数
const fetchEvents = async () => {
    try {
        const response = await $axios.get('/mock/events.json'); // Axiosを使用
        events.value = response.data.events || [];
    } catch (error) {
        console.error('Error fetching events:', error);
        events.value = [];
    } finally {
        loading.value = false;
    }
};

// ページロード時にデータ取得
onMounted(() => {
    fetchEvents();
});

// SEO の設定
useHead({
    title: 'イベント紹介サイト - トップページ',
    meta: [
        {
            name: 'description',
            content: '地域イベントや趣味のコミュニティイベントを紹介するサイトです。',
        },
        {
            property: 'og:title',
            content: 'イベント紹介サイト',
        },
        {
            property: 'og:description',
            content: '地域イベントや趣味のコミュニティイベントを紹介するサイトです。',
        },
        {
            property: 'og:image',
            content: '/default-og-image.jpg',
        },
    ],
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