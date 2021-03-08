import { ref } from "vue";

export default function useDebounce(){
    const timeout = ref("");

function debounce(func, wait = 1000) {
    clearTimeout(timeout);
    this.timeout = setTimeout(func, wait);
}

return debounce;
}