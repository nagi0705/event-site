<template>
  <div class="event-card p-4 border rounded shadow-lg bg-white hover:shadow-xl transition">
    <h3 class="text-lg font-bold text-gray-800">{{ event.title }}</h3>
    <p class="text-sm text-gray-600">{{ event.date }} - {{ event.location }}</p>
    <p class="text-gray-700">{{ event.description }}</p>
    <NuxtLink :to="`/events/${event.id}`" class="text-blue-500 underline hover:text-blue-700">
      詳細を見る
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  event: Object, // 親コンポーネントから渡されるイベントデータ
});
</script>