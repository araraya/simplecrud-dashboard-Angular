
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { PerusahaanModel } from './perusahaan.model';
import { ApiService } from '../shared/api.service';




@Component({
  selector: 'app-perusahaan',
  templateUrl: './perusahaan.component.html',
  styleUrls: ['./perusahaan.component.css']
})
export class PerusahaanComponent implements OnInit {
  // declare form group, masukin model data ke variabel 
  formValuePerusahaan !: FormGroup;
  perusahaanModelObj: PerusahaanModel = new PerusahaanModel();
  perusahaanData!: any;

  // bikin variabel buat button update dan save jadi secara if muncul aatau gak tergantung tombol add atau edit
  btnUpdateShow: boolean = false;

  btnSaveShow: boolean = true;

  constructor(private formbuilder: FormBuilder
    , private api: ApiService) { }

  ngOnInit(): void {
    this.formValuePerusahaan = this.formbuilder.group({
      namaPerusahaan: [''],
      alamat: [''],
      nomorTelepon: [''],

    })

    // manggil seluruh data emplote yang dimap berdasarkan tabel 
    this.getAllPerusahaan();
  }

  // bikin function function untuk tombol add, edit, delet

  postPerusahaanDetails() {
    this.perusahaanModelObj.namaPerusahaan = this.formValuePerusahaan.value.namaPerusahaan;
    this.perusahaanModelObj.alamat = this.formValuePerusahaan.value.alamat;
    this.perusahaanModelObj.nomorTelepon = this.formValuePerusahaan.value.nomorTelepon;



    this.api.postPerusahaan(this.perusahaanModelObj)
      .subscribe({
        next: (res) => alert("Berhasil"),
        complete: () => this.getAllPerusahaan(),
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

  getAllPerusahaan() {
    this.api.getPerusahaan(this.perusahaanModelObj)
      .subscribe((res: any) => {
        this.perusahaanData = res;
        console.log(this.perusahaanData);
      }
      )
  }

  deletePerusahaan(row: any) {
    this.api.deletePerusahaan(row.id).subscribe(res => {
      alert("Dihapus");
      this.getAllPerusahaan();
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

  onEditPerusahaan(row: any) {
    this.perusahaanModelObj.id = row.id;
    this.formValuePerusahaan.controls['namaPerusahaan'].setValue(row.namaPerusahaan);
    this.formValuePerusahaan.controls['alamat'].setValue(row.alamat);
    this.formValuePerusahaan.controls['nomorTelepon'].setValue(row.nomorTelepon);

    this.perusahaanModelObj.id = row.id;
    this.UpdateShowBtn();
  }

  updatePerusahaanDetails() {
    this.perusahaanModelObj.namaPerusahaan = this.formValuePerusahaan.value.namaPerusahaan;
    this.perusahaanModelObj.alamat = this.formValuePerusahaan.value.alamat;
    this.perusahaanModelObj.nomorTelepon = this.formValuePerusahaan.value.nomorTelepon;

    this.api.updateEmploye(this.perusahaanModelObj, this.perusahaanModelObj.id).subscribe(res => {
      alert("Berhasil diupdate");
      this.getAllPerusahaan();
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
