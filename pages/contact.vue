<template>
    <div class="container mx-auto p-4">
        <header>
            <h1 class="text-2xl font-bold mb-4">お問い合わせ</h1>
            <p>以下のフォームに必要事項を入力してください。</p>
        </header>
        <main>
            <!-- フォーム -->
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- 名前 -->
                <div>
                    <label for="name" class="block font-medium mb-1">名前</label>
                    <input type="text" id="name" v-model="form.name" class="w-full border rounded p-2" required
                        minlength="3" />
                </div>

                <!-- メールアドレス -->
                <div>
                    <label for="email" class="block font-medium mb-1">メールアドレス</label>
                    <input type="email" id="email" v-model="form.email" class="w-full border rounded p-2" required />
                </div>

                <!-- 本文 -->
                <div>
                    <label for="message" class="block font-medium mb-1">本文</label>
                    <textarea id="message" v-model="form.message" class="w-full border rounded p-2" rows="4" required
                        minlength="10"></textarea>
                </div>

                <!-- 送信ボタン -->
                <button type="submit" class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                    送信
                </button>
            </form>

            <!-- トップページに戻るリンク -->
            <div class="mt-8">
                <NuxtLink to="/" class="text-blue-500 underline">
                    トップページに戻る
                </NuxtLink>
            </div>
        </main>
    </div>
</template>

<script setup>
import { reactive } from "vue";

// フォームデータを格納する
const form = reactive({
    name: "",
    email: "",
    message: "",
});

// フォーム送信時の処理
const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
        alert("全ての項目を正しく入力してください。");
        return;
    }
    console.log("送信内容:", form);
    alert(`送信が完了しました！\n名前: ${form.name}\nメール: ${form.email}\n本文: ${form.message}`);
};
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

textarea {
    resize: none;
}
</style>