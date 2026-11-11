import { axiosInstance } from "@/lib/axios";
import type { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
  albums: Album[];
  songs: Song[];
  isLoading: boolean;
  error: string | null;
  currentAlbum: Album | null;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (id: string) => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,

  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/albums");
      set({ albums: response.data });
    } catch (error: any) {
      console.error("Failed to fetch albums:", error);
      set({ error: error.response?.data?.message || "Failed to fetch albums" });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchAlbumById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`/albums/${id}`);
      set({ currentAlbum: response.data });
    } catch (error: any) {
      console.error("Failed to fetch album:", error);
      set({ error: error.response?.data?.message || "Failed to fetch album" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
