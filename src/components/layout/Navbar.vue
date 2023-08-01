<script lang="ts" setup>
import { userSession } from "@/lib/useAuth";
import { almacenAuth } from "@/stores/user";
const user = almacenAuth();
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Catalogo</a></li>
          <li><a>Nosotros</a></li>
          <li><a>Ubicación</a></li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost normal-case text-xl">Caprichitos</router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#catalogo">Catalogo</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a>Ubicación</a></li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <router-link to="/create-product" v-if="userSession" class="btn btn-primary">Dashboard</router-link>
      <button v-if="userSession" @click="user.logout" class="btn btn-primary">Salir</button>
      <router-link to="/" v-if="userSession == null" class="btn btn-primary">Contactar</router-link>
    </div>
  </div>
</template>
