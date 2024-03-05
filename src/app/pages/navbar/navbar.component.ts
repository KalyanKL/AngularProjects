import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user:any=null;
  constructor(public authService:AuthService,private router:Router){}

  ngOnInit(){
    this.authService.getUserProfile().subscribe(
      (auth)=>{
        console.log("Auth state",auth)
        this.user=auth.user
      }
    );
  }

  handleLogOut(){
    this.authService.logout()
    this.router.navigate(["/"])
  }
}
