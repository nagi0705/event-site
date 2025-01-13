<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">お問い合わせ</h1>
            <p>以下のフォームに必要事項を入力してください。</p>
        </header>
        <main>
            <!-- フォームコンポーネントを使用 -->
            <FormContact />
        </main>
    </div>
</template>

<script setup>
import FormContact from "@/components/FormContact.vue";
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