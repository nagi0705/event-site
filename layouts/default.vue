<template>
    <div class="flex flex-col min-h-screen">
        <!-- ヘッダー -->
        <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
            <nav class="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 class="text-3xl font-bold tracking-wide">イベント紹介サイト</h1>
                <ul class="flex space-x-6 text-lg font-medium">
                    <li>
                        <NuxtLink to="/" class="hover:underline">ホーム</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:underline">お問い合わせ</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- メインコンテンツ -->
        <main class="flex-grow container mx-auto py-12 px-6 bg-gray-50 shadow-inner">
            <slot />
        </main>

        <!-- フッター -->
        <footer class="bg-gray-800 text-white">
            <div class="container mx-auto py-6 text-center">
                <p class="text-sm">© 2025 イベント紹介サイト. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

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
    padding: 16px 24px;
    /* 上下左右の余白 */
}

/* サイトタイトル */
header h1 {
    font-size: 1.75rem;
    /* サイズを少し大きく */
    font-weight: bold;
    letter-spacing: 1px;
    /* 文字間隔 */
    transition: color 0.2s ease-in-out;
    /* ホバー時のスムーズな変化 */
}


/* ナビゲーションのスタイル */
header nav ul {
    display: flex;
    gap: 16px;
    /* リンク間の間隔 */
    list-style: none;
    margin: 0;
    padding: 0;
}

/* ナビゲーションリンク */
header nav ul li a {
    color: rgb(77, 78, 82);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 12px;
    /* リンクの内側余白 */
    border-radius: 4px;
    /* 丸みを追加 */
    transition: all 0.3s ease-in-out;
}

header nav ul li a:hover {
    background-color: #ffffff;
    /* ホバー時の背景色 */
    color: #4a90e2;
    /* テキストを青色に */
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        /* ナビゲーションを縦並びに */
        align-items: flex-start;
    }

    header nav ul {
        flex-direction: column;
        gap: 12px;
    }
}
</style>