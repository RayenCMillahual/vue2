import { defineStore } from 'pinia';
import type { User } from '@/interfaces/User';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User | null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});

