import { Message } from '@types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface MainState {
  msg: Message;
  setMsg: (msg: Message) => void;
}

const useStore = create(persist<MainState>((set) => ({
  msg: 'hello',
  setMsg: (msg) => set(() => ({ msg })),
}), { name: 'mainstate', getStorage: () => sessionStorage }));

export default useStore;
