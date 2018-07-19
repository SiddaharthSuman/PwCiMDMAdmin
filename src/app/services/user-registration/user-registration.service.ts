import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { WebUserModel } from '../../models/web-user.model';
@Injectable()
export class UserRegistrationService {

  readonly METHOD_GET_ALL_USERS = 'getAllUsers';
  readonly METHOD_GET_ALL_WEB_USERS = 'getAllWebUsers';
  readonly METHOD_SAVE_USER_CHANGES = 'saveUserChanges';
  readonly METHOD_LINK_USERS = 'linkMobileAndWebUser';

  lookupURL = environment.domain + '/admin/admin.php';
  // lookupURL = 'http://localhost/PwCiMDMServer/admin/admin.php';

  constructor(private http: HttpClient) { }

  getAllUsers(): Promise<UserModel[]> {
    const body = { 'method': this.METHOD_GET_ALL_USERS };
    return this.http.post<UserModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }

  saveModifiedUsers(modifiedUsers: UserModel[]) {
    const body = { 'method': this.METHOD_SAVE_USER_CHANGES, 'data': {'users': modifiedUsers}};
    return this.http.post(this.lookupURL, JSON.stringify(body), {responseType: 'text'}).toPromise();
  }

  getAllWebUsers(): Promise<WebUserModel[]> {
    const body = { 'method': this.METHOD_GET_ALL_WEB_USERS };
    return this.http.post<WebUserModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }

  linkMobileAndWebUser(mUser: UserModel, wUser: WebUserModel) {
    const body = { 'method': this.METHOD_LINK_USERS, 'data': { 'muser': mUser, 'wuser': wUser } };
    return this.http.post(this.lookupURL, JSON.stringify(body), { responseType: 'text' }).toPromise();
  }

}


