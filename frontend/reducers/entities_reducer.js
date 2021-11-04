import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import articlesReducer from './articles_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    articles: articlesReducer
})

export default entitiesReducer;