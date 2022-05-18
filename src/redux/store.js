import { configureStore } from '@reduxjs/toolkit'
import macOrientationReducer from './macOrientationSlice';
import projIndexReducer from './projIndexSlice';
import loadedReducer from './loadedSlice';
import guiDataReducer from './guiDataSlice';





export default configureStore({
	reducer: {
		macOrientation: macOrientationReducer,
		projectIndex: projIndexReducer,
		loaded: loadedReducer,
		guiData: guiDataReducer
	},
});


