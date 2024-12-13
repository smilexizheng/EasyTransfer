import { ref, watch, Ref } from 'vue'
import { defineStore } from 'pinia'
import { IceServer } from '@/types'

export const useSettingStore = defineStore('setting', () => {
  // autoDisplayImage
  const autoDisplayImage: Ref<boolean> = ref(true)

  if (localStorage.getItem('autoDisplayImage')) {
    autoDisplayImage.value = JSON.parse(
      localStorage.getItem('autoDisplayImage') as string,
    )
  }

  watch(autoDisplayImage, () => {
    localStorage.setItem(
      'autoDisplayImage',
      JSON.stringify(autoDisplayImage.value),
    )
  })

  // directlyOpenLink
  const directlyOpenLink: Ref<boolean> = ref(true)

  if (localStorage.getItem('directlyOpenLink')) {
    directlyOpenLink.value = JSON.parse(
      localStorage.getItem('directlyOpenLink') as string,
    )
  }

  watch(directlyOpenLink, () => {
    localStorage.setItem(
      'directlyOpenLink',
      JSON.stringify(directlyOpenLink.value),
    )
  })

  // maxConnectionNumber
  const maxConnectionNumber: Ref<number> = ref(10)

  if (localStorage.getItem('maxConnectionNumber')) {
    maxConnectionNumber.value = JSON.parse(
      localStorage.getItem('maxConnectionNumber') as string,
    )
  }

  watch(maxConnectionNumber, () => {
    localStorage.setItem(
      'maxConnectionNumber',
      JSON.stringify(maxConnectionNumber.value),
    )
  })

  // iceServers
  const iceServers: Ref<IceServer[]> = ref([
    {
      urls: 'turn:127.0.0.1:3478',
      username: 'cf841207b56ebddc17948dde',
      credential: '0dGvvEm7eq2UaqlW',
    },
  ])

  if (localStorage.getItem('iceServers')) {
    iceServers.value = JSON.parse(localStorage.getItem('iceServers') as string)
  }

  watch(iceServers, () => {
    localStorage.setItem('iceServers', JSON.stringify(iceServers.value))
  })

  return {
    autoDisplayImage,
    directlyOpenLink,
    maxConnectionNumber,
    iceServers,
  }
})
