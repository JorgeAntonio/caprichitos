<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules, UploadFile } from 'element-plus'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { almacenForm } from '@/stores/form';

const form = almacenForm();

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
    console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
    console.log(file)
}

/// others

interface RuleForm {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    id: form.producto.id,
    title: form.producto.title,
    price: form.producto.price,
    description: form.producto.description,
    image: form.producto.image,
    category: form.producto.category,
})


const rules = reactive<FormRules<RuleForm>>({
    title: [
        { required: true, message: 'Ingrese el nombre', trigger: 'blur' },
        { min: 3, message: 'Tamaño superior a 3', trigger: 'blur' },
    ],
    price: [
        { required: true, message: 'Ingrese el precio', trigger: 'blur' },
        {
            message: 'Debe ser un número',
            trigger: 'blur',
            validator: (_, value) => {
                if (value === '') {
                    return true
                }
                if (!Number.isNaN(Number(value))) {
                    return true
                }
                return false
            },
        },
    ],
    description: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
    category: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'blur',
        },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            form.subirArchivoAgregar(form.producto)
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>


<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top" label-width="120px"
        class="demo-ruleForm" :size="formSize" status-icon style="width: 350px;">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon>
                <Plus />
            </el-icon>

            <template #file="{ file }">
                <div>
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                    <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                            <el-icon><zoom-in /></el-icon>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                            <el-icon>
                                <Download />
                            </el-icon>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </span>
                    </span>
                </div>
            </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>

        <el-form-item label="Nombre" prop="title">
            <el-input v-model="ruleForm.title" />
        </el-form-item>
        <el-form-item label="Precio" prop="price">
            <el-input v-model="ruleForm.price" />
        </el-form-item>
        <el-form-item label="Descripción" prop="description">
            <el-input v-model="ruleForm.description" type="textarea" />
        </el-form-item>
        <el-form-item label="Categoría" prop="category">
            <el-select v-model="ruleForm.category" placeholder="Activity zone">
                <el-option label="Tortas" value="1" />
                <el-option label="Personalizadas" value="2" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
            </el-button>
        </el-form-item>
    </el-form>
</template>
  
