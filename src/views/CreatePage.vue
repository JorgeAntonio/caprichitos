<script setup lang="ts">
import { computed, onMounted } from "vue";
import { almacenForm } from "../stores/form";

// componentes
import Auth from "@/components/auth/Auth.vue";
import PasswordReset from "@/components/auth/PasswordReset.vue";

import { getParameterByName } from "@/lib/helpers";
import { userSession } from "@/lib/useAuth";
import Navbar from "@/components/layout/Navbar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import MainSection from "@/components/layout/MainSection.vue";

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
    <Navbar />
    <MainSection>
        <el-alert title="ATENCION!!!" type="error"
            description="PARA AGREGAR PRODUCTO SIGA LOS SIGUIENTES PASOS EN ESTE ORDEN:   -- 1°.NOMBRE,   --2°.PRECIO,   --3°.DESCRIPCION,   --4°.CATEGORIA,   --5°.GUARDAR PARA SELECCIONAR LA IMAGEN Y SUBIR."
            show-icon :closable="false" />
        <div v-if="showPasswordReset" class="w-full h-full flex flex-col justify-center items-center p-4">
            <PasswordReset />
        </div>
        <div v-else-if="userSession === null" class="w-full h-full flex flex-col justify-center items-center p-4">
            <Auth />
        </div>
        <div v-else
            class="w-full h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start p-4 gap-6">
            <el-form label-position="top" size="large">
                <div>
                    <img v-if="form.src" :src="form.src" class="avatar rounded mb-2"
                        :style="{ height: form.size, width: form.size }" />
                    <div v-else class="avatar bg-gray-500 bg-opacity-100 rounded-lg"
                        :style="{ height: form.size, width: form.size }">
                    </div>
                    <div :style="{ width: form.size }">
                        <label v-if="form.editar === false" class="flex content-center btn btn-wide btn-accent"
                            for="single">
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
                <el-form-item label="Precio" prop="price" class="mt-4">
                    <el-input v-model="form.producto.title" placeholder="Cake" />
                </el-form-item>
                <el-form-item label="Precio" prop="price">
                    <el-input v-model="form.producto.price" placeholder="5.70" />
                </el-form-item>
                <el-form-item label="Descripción" prop="description">
                    <el-input v-model="form.producto.description" autosize type="textarea"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex consequuntur sed amet nemo obcaecati earum doloribus adipisci non reprehenderit." />
                </el-form-item>
                <el-form-item label="Categoría" prop="category">
                    <el-select v-model="form.producto.category" placeholder="Categoria">
                        <el-option label="Tortas" value="1" />
                        <el-option label="Personalizadas" value="2" />
                    </el-select>
                </el-form-item>

            </el-form>
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
    </MainSection>
    <FooterBar />
</template>
