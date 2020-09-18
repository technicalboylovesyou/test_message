<template>
    <div>
        <el-col :span="8" style="padding-left: 0; padding-right: 0;">
            <dialog-list></dialog-list>
        </el-col>
        <el-col :span="16" style="padding-left: 0; padding-right: 0;">
            <router-view />
        </el-col>
    </div>
</template>

<script>
import dialogList from '@/components/dialogList';
export default {
    name: 'message',
    components: {
        dialogList
    },
};
</script>

<style scoped>

</style>