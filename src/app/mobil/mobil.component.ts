import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { MobilModel } from './mobil.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-mobil',
  templateUrl: './mobil.component.html',
  styleUrls: ['./mobil.component.css']
})
export class MobilComponent implements OnInit {
  // declare form group, masukin model data ke variabel 
  formValueMobil !: FormGroup;
  mobilModelObj: MobilModel = new MobilModel();
  mobilData!: any;

  // bikin variabel buat button update dan save jadi secara if muncul aatau gak tergantung tombol add atau edit

  btnUpdateShow: boolean = false;

  btnSaveShow: boolean = true;

  constructor(private formbuilder: FormBuilder
    , private api: ApiService) { }

  ngOnInit(): void {
    this.formValueMobil = this.formbuilder.group({
      namaMobil: [''],
      merk: [''],
      harga: 0,

    })

    // manggil seluruh data emplote yang dimap berdasarkan tabel 

    this.getAllMobil();
  }

  // bikin function function untuk tombol add, edit, delet

  postMobilDetails() {
    this.mobilModelObj.namaMobil = this.formValueMobil.value.namaMobil;
    this.mobilModelObj.merk = this.formValueMobil.value.merk;
    this.mobilModelObj.harga = this.formValueMobil.value.harga;



    this.api.postMobil(this.mobilModelObj)
      .subscribe({
        next: (res) => alert("Berhasil"),
        complete: () => this.getAllMobil(),
        error: (e) => alert("Gagal"),

        // complete: () => console.info('complete')
        // res => {
        // console.log(res);
        // alert("Berhasil ditambahkan")
      })

    // ,
    //   err => {
    //     alert("Gagal");
    //   })
  }

  getAllMobil() {
    this.api.getMobil(this.mobilModelObj)
      .subscribe((res: any) => {
        this.mobilData = res;
        console.log(this.mobilData);
      }
      )
  }

  deleteMobil(row: any) {
    this.api.deleteMobil(row.id).subscribe(res => {
      alert("Dihapus");
      this.getAllMobil();
    })


    // this.api.deleteEmploye(row)
    //   .subscribe({
    //     next: (res) => alert("Berhasil"),
    //     complete: () => this.getAllEmployee(),
    //     error: (e) => alert("Gagal"),

    //     // complete: () => console.info('complete')
    //     // res => {
    //     // console.log(res);
    //     // alert("Berhasil ditambahkan")
    //   })
  }

  onEditMobil(row: any) {
    this.mobilModelObj.id = row.id;
    this.formValueMobil.controls['namaMobil'].setValue(row.namaMobil);
    this.formValueMobil.controls['merk'].setValue(row.merk);
    this.formValueMobil.controls['harga'].setValue(row.harga);

    this.mobilModelObj.id = row.id;
    this.UpdateShowBtn();
  }

  updateMobilDetails() {
    this.mobilModelObj.namaMobil = this.formValueMobil.value.namaMobil;
    this.mobilModelObj.merk = this.formValueMobil.value.merk;
    this.mobilModelObj.harga = this.formValueMobil.value.harga;

    this.api.updateEmploye(this.mobilModelObj, this.mobilModelObj.id).subscribe(res => {
      alert("Berhasil diupdate");
      this.getAllMobil();
      this.SaveShowBtn();
    })
  }

  UpdateShowBtn() {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn() {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }


}
