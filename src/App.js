import {Suspense} from 'react';

import './App.css';
import {Box, CircularProgress, createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material';
import Info from './components/Info';
import Bar from './components/Bar';
import Mac from './components/Mac';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {Provider, ReactReduxContext, useDispatch, useSelector} from 'react-redux';
import ProjectInfo from './components/ProjectInfo';
import {PopupWidget} from 'react-calendly';

import {Controls, useControl} from 'react-three-gui';
import {PerspectiveCamera} from '@react-three/drei';
import {useSpring} from '@react-spring/three';
import Gui from './components/Gui';


function App() {
	const macOrientationNumber = useSelector((state) => state.macOrientation.value);
	const loaded = useSelector((state) => state.loaded.value);
	const dispatch = useDispatch();


	const guiData = useSelector((state) => state.guiData.value);












	let theme = createTheme({
		typography: {

			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			fontSize: 12,
		},
	});
	theme = responsiveFontSizes(theme);
	theme.typography.h4 = theme.typography.h3 = {
		fontSize: '1rem',
		'@media (min-width:900px)': {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '3rem',
		},
	};

	theme.typography.h6 = {
		fontSize: '0.8rem',
		'@media (min-width:900px)': {
			fontSize: '0.8rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1rem',
		},
	};

	return (




		<main>

			<Gui/>

			<ThemeProvider theme={theme}>
				<Bar/>

				{/*<Box*/}
				{/*	sx={{*/}
				{/*		textAlign: 'center',*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{!loaded ? <CircularProgress sx={{*/}
				{/*		backgroundColor: 'none',*/}
				{/*		color: 'white',*/}
				{/*	}}/> : null}*/}
				{/*</Box>*/}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
					}}
				>
					{/*<ProjectInfo macOrientation={macOrientationNumber}/>*/}
					<ReactReduxContext.Consumer>
						{({store}) => (
							<Canvas
								pixelRatio={3.0}
								camera={{position: [0, 0, 2]}}
							>
								<Provider store={store}>
									<color attach="background" args={['white']}/>
									{/*<Controls.Provider>*/}
									{/*	<Controls.Canvas>*/}
											<Suspense fallback={null}>
												<Mac/>
											</Suspense>
									{/*	</Controls.Canvas>*/}
									{/*	<Controls/>*/}
									{/*</Controls.Provider>*/}
									<directionalLight color={0xfdfbd3} intensity={guiData.dirLightInt} position={[guiData.dirLightPosX, 0.5, 1]}/>
									{/*<directionalLight color={0xfdfbd3} intensity={0.5} position={[1, 0.5, 1]}/>*/}
								</Provider>
							</Canvas>)}
					</ReactReduxContext.Consumer>
					{/*<Info macOrientation={macOrientationNumber}/>*/}
				</Box>
			</ThemeProvider>
		</main>
	);
}

export default App;
