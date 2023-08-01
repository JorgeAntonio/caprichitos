<script lang="ts" setup>
import { almacenForm } from "../../stores/form";
import { onMounted } from "vue";

const form = almacenForm();

onMounted(() => {
  form.obtenerDatos();
});
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-medium">Todos los productos</h2>
      <router-link to="/create-product" class="btn btn-primary">Crear Nuevo</router-link>
    </div>

    <div class="divider"></div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div class="shadow-md card bg-base-200">
        <div class="card-body">
          <p>Total de productos vendidos en el mes</p>
          <h2 class="card-title">14.350 unds</h2>
        </div>
      </div>
      <div class="shadow-md card bg-base-200">
        <div class="card-body">
          <p>Devoluciones al mes</p>
          <h2 class="card-title">138 und</h2>
        </div>
      </div>
      <div class="shadow-md card bg-base-200">
        <div class="card-body">
          <p>Productos vencidos al mes</p>
          <h2 class="card-title">726 und</h2>
        </div>
      </div>
      <div class="shadow-md card bg-base-200">
        <div class="card-body">
          <p>Productos con bajo stock</p>
          <h2 class="card-title">3 productos</h2>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- body -->

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(item, index) in form.productos" :key="index">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="item.image" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ item.title }}</div>
                  <div class="text-sm opacity-50">id: {{ item.id }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ item.description }}
              <br />
              <span class="badge badge-ghost badge-sm">-</span>
              <!-- <span v-else class="badge badge-ghost badge-sm">{{
                item.provider
              }}</span> -->
            </td>
            <td>s/. {{ item.price }}</td>
            <th>
              <button class="btn btn-ghost btn-xs">detalles</button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
