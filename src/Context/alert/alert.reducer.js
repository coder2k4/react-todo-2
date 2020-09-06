const intialState = {
    text: '',
    type: '',
    visible: false
}

const handler = {
    SHOW_ALERT : (state, action) => {
        //Возвращаем вместо стейка параметры полей из payload text, type
        return {...action.payload, visible: true}
    },
    HIDE_ALERT : (state, action) => {
        //Восстанавливаем стейт и убираем видимость
        return {...state, visible: false}
    },
    DEFAULT : state => state
}

export const alertReducer = (state = intialState, action) => {
    const handle = handler[action.type] || handler.DEFAULT
    return handle(state, action)
}