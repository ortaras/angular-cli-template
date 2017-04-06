import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ValidationPropertyModel } from './../../../models/validator-property.model';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CustomInputComponent),
	multi: true
};

@Component({
	moduleId: module.id,
	selector: 'custom-input',
	templateUrl: 'input.component.html',
	styleUrls: ['input.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomInputComponent implements ControlValueAccessor {
	@Input() type: string;
	@Input() label: string;
	@Input() validator: ValidationPropertyModel;

	name: string;

	constructor() {
		this.type = 'text';
		this.name = Math.random().toString();
	}

	//The internal data model
	private innerValue: any = '';

	//Placeholders for the callbacks which are later providesd
	//by the Control Value Accessor
	private onTouchedCallback: () => void = Function;
	private onChangeCallback: (_: any) => void = Function;

	//get accessor
	get value(): any {
		return this.innerValue;
	};

	//set accessor including call the onchange callback
	set value(v: any) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChangeCallback(v);
		}
	}

	//Set touched on blur
	onBlur() {
		this.onTouchedCallback();
	}

	//From ControlValueAccessor interface
	writeValue(value: any) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	//From ControlValueAccessor interface
	registerOnChange(fn: any) {
		this.onChangeCallback = fn;
	}

	//From ControlValueAccessor interface
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}
}
