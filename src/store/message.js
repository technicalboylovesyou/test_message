import {formatDate, formatTextMessage} from '@/utils/formatters';

const data = [
    {
        id: 1,
        subject: 'Простой запрос',
        created: '2019-08-01 23:59',
        parts: [
            {
                id: 1,
                author: 'vasya',
                me: false,
                text: 'Привет, как дела?',
                created: '2019-08-01 23:59',
            },
            {
                id: 2,
                author: 'petya',
                me: true,
                created: '2019-08-02 01:20',
                text: 'Привет, все хорошо, спасибо!',
            },
            {
                id: 3,
                author: 'petya',
                me: true,
                created: '2019-08-02 05:20',
                text: 'А у тебя?',
            },
        ],
    },
    {
        id: 2,
        subject: 'Вопрос по домену',
        created: '2016-03-02 14:19',
        parts: [
            {
                id: 1,
                author: 'petr',
                me: true,
                created: '2019-08-06 12:20',
                text: 'Здравствуйте, тут есть кто-нибудь?',
            },
            {
                id: 2,
                author: 'vasiliy',
                me: false,
                created: '2019-08-06 12:34',
                text: 'Да, я вас слушаю!',
            },
            {
                id: 3,
                author: 'petr',
                me: true,
                created: '2019-08-06 12:38',
                text: 'Помогите мне настроить домен!',
            },
        ],
    },
];

export default {
    actions: {
        getDialog(ctx, idDialog) {
            const dialog = data.find(element => element.id === idDialog);
            ctx.commit('updateCurrentDialog', {dialog: dialog, id: idDialog})
        },
        getMessages(ctx) {
            ctx.commit('updateMessages', data)
        },
        getCountDialog(ctx) {
            ctx.commit('updateCountDialogs', data.length)
        }
    },
    mutations: {
        updateCurrentDialog(state, dialog) {
            state.currentDialog = dialog.dialog
        },
        updateMessages(state, messages) {
            state.messages = messages
        },
        updateCountDialogs(state, count) {
            state.countDialogs = count
        },
        sendMessage(state, newMessage) {
            newMessage.id = state.currentDialog.length + 1
            newMessage.author = state.me
            let now =  new Date();
            newMessage.created = ((now.getMonth() > 8) ? (now.getMonth() + 1) : ('0' + (now.getMonth() + 1))) + '.' + ((now.getDate() > 9) ? now.getDate() : ('0' + now.getDate())) + '.' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes()
            state.currentDialog.parts.push(newMessage)
        }
    },
    state: {
        currentDialog: [],
        messages: [],
        countDialogs: 0,
        me: 'petr',
    },
    getters: {
        getDialogList(state) {
            const dialogList = state.messages.map(function(element) {
                return {id: element.id, subject: element.subject, created: formatDate(element.created), text: formatTextMessage(element.parts?.[0].text ?? ''),}
            });
            return dialogList
        },
        getDialogMessages(state) {
            return state.currentDialog.parts
        },
        getCountDialogs(state) {
            return state.countDialogs
        }
    }
}