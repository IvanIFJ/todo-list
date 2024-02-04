import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { PersistOptions, devtools, persist } from 'zustand/middleware'

export type WithMiddlewares<Store> = StateCreator<
    Store,
    [["zustand/devtools", never], ["zustand/persist", unknown]],
    [],
    Store
>

export const stores = new Set<() => void>();

export const createStore = <Store>(store: WithMiddlewares<Store>, persistOpts: PersistOptions<Store>) => {
  const createdStore = (import.meta.env.DEV) ?
    create<Store>()(devtools(persist(store, persistOpts), { name: persistOpts.name })) :
    create<Store>()(persist(store, persistOpts))
  
  stores.add(() => createdStore.setState(createdStore.getInitialState(), true))

  return createdStore
}
