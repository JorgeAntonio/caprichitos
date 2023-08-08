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
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/products">Productos</router-link></li>
          <li><router-link to="/category">Categorias</router-link></li>
          <li><router-link to="/category/2">Tortas personalizadas</router-link></li>
          <li><router-link to="/sorpresas">Regalos sorpresas</router-link></li>
          <li><router-link to="/flyers">Flyers</router-link></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><router-link to="/contactar">Contactar</router-link></li>
          <li><router-link to="/">App</router-link></li>
        </ul>
      </div>
      <router-link to="/" class="text-base md:text-2xl font-semibold">Dulce Capricho</router-link>
    </div>
    <div class="navbar-center">
      <ul class="hidden md:flex items-center gap-4">
        <li><router-link to="/" class="hover:underline rounded-md font-semibold">Inicio</router-link></li>
        <li><router-link to="/products" class="hover:underline rounded-md font-semibold">Productos</router-link></li>
        <li><router-link to="/category" class="hover:underline rounded-md font-semibold">Categorias</router-link>
        </li>
        <li><router-link to="/category/2" class="hover:underline rounded-md font-semibold">Tortas
            personalizadas</router-link></li>
        <li><router-link to="/sorpresas" class="hover:underline inline-block rounded-md font-semibold">Regalos
            sorpresas</router-link></li>
        <li><router-link to="/flyers" class="hover:underline rounded-md font-semibold">Flyers</router-link></li>
        <li><router-link to="/nosotros" class="hover:underline rounded-md font-semibold">Nosotros</router-link></li>
        <li><router-link to="/cesta" class="hover:underline rounded-md font-semibold">Cesta</router-link></li>
        <li><router-link to="/" class="hover:underline rounded-md font-semibold">App</router-link></li>
        <li><router-link to="/contactar" v-if="userSession == null"
            class="hover:underline rounded-md font-semibold">Contactar</router-link>
        </li>
        <div v-if="userSession" class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="">
            </div>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link to="/create" v-if="userSession" class="justify-between">
                Dashboard
                <span class="badge">New</span>
              </router-link>
            </li>
            <li><a v-if="userSession" @click="user.logout">Logout</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>
