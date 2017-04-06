import { ValidationPropertyModel } from './../../../models/validator-property.model';
import { KeyValueModel } from './../../../models/key-value.model';
import { Validator } from './../../../../../../validator/validator';
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CustomSelectComponent),
	multi: true
};

@Component({
	moduleId: module.id,
	selector: 'custom-select',
	templateUrl: 'select.component.html',
	styleUrls: ['select.component.css'],
	providers: [CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class CustomSelectComponent implements ControlValueAccessor {
	@Input() label: string;
	@Input() placeholder: string;
	@Input() values: KeyValueModel[];
	@Input() validator: ValidationPropertyModel;

	//The internal data model
	private innerValue: any = '';

	//Placeholders for the callbacks which are later providesd
	//by the Control Value Accessor
	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: any) => void = noop;


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
