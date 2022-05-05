import React, {useEffect, useRef, useState} from 'react';

import {TextureLoader} from 'three';

import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {animated, config, useSpring} from '@react-spring/three';
import {useDispatch, useSelector} from 'react-redux';
import SkillsThree from './SkillsThree';
import {setToLoaded} from '../redux/loadedSlice';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import {useGLTF} from '@react-three/drei';
import {useControl} from 'react-three-gui';


export default function Mac(props) {
	const [loaded, setLoaded] = useState(false);
	const myMesh = useRef();
	const macOrientationNumber = useSelector((state) => state.macOrientation.value);
	const projectIndex = useSelector((state) => state.projectIndex.value);
	const dispatch = useDispatch();



	const gltf = useLoader(GLTFLoader, './macbook/jar.glb',
			loader => {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/draco-gltf/');
		loader.setDRACOLoader(dracoLoader);
	});







	useEffect(() => {
		if (gltf) {
			dispatch(setToLoaded());
		}
	});

	const springArg = {
		config: config.slow,
	};

	switch (macOrientationNumber) {
		case 0:
			springArg.position = [0, 0, 1];
			springArg.rotation = [Math.PI/2 , 0  , 0 ];
			break;
		case 1:
			springArg.position = [0, -0.1 ,1.3];
			springArg.rotation = [0, 0.1 , 0];
			break;
		case 2:

			springArg.position = [0, -0.1 ,1.5];
			springArg.rotation = [0, - Math.PI / 1.68, 0];
			break;

	}

	const {rotation, position} = useSpring(springArg);
	const rotationX = useControl('Rotation X', { type: 'number' });

	return (



		// <animated.group
		// 	// visible={macOrientationNumber != 0}
		// 	ref={myMesh}
		// 	rotation={rotationX}
		// 	position={position}
		// >
			<animated.primitive
				ref={myMesh}
				rotation={rotation}
				position={position}
				object={gltf.scene}
				scale={[4, 4, 4]}
			/>
		// </animated.group>
	);

}


