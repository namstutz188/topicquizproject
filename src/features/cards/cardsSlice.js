import {createSlice} from '@reduxjs/toolkit';

//Manages cards slice in state

//Initial State

const initialState = {
    cards: {

    }
};

//Case Reducers

//addCard

const addCardFunc = (state,action) => {
    const id = action.payload.id;
    const front = action.payload.front;
    const back = action.payload.back;

    const newCard = {
        id,front,back
    };
    return {
        cards: {
            ...state.cards, [id]: newCard
        }
    };
};

//Create Slice

const cardsSlice = createSlice({
    name: 'cards',
    reducers: {
        addCard: addCardFunc
    },
    initialState
});

//Export selector - selects cards property in initState

export const selectCards = state => state.cards.cards;

//Export action creators and reducer generated from createSlice

export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;