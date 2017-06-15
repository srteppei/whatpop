import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnChanges, OnDestroy {

  @Input() userId: number;

  user: User;
  private _userSubscription: Subscription;

  constructor(private _userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId'] && changes['userId']['currentValue']) {
      this._userSubscription = this._userService
        .getUser(this.userId)
        .subscribe(data => this.user = data);
    }
  }

  ngOnDestroy(): void {
    if (this._userSubscription) {
      this._userSubscription.unsubscribe();
    }
  }

  getImageSrc(): string {
    return this.user ? this.user.avatar : '';
  }

}
