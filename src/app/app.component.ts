import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Food-app';
  user: any = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      (auth) => {
        if (auth.user) {
          this.user = auth.user;
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl('/auth');
        }
      },
      (error) => {
        console.error("Error fetching user profile:", error);
        this.router.navigateByUrl('/auth');
      }
    );
  }
  


}
