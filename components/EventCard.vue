<template>
    <div class="event-card mb-4 p-4 border rounded">
        <h3 class="text-lg font-bold">{{ event.title }}</h3>
        <p>{{ event.date }} - {{ event.location }}</p>
        <p>{{ event.description }}</p>
        <NuxtLink :to="`/events/${event.id}`" class="text-blue-500 underline">
            詳細を見る
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    event: Object, // 親コンポーネントから渡されるイベントデータ
});
</script>

<style>
.event-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>