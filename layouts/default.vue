<template>
    <div class="flex flex-col min-h-screen">
        <!-- ヘッダー -->
        <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
            <nav class="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 class="text-2xl md:text-3xl font-bold tracking-wide">イベント紹介サイト</h1>
                <!--<div class="md:hidden">-->
                <!-- ハンバーガーメニューボタン -->
                <!--<button @click="toggleMenu" class="focus:outline-none md:hidden">
                    <span class="block w-6 h-0.5 bg-white mb-1"></span>
                    <span class="block w-6 h-0.5 bg-white mb-1"></span>
                    <span class="block w-6 h-0.5 bg-white"></span>
                </button>
                <!--</div>-->
                <ul :class="[
                    'text-lg font-medium',
                    menuOpen ? 'block' : 'hidden',
                    'md:flex md:space-x-6 md:flex-row flex-col'
                ]" class="hidden md:flex">
                    <li>
                        <NuxtLink to="/" class="hover:underline py-2 md:py-0">ホーム</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="hover:underline py-2 md:py-0">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:underline py-2 md:py-0">お問い合わせ</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- メインコンテンツ -->
        <main class="flex-grow container mx-auto py-6 px-4 md:py-12 md:px-6 bg-gray-50 shadow-inner">
            <slot />
        </main>

        <!-- フッター -->
        <footer class="bg-gray-800 text-white">
            <div class="container mx-auto py-4 md:py-6 text-center">
                <p class="text-xs md:text-sm">© 2025 イベント紹介サイト. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>

<style>
.container {
    max-width: 1200px;
}

/* ヘッダーのスタイルをさらにカスタマイズ可能 */
header h1 {
    letter-spacing: 1px;
    /* タイトルの文字間隔を調整 */
}

header nav ul li {
    transition: all 0.2s ease-in-out;
    /* ナビゲーションリンクのホバー効果を滑らかに */
}

header nav ul li:hover {
    transform: scale(1.05);
    /* ホバー時にリンクを少し拡大 */
}

/* ヘッダー全体の背景と高さ */
header {
    background: linear-gradient(to right, #D9AFD9, #97D9E1, #FFDFD3);
    color: rgb(77, 78, 82);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* ヘッダー内のコンテナ */
header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    /* モバイル時に少し余白を減らす */
}

/* サイトタイトル */
header h1 {
    font-size: 1.5rem;
    /* モバイル時のサイズ調整 */
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.2s ease-in-out;
}

/* ナビゲーションのスタイル */
header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

/* ナビゲーションリンク */
header nav ul li a {
    color: rgb(77, 78, 82);
    text-decoration: none;
    font-size: 0.875rem;
    /* モバイル時はtext-sm相当 */
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
}

header nav ul li a:hover {
    background-color: #ffffff;
    color: #4a90e2;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        align-items: flex-start;
    }

    header nav ul {
        flex-direction: column;
        gap: 12px;
    }

    header h1 {
        font-size: 1.25rem;
        /* モバイル時はさらに小さく */
    }
}
</style>