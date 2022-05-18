
import { createSlice } from '@reduxjs/toolkit'

export const guiDataSlice = createSlice({
	name: 'guiDataSlice',
	initialState: {
			value: {
				"dirLightInt": 1,
				"dirLightPosX": 0,
			}
	},
	reducers: {
		setToGuiData(state, action) {
			state.value = action.payload;
		},
	}
})

// Action creators are generated for each case reducer function
export const {setToGuiData } = guiDataSlice.actions

export default guiDataSlice.reducer

