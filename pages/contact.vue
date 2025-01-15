<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">お問い合わせ</h1>
            <p>以下のフォームに必要事項を入力してください。</p>
        </header>
        <main>
            <FormContact />
        </main>
    </div>
</template>

<script setup>
import FormContact from "@/components/FormContact.vue";
import { useHead } from "#app";

useHead({
    title: 'イベント紹介サイト - お問い合わせ',
    meta: [
        {
            name: 'description',
            content: 'イベントに関するお問い合わせは、こちらのフォームをご利用ください。',
        },
        {
            property: 'og:title',
            content: 'お問い合わせ - イベント紹介サイト',
        },
        {
            property: 'og:description',
            content: 'イベントに関するお問い合わせは、こちらのフォームをご利用ください。',
        },
        {
            property: 'og:image',
            content: '/contact-og-image.jpg',
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