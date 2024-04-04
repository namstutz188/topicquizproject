import {createSlice} from '@reduxjs/toolkit';

//Manages topics slice in state

//Initial State

const initialState = {
    topics: {
       
    }
};

//Case Reducers

//addTopic - expects payload as an object with id,name, and icon

const addTopicFunc = (state,action) => {
    const id = action.payload.id;
    const name = action.payload.name;
    const icon = action.payload.icon

    const newTopic = {
        id, name, icon,
        quizIds: []
    };

    return {
        topics: {
            ...state.topics, [id] : newTopic
        }
    };

};

//addQuizToArray

const addQuizToArrayFunc = (state,action) => {
    const topicId = action.payload.topicId;
    const quizId = action.payload.id;

    return {
        topics: {
            ...state.topics, [topicId]: {
                ...state.topics[topicId], quizIds: [...state.topics[topicId].quizIds,quizId]
            }
        }
    };
};

//Create Slice

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: addTopicFunc,
        addQuizToArray: addQuizToArrayFunc
    }
});

//Export selector - selects topics property in initState

export const selectTopics = (state) => state.topics.topics;

//Export action creators and reducer generated from createSlice

export const {addTopic,addQuizToArray} = topicsSlice.actions;
export default topicsSlice.reducer;
