import {writable} from 'svelte/store'

export const appStore = writable({
  dateOptions: {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  },
  modalIsOpen: false,
  isLightBoxOpen: false,
  galleryClickedImage: undefined,
  isNavOpen: false
})
