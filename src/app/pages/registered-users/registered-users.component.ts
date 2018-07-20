import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserRegistrationService } from '../../services/user-registration/user-registration.service';
import { UserModel } from '../../models/user.model';
import { WebUserModel } from '../../models/web-user.model';

declare var $: any;

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  markedUsers: number[] = [];
  users: UserModel[];
  isSaving: boolean;
  selectedMobileUser: UserModel;
  webUsers: WebUserModel[];
  userToBeLinked: WebUserModel;
  linkingSuccessful: boolean;
  faPlus = faPlus;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
    this.service.getAllUsers().then(
      allUsers => {
        this.users = allUsers;
        console.log(this.users);
      },
      error => console.log(error)
    );

    this.service.getAllWebUsers().then(allWebUsers => {
      this.webUsers = allWebUsers;
      console.log(this.webUsers);
    }, error => console.log(error));
  }

  markUnmarkUser(index: number) {
    console.log(index, 'was changed');
    const position = this.markedUsers.indexOf(index);
    if (position >= 0) {
      // index is present, remove
      this.markedUsers.splice(position, 1);
    } else {
      // index not present, push it
      this.markedUsers.push(index);
    }
    console.log(this.markedUsers);
  }

  saveChanges() {
    this.isSaving = true;
    // Check if the list is empty
    if (this.markedUsers.length === 0) {
      console.log('There are no changes to save');
      this.isSaving = false;
    } else {
      const changedUsers = this.users.filter(user => {
        return this.markedUsers.indexOf(user.id) >= 0;
      });
      this.service.saveModifiedUsers(changedUsers).then(response => {
        console.log(response);
        this.isSaving = false;
      });
    }
  }

  linkWebUser(user: UserModel) {
    this.selectedMobileUser = user;
    // change css to show modal

    if ((<HTMLInputElement>document.getElementsByClassName(`isWebUser-${user.id}`)[0]).checked) {
      $('#exampleModal').modal('show');
      $('#exampleModal').on('hide.bs.modal', (e) => {
        (<HTMLInputElement>document.getElementsByClassName(`isWebUser-${user.id}`)[0]).checked = false;
      });
    } else {
      console.log('Dont show');
    }
  }

  linkUser() {
    this.service.linkMobileAndWebUser(this.selectedMobileUser, this.userToBeLinked).then(response => {
      try {
        const serviceData = JSON.parse(response);
        this.users = serviceData['muser'];
        this.webUsers = serviceData['wuser'];
      } catch {
        alert('There was an issue while linking the user!');
        console.log(response);
      }

      $('#exampleModal').modal('hide');
    });
  }

  selectWebUser(index: number) {
    this.userToBeLinked = this.webUsers.find((user) => user.id === index);
  }

}
