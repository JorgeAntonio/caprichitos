<script lang="ts" setup>
import MainSection from "../components/layout/MainSection.vue";
</script>

<template>
    <MainSection>
        <div id="contactar" class="card border py-16 bg-secondary">
            <div class="card-body grid grid-cols-1 md:grid-cols-2 items-center">
                <div class="hidden md:flex justify-center items-center">
                    <img src="../assets/wall3-removebg.png" class="" alt="">
                </div>
                <div class="flex flex-col justify-center items-center gap-4">
                    <h1 class="text-2xl font-semibold text-center max-w-sm">Obten 20 % de descuento en tu primera orden
                    </h1>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Nombre</span>
                                </label>
                                <input type="text" placeholder="" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Telefono</span>
                                </label>
                                <input type="text" placeholder="" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </MainSection>
</template>
