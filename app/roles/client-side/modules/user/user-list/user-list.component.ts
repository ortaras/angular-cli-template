import { Component, OnInit } from '@angular/core';
import { UserHttpService } from "../user-shared/user-http.service";
import { UserModel } from "../../../shared/models/user.model";

@Component({
	moduleId: module.id,
	templateUrl: 'user-list.component.html',
	styleUrls: ['user-list.component.css']
})

export class UserListComponent implements OnInit {
	public users: UserModel[];

	constructor(private _httpService: UserHttpService) { }

	ngOnInit() {
		this._httpService.getList()
			.subscribe(users => this.users = UserModel.fromJSONArray(JSON.parse(users)));
	}
}
