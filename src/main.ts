import './style.css';
import Phaser from 'phaser';
import { Example } from './Example.ts';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	// width: document.body.offsetWidth,
	// height: document.body.offsetHeight,
	width: 800,
	height: 600,
	parent: 'app',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
		},
	},
	scene: Example,
};

const game = new Phaser.Game(config);
// game.pause();
