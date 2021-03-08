import { onUnmounted, onMounted } from "vue";

export default function useWindowEvent(eventName, handleEvent) {
    onMounted(() => window.addEventListener(eventName, handleEvent));
    onUnmounted(() => window.removeEventListener(eventName, handleEvent));
}