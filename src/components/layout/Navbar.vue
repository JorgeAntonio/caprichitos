<script lang="ts" setup>
import { userSession } from "@/lib/useAuth";
import { almacenAuth } from "@/stores/user";
const user = almacenAuth();
</script>

<template>
  <div class="navbar bg-secondary-focus md:px-4">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><router-link to="/catalog">Catalogo</router-link></li>
          <li><router-link to="/about">Nosotros</router-link></li>
          <li><router-link to="/">App</router-link></li>
        </ul>
      </div>
      <router-link to="/" class="text-2xl font-semibold">Caprichitos</router-link>
    </div>
    <div class="navbar-end gap-2">
      <ul class="hidden md:flex gap-3">
        <li><router-link to="/catalog" class="hover:underline rounded-md font-semibold px-1">Catalogo</router-link></li>
        <li><router-link to="/" class="hover:underline rounded-md font-semibold px-1">Nosotros</router-link></li>
        <li><router-link to="/" class="hover:underline rounded-md font-semibold px-1">App</router-link></li>
      </ul>
      <router-link to="/create" v-if="userSession" class="hidden md:btn md:btn-neutral md:btn-sm">Dashboard</router-link>
      <button v-if="userSession" @click="user.logout" class="hidden md:btn md:btn-neutral md:btn-sm">Salir</button>
    </div>
  </div>
</template>
