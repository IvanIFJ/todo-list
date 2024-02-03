import { create } from 'zustand';
import type { StateCreator } from 'zustand';
import { persist, devtools, PersistOptions } from 'zustand/middleware';

export type WithMiddlewares<Store> = StateCreator<
    Store,
    [["zustand/devtools", never], ["zustand/persist", unknown]],
    [],
    Store
>

export const createStore = <Store>(store: WithMiddlewares<Store>, persistOpts: PersistOptions<Store>) => {
  if (import.meta.env.DEV)
    return create<Store>()(devtools(persist(store, persistOpts), { name: persistOpts.name }))

  return create<Store>()(persist(store, persistOpts))
}
