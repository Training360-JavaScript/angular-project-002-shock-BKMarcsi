import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  phrase: string = '';
  key: string = 'name';
  userList: User[];
  currentUser: User;


  constructor(private userService: UserService) {
    this.userList = this.userService.list;
    this.currentUser = new User();
  }


  selectUser(currentUser: User){
    this.currentUser = currentUser;
  }

  updateUser(currentUser: User){
    this.userService.updateUser(currentUser);
  }

  deleteUser(currentUser: User){
    this.userService.removeUser(currentUser);
  }

  onChangePhrase(event: Event) :void{
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
