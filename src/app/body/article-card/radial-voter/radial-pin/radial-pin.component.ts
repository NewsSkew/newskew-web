import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../../../models/Color';

@Component({
	selector: 'app-radial-pin',
	templateUrl: './radial-pin.component.html',
	styleUrls: ['./radial-pin.component.css']
})
export class RadialPinComponent implements OnInit {

	@Input() radians: number;

	@Input() size: number;

	top: string;
	left: string;
	color: Color;

	constructor() { }

	ngOnInit() {
		this.setStyles();
	}

	setStyles() {
		this.top = Math.sin(this.radians) * (this.size / 2) + 'px';
		this.left = Math.cos(this.radians) * (this.size / 2) + 'px';

		let red = Math.cos(this.radians) * (255 / 2) + (255 / 2);
		let blue = 255 - red;

		this.color = new Color(red, 0, blue, 100);
	}

}
