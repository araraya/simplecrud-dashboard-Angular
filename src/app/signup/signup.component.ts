import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // bikin form buat nangkep input
  public signUpForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    // init formnya 
    this.signUpForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
    })
  }

  // bikin function signup masukin ke db signUP

  signUp() {
    this.http.post<any>("http://localhost:3000/signUp", this.signUpForm.value)
      .subscribe({
        next: (res) => alert("Sign Up Berhasil"),
        // kalau berhasil masuk ke page login
        complete: () => this.router.navigate(['login']),
        error: (e) => alert("Gagal"),

        // complete: () => console.info('complete')
        // res => {
        // console.log(res);
        // alert("Berhasil ditambahkan")
      })
  }
}
