import { defineStore } from "pinia";
import { supabase } from "../lib/supabase";

export interface Surprise {
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
  surprises: Surprise[];
  size: string;
  uploading: boolean;
  loading: boolean;
  src: string;
  files: any;
  filePath: any;
  error: string | null;
  editing: boolean;
  downloadUrl: any;
  surprise: Surprise;
  categories: any;
}

export const surpriseStore = defineStore({
  id: "surprise",
  state: (): State => ({
    surprises: [],
    size: "16em",
    uploading: false,
    loading: false,
    src: "",
    files: null,
    filePath: null,
    error: null,
    editing: false,
    downloadUrl: {},
    surprise: {
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
    getSurprises: (state) => state.surprises,
    getSurprise: (state) => state.surprise,
    getCategories: (state) => state.categories,
  },
  actions: {
    async fetchSurprises() {
      const { data: surprises, error } = await supabase
        .from("surprises")
        .select("*");
      if (error) {
        throw new Error(error.message);
      }
      this.surprises = surprises!;
    },
    async fetchSurprise(id: string) {
      const { data: surprise, error } = await supabase
        .from("surprises")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      this.surprise = surprise!;
    },
    async addSurprise(surprise: Surprise) {
      const { data, error } = await supabase
        .from("surprises")
        .insert([surprise])
        .single();
      if (error) {
        throw new Error(error.message);
      }
      this.surprises.push(data!);
    },
    async updateSurprise(surprise: Surprise) {
      const { data, error } = await supabase
        .from("surprises")
        .update(surprise)
        .eq("id", surprise.id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      const index = this.surprises.findIndex((p) => p.id === surprise.id);
      this.surprises[index] = data!;
    },
    async deleteSurprise(id: string) {
      const { error } = await supabase.from("surprises").delete().eq("id", id);
      if (error) {
        throw new Error(error.message);
      }
      const index = this.surprises.findIndex((p) => p.id === id);
      this.surprises.splice(index, 1);
    },
    async fetchCategories() {
      const { data: categories, error } = await supabase
        .from("categories")
        .select("*");
      if (error) {
        throw new Error(error.message);
      }
      this.categories = categories!;
    },
  },
});
