export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`ページ遷移: ${from.fullPath} -> ${to.fullPath}`);
});