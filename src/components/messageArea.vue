<template>
    <div class="message-area">
        <div style="height: calc(100% - 94px); overflow-y: auto; flex-direction: column;
  justify-content: flex-end;
  flex-wrap: nowrap;">
            <ul class="all-messages">
                <li v-for="(message, idx) in getDialogMessages" :key="idx" class="message-block">
                    <div v-if="message.me">
                        <div class="message-line">
                            <div class="message-box-text-me">{{message.text}}</div>
                        </div>
                        <div class="info-line">
                            <div class="message-info-me"><span class="name">{{message.author}}</span> <span class="date">{{message.created}}</span></div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="message-line">
                            <div class="message-box-text">{{message.text}}</div>
                        </div>
                        <div class="info-line">
                            <div class="message-info"><span class="name">{{message.author}}</span> <span class="date">{{message.created}}</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="send-block">
            <el-input
                type="textarea"
                :rows="4"
                placeholder="Введите текст..."
                resize="none"
                v-model="newMessage">
            </el-input>
            <el-button @click="send" type="primary" icon="el-icon-chat-dot-round" ></el-button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    name: 'messageArea',
    computed: mapGetters(['getDialogMessages']),
    methods: {
        ...mapActions(['getDialog']),
        ...mapMutations(['sendMessage']),
        send() {
            const newMessage = {
                id: 3,
                author: 'petr',
                me: true,
                created: '2019-08-06 12:38',
                text: this.newMessage,
            };
            this.sendMessage(newMessage);
            this.newMessage = '';
        }
    },
    mounted() {
        const idDialog = parseInt(this.$route.params.idDialog);
        this.getDialog(idDialog);
    },
    watch: {
        $route() {
            const idDialog = this.$route.params.idDialog;
            this.getDialog(idDialog);
        }
    },
    data() {
        return {
            newMessage: '',
        }
    }
};
</script>

<style scoped>
.all-messages {
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 30px;
    padding-left: 0;
}
.message-info-me {
    float: right;
    margin-right: 20px;
}
.name {
    font-size: 14px;
    font-weight: bold;
}
.date {
    font-size: 11px;
    margin-left: 10px;
    color: gray;
}
.info-line {
    margin-top: 5px;
    margin-left: 20px;
}
.message-block {
    width: 100%;
    height: calc(100% - 95px);
}
.message-line {
    display: inline-block;
    width: 100%;
}
.message-box-text {
    display: inline-block;
    max-width: 60%;
    padding: 15px;
    background-color: lightgray;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
}
.message-box-text-me {
    display: inline-block;
    max-width: 60%;
    padding: 15px;
    background-color: darkslategray;
    border-radius: 15px;
    border-bottom-right-radius: 0px;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
}
.message-area {
    height: 100vh;
    position: relative;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
.send-block {
    position: absolute;
    bottom: 0;
    width:100%;
}
.send-block >>> .el-textarea__inner {
    border-radius: 0!important;
    border: none;
    position: relative;
    border-top: solid 1px #DCDFE6;
}
.send-block >>> .el-textarea {
    width: calc(100% - 95px);
    display: inline-flex;
}
.send-block >>> .el-button {
    height: 95px;
    width: 95px;
    font-size: 34px;
    border-radius: 0;
}
</style>