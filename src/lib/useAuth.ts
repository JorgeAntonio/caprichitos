import { Session } from "@supabase/supabase-js";
import { ref } from "vue";

const userSession = ref<Session | null>(null);

export { userSession };
