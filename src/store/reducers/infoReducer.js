import * as infoActions from  '../actions/infoActions'


const initState = {
    list: [
        {id:1, FirstName:'Gor', LastName: 'Mirzoyan', gender: 'male', age: '21',  Email:'gor_mirzoyan@mail.ru', phoneNumber:'+374 95 203846'},
        {id:2, FirstName:'Igor', LastName: 'Vanecyan', gender: 'male',  age: '28', Email:'vanecyan@mail.com', phoneNumber:'+374 93 88 3413'},
        {id:3, FirstName:'Anna', LastName: 'Asdoyan', gender: 'female', age: '2', Email:'add_duduk@mail.ru', phoneNumber:'+374 77 656899'},
        {id:4, FirstName:'Zizz', LastName: 'Zazyan', gender: 'female', age: '1',Email:'Zazyan@gmail.com', phoneNumber:'+374 44 463846'}
    ]
};

const updateList = ( data, index) => {
        return [
                ...data.slice(0,index),
                ...data.slice(index+1)
        ]
};

export const infoReducer = (state = initState, action)=> {
    switch (action.type) {
        case infoActions.CREATE_INFO:
            return{
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case infoActions.DELETE_INFO:
            const id = state.list.findIndex( (obj) => obj === action.payload);
                return {
                ...state,
                list: updateList(state.list, id)
            }

        default:
            return state
    }
}
