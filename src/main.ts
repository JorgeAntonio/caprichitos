import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { supabase } from "./lib/supabase";
import { userSession } from "./lib/useAuth";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");

/**
 * Realiza un seguimiento de si el usuario ha iniciado o no sesión
 * y actualizará el estado de la sesión de usuario en consecuencia.
 */
supabase.auth.onAuthStateChange((_event, session) => {
  userSession.value = session;
});
