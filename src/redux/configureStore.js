import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: Dishes,
			Comments: Comments,
			promotions: Promotions,
			Leadres: Leaders
		})
	);
	return store;
};
