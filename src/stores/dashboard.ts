import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import axios from '@/services/axios'
import type { Subscriber } from '@/types'

export const useDashboardStore = defineStore('dashboard', () => {
    const subscribers = reactive<Subscriber | any>([])
    const getSubscribersData = () => {
            axios('subscribers').then(res => {
                for (const subscriber of res.data.data) {
                    subscribers.push(subscriber)
                }
            }).catch(err => {
                console.log(err);
            }).finally(() => { })
    }

    return { subscribers, getSubscribersData }
})
