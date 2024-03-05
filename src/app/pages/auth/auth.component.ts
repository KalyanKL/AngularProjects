import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister=true;
  constructor(public authService:AuthService,private router:Router){}

 registerationForm=new FormGroup({
  fullName:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),

 })
 LoginForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required]),

 })
 handleRegister(){
  const { fullName, email, password } = this.registerationForm.value;
  if (!fullName || !email || !password) {
    alert("Please fill in all the fields.");
    return;
  }
  console.log("register",this.registerationForm.value)
  this.authService.signup(this.registerationForm.value).subscribe({
    next:(signup)=>{
      localStorage.setItem("jwt",signup.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("SignUp Successful",signup);
      alert("SignupSuccessful")
    },
    error: (error) => {
      console.error("Register Error:", error);
      if (error.error && error.error.message) {
        alert(error.error.message); // Display the error message returned from the server
      } else {
        alert("An error occurred during registration.");
      }
    }
  })
 }
 handleLogin(){
  this.authService.login(this.LoginForm.value).subscribe({
    next:(login)=>{
      localStorage.setItem("jwt",login.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("Login Successful",login);
      alert("Login Successful")
      this.router.navigateByUrl('/');
    },
    error: (error) => {
            console.error("Login Error:", error);
            if (error.error && error.error.message) {
              alert(error.error.message);
            } else {
              alert("Login Credentials do not match.");
            }
          }
    })
  }
 
//  handleLogin(){
//   console.log("login",this.LoginForm.value)
//   this.authService.login(this.LoginForm.value).subscribe({
//     next:(response)=>{
//       localStorage.setItem("jwt",response.jwt);
//       this.authService.getUserProfile().subscribe();
//       console.log("Login Successful",response);
//       alert("Login Successful"); // Display an alert for successful login
//       this.router.navigateByUrl('/'); // Navigate to the homepage
//     },
//     error: (error) => {
//       console.error("Login Error:", error);
//       if (error.error && error.error.message) {
//         alert(error.error.message); // Display the error message returned from the server
//       } else {
//         alert("Login Credentials do not match.");
//       }
//     }
//   })
// }
 togglePanel(){
  this.isRegister=!this.isRegister
 }
}
