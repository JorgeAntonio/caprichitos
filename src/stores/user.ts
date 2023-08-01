import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";

interface Credentials {
  email: string | "";
  password: string | "";
}

export const almacenAuth = defineStore({
  id: "user",
  state: () => ({}),
  actions: {
    async login(credentials: Credentials) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          alert("Error al iniciar sesión " + error.message);
        }

        // No detecta error, pero no detecta el usuario y envía un enlace al correo
        if (!error && !data) {
          alert("Revisa tu correo para iniciar sesión");
        }
      } catch (error: any) {
        console.error("Error detectado ", error.message);
      }
    },

    // Registra un nuevo usuario y envía un email para la activación
    async singup(credentials: Credentials) {
      try {
        const { email, password } = credentials;
        // Avisa al usuario si no ha rellenado sus credenciales
        if (!email || !password) {
          alert("Email y contraseña son obligatorios");
          return;
        }
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
          alert(error.message);
          alert("Error al registrarse " + error.message);
          return;
        }
        alert("Revisa tu correo para activar tu cuenta");
      } catch (error) {
        alert("Error al registrarse");
        console.error("Error detectado ", error);
      }
    },
    // Recupera/Actualiza la contraseña de un usuario
    async passwordReset() {
      const email = prompt("Por favor introduce tu correo:");
      if (!email) {
        window.alert("Se necesita el correo electrónico.");
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
          alert("Error: " + error.message);
        } else {
          alert("Se enviará un correo para restablecer la contraseña.");
        }
      }
    },
    // Actualiza la contraseña del usuario
    async handleUpdateUser(credentials: Credentials) {
      try {
        const { error } = await supabase.auth.updateUser(credentials);
        if (error) {
          alert(
            "Ha ocurrido un error al actualizar la información del usuario: " +
              error.message
          );
        } else {
          alert("¡Se ha actualizado la información del usuario!");
          window.location.href = "/";
        }
      } catch (error: any) {
        alert(
          "Ha ocurrido un error actualizando la información del usuario: " +
            error.message
        );
      }
    },
    // Finaliza la sesión del usuario
    async logout() {
      console.log("Saliendo");
      try {
        const { error } = await supabase.auth.signOut();

        if (error) {
          alert("Ha ocurrido un error al salir de la sesión");
          console.error("Error", error);
          return;
        }

        alert("¡Has salido de la sesión!");
      } catch (error) {
        alert("Error desconocido al salir de la sesión");
        console.error("Error", error);
      }
    },
  },
});
