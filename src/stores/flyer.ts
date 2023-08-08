import { defineStore } from "pinia";
import { supabase } from "../lib/supabase";

export interface Flyer {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface State {
  flyers: Flyer[];
  size: string;
  uploading: boolean;
  loading: boolean;
  src: string;
  files: any;
  filePath: any;
  error: string | null;
  editing: boolean;
  downloadUrl: any;
  flyer: Flyer;
  categories: any;
}

export const flyerStore = defineStore({
  id: "flyer",
  state: (): State => ({
    flyers: [],
    size: "16em",
    uploading: false,
    loading: false,
    src: "",
    files: null,
    filePath: null,
    error: null,
    editing: false,
    downloadUrl: {},
    flyer: {
      id: "",
      title: "",
      price: 0,
      description: "",
      image: "",
      category: "",
    },
    categories: {
      "1": "Tortas",
      "2": "Personalizadas",
    },
  }),
  getters: {
    getFlyers: (state) => {
      return state.flyers;
    },
    getFlyer: (state) => {
      return state.flyer;
    },
    getCategories: (state) => {
      return state.categories;
    },
  },
  actions: {
    async fetchFlyers() {
      const { data: flyers, error } = await supabase.from("flyers").select("*");
      if (error) {
        throw error;
      }
      this.flyers = flyers!;
    },
    async fetchFlyer(id: string) {
      const { data: flyer, error } = await supabase
        .from("flyers")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      this.flyer = flyer!;
    },
    async addFlyer(flyer: Flyer) {
      const { data, error } = await supabase.from("flyers").insert([flyer]);
      if (error) {
        throw error;
      }
      this.flyers = [...this.flyers, data![0]];
    },
    async updateFlyer(flyer: Flyer) {
      const { error } = await supabase
        .from("flyers")
        .update(flyer)
        .eq("id", flyer.id);
      if (error) {
        throw error;
      }
      this.flyers = this.flyers.map((f) => (f.id === flyer.id ? flyer : f));
    },
    async deleteFlyer(id: string) {
      const { error } = await supabase.from("flyers").delete().eq("id", id);
      if (error) {
        throw error;
      }
      this.flyers = this.flyers.filter((f) => f.id !== id);
    },
  },
});
