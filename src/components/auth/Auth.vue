<script lang="ts" setup>
import { almacenAuth } from "@/stores/user";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const user = almacenAuth();
</script>

<template>
  <div class="flex flex-col space-y-4 pb-6 text-center">
    <h1 class="text-5xl font-bold">Iniciar sesión</h1>
    <p>
      Con Google o tu correo electrónico.
    </p>
    <form action="/create" method="post">
      <button @click="user.handleOAuthLogin('google')" type="button"
        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 18 19">
          <path fill-rule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clip-rule="evenodd" />
        </svg>
        Iniciar con Google
      </button>
    </form>
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
</template>
