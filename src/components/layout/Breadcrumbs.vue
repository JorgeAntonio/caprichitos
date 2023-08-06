<script lang="ts" setup>
interface IBreadcrumbItem {
    text?: string;
    to?: string;
    disabled?: boolean;
}

withDefaults(
    defineProps<{
        items: IBreadcrumbItem[];
    }>(),
    {}
);
</script>

<template>
    <nav class="text-lg  breadcrumbs mx-4">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <div v-if="item.disabled" class="ml-2 text-gray-400 cursor-default">
                    {{ item.text }}
                </div>
                <RouterLink v-else :to="`${item.to}`">
                    {{ item.text }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
