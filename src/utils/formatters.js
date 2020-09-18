export function formatDate(value) {
    const month = {
        '01': 'ЯНВАРЯ', '02': 'ФЕВРАЛЯ', '03': 'МАРТА', '04': 'АПРЕЛЯ',
        '05': 'МАЯ', '06': 'ИЮНЯ', '07': 'ИЮЛЯ', '08': 'АВГУСТА',
        '09': 'СЕНТЯБРЯ', '10': 'ОКТЯБРЯ', '11': 'НОЯБРЯ', '12': 'ДЕКАБРЯ',
    };
    const partDate = value.substr(0, 10).split('-');
    return partDate[2] + ' ' + month[partDate[1]] + ' ' + partDate[0];
}

export function formatTextMessage(value) {
    if (value.length > 95) {
        return value.substr(0, 95) + '...'
    } else {
        return value
    }
}