<script lang="ts" setup>
import { almacenAuth } from "@/stores/user";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const user = almacenAuth();
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Iniciar sesión</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Correo</span>
            </label>
            <input type="text" placeholder="ejemplo@email.com" class="input input-bordered" v-model="email" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Contraseña</span>
            </label>
            <input type="text" placeholder="******" class="input input-bordered" v-model="password" />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">¿Olvidaste tu contraseña?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button @click="user.login({ email, password })" class="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
          <div class="form-control mt-2">
            <button @click="user.singup({ email, password })" class="btn btn-secondary">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
