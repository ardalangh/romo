import React, {useState} from 'react';
import DatGui, {DatFolder, DatNumber, DatPresets, DatString} from 'react-dat-gui';
import {useDispatch} from 'react-redux';
import {setToGuiData} from '../redux/guiDataSlice';


function Gui(props) {
	const dispatch = useDispatch();

	const initialDatState = {
		dirLightInt: 1,
		dirLightPosX: 0

	};

	const [state, setState] = useState({
		data: initialDatState
	});

	const handleUpdate = newData => {
		setState(prevState => ({
			data: { ...prevState.data, ...newData }
		}));
		dispatch(setToGuiData(state.data));
	}

	return (
		<DatGui
			style={{
				color: 'white',
			}}
			data={state.data}
			onUpdate={handleUpdate}
		>
			<DatNumber
				path="dirLightInt"
				label="intensity of direction light 1 "
				min={0}
				max={3}
				step={0.01}
			/>
			<DatNumber
				path="dirLightPosX"
				label="dirLightPosX"
				min={-5}
				max={5}
				step={0.05}
			/>

		</DatGui>
	);
}

export default Gui;