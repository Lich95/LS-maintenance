import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function getClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    return `${hours}:${minutes<10?'0'+minutes:minutes}`
}