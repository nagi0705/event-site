<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">About</h1>
        </header>
        <main>
            <p>
                このサイトは地域イベントや趣味のコミュニティイベントを紹介するために作成されました。
            </p>
            <p>
                制作者情報: このプロジェクトは Nuxt.js を使って作成されました。
            </p>
            
        </main>
    </div>
</template>

<script setup>
import { useHead } from '#app';

// SEO 用に meta タグを設定
useHead({
    title: 'About - イベント紹介サイト',
    meta: [
        {
            name: 'description',
            content: 'このサイトについての情報を紹介します。',
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