import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicReducer from '../features/topics/topicsSlice'; //how to import a default export

import quizReducer from '../features/quizzes/quizzesSlice';

import cardReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer
  }
});
