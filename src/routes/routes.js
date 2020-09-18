import message from '@/pages/message';
import messageArea from '@/components/messageArea';

const routes = [
    {
        path: '/message',
        component: message,
        name: 'message',
        meta: {
            title: 'Сообщения',
        },
        children: [
            {
                path: '/message/:idDialog',
                component: messageArea,
                name: 'dialog',
                meta: {
                    title: 'Сообщения',
                }
            },
        ]
    }]

export default routes