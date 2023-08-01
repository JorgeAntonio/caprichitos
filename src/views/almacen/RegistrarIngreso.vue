<script setup lang="ts">
import BaseInput from "@/components/formulario/BaseInput.vue";
import { ref, reactive } from "vue";

interface Producto {
  titulo: string;
  cantidad: string;
}

interface Factura {
  numeroFactura: string;
  rucProveedor: string;
  fechaIngreso: string;
  productos: Producto[];
}

const facturas = reactive<Factura[]>([]); // Array para almacenar las facturas
const numeroFactura = ref("");
const rucProveedor = ref("");
const fechaIngreso = ref("");
const productos = reactive<Producto[]>([{ titulo: "", cantidad: "" }]);

const guardarFactura = () => {
  // Aquí podrías agregar la lógica para guardar la factura en la base de datos simulada
  const nuevaFactura: Factura = {
    numeroFactura: numeroFactura.value,
    rucProveedor: rucProveedor.value,
    fechaIngreso: fechaIngreso.value,
    productos: [...productos], // Hacemos una copia del array de productos para evitar que se modifique por referencia
  };
  facturas.push(nuevaFactura);
  console.log("Facturas:", facturas);
  limpiarFormulario();
};

const agregarProducto = () => {
  productos.push({ titulo: "", cantidad: "" });
};

const limpiarFormulario = () => {
  numeroFactura.value = "";
  rucProveedor.value = "";
  fechaIngreso.value = "";
  productos.splice(0, productos.length, { titulo: "", cantidad: "" });
};
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-start justify-between">
      <h1 class="text-xl font-medium">Ingreso de Facturas</h1>
      <form>
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <BaseInput label="RUC del Proveedor:" v-model="rucProveedor" />
          <BaseInput label="Número de Factura:" v-model="numeroFactura" />
          <div class="flex flex-col justify-center items-start">
            <label class="label" for="fechaIngreso">Fecha de Ingreso:</label>
            <input
              type="date"
              v-model="fechaIngreso"
              class="input input-bordered input-accent w-full max-w-md"
              required
            />
          </div>
          <div class="form-control mt-6">
            <button @click="guardarFactura" class="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>

        <div
          v-for="(producto, index) in productos"
          :key="index"
          @event="agregarProducto"
        >
          <div class="flex">
            <BaseInput :label="`Item ${index + 1}`" v-model="producto.titulo" />

            <BaseInput
              :label="`Cantidad ${index + 1}`"
              v-model="producto.cantidad"
            />
          </div>
        </div>

        <button class="btn btn-primary" @click="agregarProducto">
          Agregar
        </button>
      </form>
    </div>
  </div>
</template>
