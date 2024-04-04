import { createSlice } from "@reduxjs/toolkit";
//Manages quizzes slice in state

//Initial State

const initialState = {
    quizzes: {

    }
};

//Case Reducers

const addQuizFunc = (state,action) => {
    const id = action.payload.id;
    const name = action.payload.name;
    const topicId = action.payload.topicId;
    const cardIds = action.payload.cardIds;

    const newQuiz = {
        id,name,topicId,cardIds
    };

    return {
        quizzes: {
            ...state.quizzes, [id]: newQuiz
        }
    };
};

//Create Slice

const quizzesSlice = createSlice( {
    name: 'quizzes',
    reducers: {
        addQuiz: addQuizFunc
    },
    initialState
});

//Export selector

export const selectQuizzes = (state) => state.quizzes.quizzes; //state here refers to global state whereas state above refers to slice state

//Export action creators and reducer
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;