import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // bikin form buat nangkep inputan login
  public loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }


  // bikin function login 

  login() {
    this.http.get<any>("http://localhost:3000/signUp")
      .subscribe({
        next: (res) => {
          // nyamain input dari form login dengan data dari database signUP
          res.find((signUp: any) => {
            return signUp.email === this.loginForm.value.email && signUp.password === this.loginForm.value.password
          });
        },
        // kalo ada yang sama bisa masuk ke dashboard awal 
        complete: () => this.router.navigate(['dahsboard']),
        error: (e) => alert("Gagal"),

        // complete: () => console.info('complete')
        // res => {
        // console.log(res);
        // alert("Berhasil ditambahkan")
      })

    // .subscribe({
    //   next: (),
    //   complete: () => this.router.navigate(['login']),
    //   error: (e) => alert("Gagal"),

    //   // complete: () => console.info('complete')
    //   // res => {
    //   // console.log(res);
    //   // alert("Berhasil ditambahkan")
    // })
  }
}
