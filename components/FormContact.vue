<template>
    <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 shadow-md rounded-lg">
        <div>
            <label for="name" class="block font-medium text-gray-700">名前</label>
            <input type="text" id="name" v-model="form.name"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required
                minlength="3" />
        </div>
        <div>
            <label for="email" class="block font-medium text-gray-700">メールアドレス</label>
            <input type="email" id="email" v-model="form.email"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required />
        </div>
        <div>
            <label for="message" class="block font-medium text-gray-700">本文</label>
            <textarea id="message" v-model="form.message"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" rows="4"
                required minlength="10"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            送信
        </button>
    </form>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
    name: "",
    email: "",
    message: "",
});

const handleSubmit = () => {
    alert(`送信完了！\n名前: ${form.name}\nメール: ${form.email}\n本文: ${form.message}`);
};
</script>