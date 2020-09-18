<template>
    <el-col class="dialog-list" style="padding-left: 0; padding-right: 0">
        <div class="component-title">Сообщения <span style="color: dimgray; font-weight: bold;">{{getCountDialogs}}</span></div>
        <el-divider></el-divider>
        <div style="height: calc(100% - 45px);">
            <el-menu
                :default-active="active"
                class="el-menu-vertical"
                background-color="lightgray"
            >
                <router-link v-for="(dialog, idx) in getDialogList" :key="idx" :to="{ name: 'dialog', params: { idDialog: dialog.id }}">
                    <el-menu-item class="menu-item" :index="dialog.id">
                        <span class="title">{{ dialog.subject }}</span><span class="date">{{ dialog.created }}</span>
                        <div class="text">{{ dialog.text }}</div>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </div>
    </el-col>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'dialogList',
    computed: mapGetters(['getDialogList', 'getCountDialogs']),
    methods: mapActions(['getMessages', 'getCountDialog']),
    mounted() {
        this.getMessages();
        this.getCountDialog();
        this.active = parseInt(this.$route.params.idDialog);
    },
    data() {
        return {
            active: 0,
        }
    }
};
</script>

<style scoped>
.dialog-list {
    position: relative;
    background-color: lightgray;
    height: 100vh;
}
.menu-item {
    border-bottom: solid 1px #DCDFE6;
    height: 100px;
}
.title {
    float: left;
    font-weight: bold;
    width: 50%;
    padding-bottom: 10px;
    padding-top: 25px;
}
.text{
    width: 90%;
    float: left;
    word-wrap: break-word;
    color: gray;
}
.date {
    float: right;
    color: lightslategray;
    font-size: 10px;
    width: 50%;
    text-align: right;
    padding-top: 25px;
}
.component-title {
    margin: 15px;
    font-weight: normal;
    color: lightslategray;
    font-size: 12px;
}
.el-menu-item {
    line-height: normal;
    white-space: normal;
}
.el-menu {
    border-right: none;
    overflow-y: auto;
    height: 100%;
}
.el-divider--horizontal {
    margin: 0;
}
.el-menu-item.is-active {
    color: #303133;
    border-left: solid 5px #409EFF;
}
</style>