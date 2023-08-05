import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface TiposEstado {
  categories: Category[];
  size: string;
  uploading: boolean;
  loading: boolean;
  src: string;
  files: any;
  filePath: any;
  error: string | null;
  editar: boolean;
  urlDescarga: any;
  category: Category;
}

export const almacenCategory = defineStore({
  id: "category",
  state: (): TiposEstado => ({
    categories: [],
    size: "16em",
    uploading: false,
    loading: false,
    src: "",
    files: null,
    filePath: null,
    error: null,
    editar: false,
    urlDescarga: {},
    category: {
      id: "",
      name: "",
      description: "",
      image: "",
    },
  }),
  actions: {
    async obtenerDatos() {
      try {
        const { data: categories, error } = await supabase
          .from("categories")
          .select("*")
          .order("id");
        if (error) {
          console.log("error", error);
          return;
        }
        // Cuando no devuelve datos
        if (categories === null) {
          this.categories = [];
          return;
        }
        // Cuando devuelve datos
        this.categories = categories;
        console.log("categories", categories);
      } catch (error) {
        console.error("error", error);
      }
    },
    async obtenerDatoId(id: string) {
      try {
        const { data: category, error } = await supabase
          .from("categories")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          console.log("error", error);
          return;
        }
        if (category === null) {
          this.category = {
            id: "",
            name: "",
            description: "",
            image: "",
          };
          return;
        }
        this.category = category;
      } catch (error) {}
    },
    async agregarDato() {
      this.loading = true;
      try {
        const category = {
          name: this.category.name,
          description: this.category.description,
          image: this.category.image,
        };

        const { data, error } = await supabase
          .from("categories")
          .insert(category)
          .single();
        if (error) {
          console.log("error", error);
          return;
        }
        console.log("agregado categoria");
        return data;
      } catch (error) {
        console.error("error", error);
        return null;
      } finally {
        this.loading = false;
      }
    },
  },
});
