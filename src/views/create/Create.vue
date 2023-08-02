<script setup lang="ts">
import { computed, onMounted } from "vue";
import BaseInput from "../../components/formulario/BaseInput.vue";
import { almacenForm } from "../../stores/form";

// componentes
import Auth from "@/components/auth/Auth.vue";
import PasswordReset from "@/components/auth/PasswordReset.vue";

import { getParameterByName } from "@/lib/helpers";
import { userSession } from "@/lib/useAuth";

const showPasswordReset = computed(() => {
    const requestType = getParameterByName("type", location.href);
    return requestType === "recovery";
});

const form = almacenForm();

onMounted(() => {
    form.obtenerDatos();
});
</script>

<template>
    <div v-if="showPasswordReset" class="w-full h-full flex flex-col justify-center items-center p-4">
        <PasswordReset />
    </div>
    <div v-else-if="userSession === null" class="w-full h-full flex flex-col justify-center items-center p-4">
        <Auth />
    </div>
    <div v-else
        class="w-full h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start p-4">
        <form>
            <div>
                <img v-if="form.src" :src="form.src" class="avatar rounded mb-2"
                    :style="{ height: form.size, width: form.size }" />
                <div v-else class="avatar bg-gray-500 bg-opacity-100 rounded-lg"
                    :style="{ height: form.size, width: form.size }">
                </div>
                <div :style="{ width: form.size }">
                    <label v-if="form.editar === false" class="flex content-center btn btn-wide btn-accent" for="single">
                        {{ form.uploading ? "Guardando ..." : "Guardar" }}
                        <input style="visibility: hidden; position: absolute" type="file" id="single" accept="image/*"
                            @change="form.subirArchivoAgregar" :disabled="form.uploading" />
                    </label>
                    <label v-else="form.editar === true" class="flex content-center btn btn-accent" for="single">
                        {{ form.uploading ? "Actualizando ..." : "Actualizar" }}
                        <input style="visibility: hidden; position: absolute" type="file" id="single" accept="image/*"
                            @change="form.subirArchivoActualizar" :disabled="form.uploading" />
                    </label>
                </div>
            </div>
            <BaseInput v-model="form.producto.title" type="text" label="Producto" />
            <BaseInput v-model="form.producto.price" type="text" label="Precio" />
            <BaseInput v-model="form.producto.description" type="text" label="Descripción" />

        </form>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in form.productos" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click.prevent="
                            form.obtenerDatoId(item.id);
                        form.editar = !form.editar;
                        " class="btn btn-primary">
                            Editar
                        </button>
                    </td>

                    <td>
                        <button @click="form.eliminarDato(item.id)" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
