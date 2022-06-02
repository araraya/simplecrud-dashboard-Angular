import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { EmployesModel } from './dashboard-pegawai.model';
import { ApiService } from '../shared/api.service';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-dashboard-pegawai',
  templateUrl: './dashboard-pegawai.component.html',
  styleUrls: ['./dashboard-pegawai.component.css']
})
export class DashboardPegawaiComponent implements OnInit {

  // declare form group, masukin model data ke variabel 
  formValue !: FormGroup;
  employesModelObj: EmployesModel = new EmployesModel();
  employesData!: any;
  jumlahKelamin: any;

  // bikin variabel buat button update dan save jadi secara if muncul aatau gak tergantung tombol add atau edit

  btnUpdateShow: boolean = false;

  btnSaveShow: boolean = true;


  constructor(private formbuilder: FormBuilder
    , private api: ApiService) { Chart.register(...registerables); }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      nama: [''],
      jenisKelamin: [''],
      tempatLahir: [''],
      tanggalLahir: [''],
      alamatRumah: [''],
      nomorHP: [''],
      namaPerusahaan: [''],
      mobil1: [''],
      mobil2: [''],
      mobil3: ['']
    })


    // manggil seluruh data emplote yang dimap berdasarkan tabel 
    this.getAllEmployee();


  }


  // bikin function function untuk tombol add, edit, delet

  postEmployesDetails() {
    this.employesModelObj.nama = this.formValue.value.nama;
    this.employesModelObj.jenisKelamin = this.formValue.value.jenisKelamin;
    this.employesModelObj.tempatLahir = this.formValue.value.tempatLahir;
    this.employesModelObj.tanggalLahir = this.formValue.value.tanggalLahir;
    this.employesModelObj.alamatRumah = this.formValue.value.alamatRumah;
    this.employesModelObj.nomorHP = this.formValue.value.nomorHP;
    this.employesModelObj.namaPerusahaan = this.formValue.value.namaPerusahaan;
    this.employesModelObj.mobil1 = this.formValue.value.mobil1;
    this.employesModelObj.mobil2 = this.formValue.value.mobil2;
    this.employesModelObj.mobil3 = this.formValue.value.mobil3;


    this.api.postEmploye(this.employesModelObj)
      .subscribe({
        next: (res) => alert("Berhasil"),
        complete: () => this.getAllEmployee(),
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

  getAllEmployee() {
    this.api.getEmploye(this.employesModelObj)
      .subscribe((res: any) => {
        this.employesData = res;
        console.log(this.employesData);
      }
      )
  }

  deleteEmployee(row: any) {
    this.api.deleteEmploye(row.id).subscribe(res => {
      alert("Dihapus");
      this.getAllEmployee();
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

  onEdit(row: any) {
    this.employesModelObj.id = row.id;
    this.formValue.controls['nama'].setValue(row.nama);
    this.formValue.controls['jenisKelamin'].setValue(row.jenisKelamin);
    this.formValue.controls['tempatLahir'].setValue(row.tempatLahir);
    this.formValue.controls['tanggalLahir'].setValue(row.tanggalLahir);
    this.formValue.controls['alamatRumah'].setValue(row.alamatRumah);
    this.formValue.controls['nomorHP'].setValue(row.nomorHP);
    this.formValue.controls['namaPerusahaan'].setValue(row.namaPerusahaan);
    this.formValue.controls['mobil1'].setValue(row.mobil1);
    this.formValue.controls['mobil2'].setValue(row.mobil2);
    this.formValue.controls['mobil3'].setValue(row.mobil3);
    this.employesModelObj.id = row.id;
    this.UpdateShowBtn();
  }

  updateEmployesDetails() {
    this.employesModelObj.nama = this.formValue.value.nama;
    this.employesModelObj.jenisKelamin = this.formValue.value.jenisKelamin;
    this.employesModelObj.tempatLahir = this.formValue.value.tempatLahir;
    this.employesModelObj.tanggalLahir = this.formValue.value.tanggalLahir;
    this.employesModelObj.alamatRumah = this.formValue.value.alamatRumah;
    this.employesModelObj.nomorHP = this.formValue.value.nomorHP;
    this.employesModelObj.namaPerusahaan = this.formValue.value.namaPerusahaan;
    this.employesModelObj.mobil1 = this.formValue.value.mobil1;
    this.employesModelObj.mobil2 = this.formValue.value.mobil2;
    this.employesModelObj.mobil3 = this.formValue.value.mobil3;
    this.api.updateEmploye(this.employesModelObj, this.employesModelObj.id).subscribe(res => {
      alert("Berhasil diupdate");
      this.getAllEmployee();
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
