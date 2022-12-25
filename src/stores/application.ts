import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/services/axios'
import { useRouter } from "vue-router"

import type { User } from '@/types'

export const useApplicationStore = defineStore('application', () => {

  const user = ref<User | null>(null)
  const loading = ref<Boolean>(false)

  const init = async() => {
    loading.value = true
    let res = await getUserData()
    if(res){
      user.value = res.data
      loading.value = false
    }
  }

  const getUserData = () => {
    return axios.get('/user').then(res => {
      return res
    }).catch(err => {
      console.log(err);
    }).finally(()=>{})
  }

  return { init, user, loading }
})
