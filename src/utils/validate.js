export function nameRule(rule, value, callback) {
    const reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (!value) {
        return callback(new Error('Please input the age'))
    } else if (!reg.test(value)) {
        callback(new Error('please enter name between 4-10 charators.'))
    } else {
        callback()
    }
}

export function passwordRule(rule, value, callback) {
    const reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (!value) {
        return callback(new Error('Please input the password'))
    } else if (!reg.test(value)) {
        callback(new Error('please enter name between 4-10 charators.'))
    } else {
        callback()
    }
}