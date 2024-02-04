import { createStore } from '../../../state/createStore'

const storeName = '@SideMenu'

type SideMenuStore = {
  opened: boolean
  open: () => void
  close: () => void
}

export const useSideMenu = createStore<SideMenuStore>((set) => ({
  opened: false,
  open: () => {
    set(() => ({ opened: true }), false, { type: `${storeName}/open` })
  },
  close: () => {
    set(() => ({ opened: false }), false, { type: `${storeName}/close` })
  }
}), { name: storeName })
