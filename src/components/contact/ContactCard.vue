<script lang="ts" setup>

</script>

<template>
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
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Mensaje</span>
                </label>
                <textarea class="textarea textarea-bordered" placeholder=""></textarea>
            </div>
            <div class="form-control mt-6">
                <button class="btn btn-primary">Enviar</button>
            </div>
        </div>
    </div>
</template>
