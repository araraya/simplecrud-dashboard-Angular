import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // chart
  chartKelamin: any = [];
  chartMobil: any = [];
  chartAset: any = [];
  chartJumlahKaryawan: any = [];
  chartMobilPopuler: any = [];

  constructor() { Chart.register(...registerables); }

  ngOnInit(): void {
    this.chartKelamin = new Chart('canvas1', {
      type: 'pie',
      data: {
        labels: [
          'Laki-Laki',
          'Perempuan',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [6, 4],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',

            ],
            hoverOffset: 4
          },
        ],
      },
    });

    this.chartMobil = new Chart('canvas2', {
      type: 'pie',
      data: {
        labels:
          ["Budiarto Sanusi",
            "Tanjung Perkasa",
            "Rosi",
            "Bhayang Budiman",
            "Zainab Permata",
            "Susi",
            "Alfredo",
            "Puspa Sukma",
            "Imam Permadi",
            "John Budiarta",
          ]
        ,
        datasets: [
          {
            label: 'My First Dataset',
            data: [3, 2, 1, 2, 0, 1, 1, 1, 0, 2],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              "#6A2C70",
              '#B83B5E',
              '#F08A5D',
              '#F9ED69',
              '#F38181',
              '#08D9D6',
              '#252A34',
              '#E84545',


            ],
            hoverOffset: 4
          },
        ],
      },
    });

    this.chartAset = new Chart('canvas3', {
      type: 'pie',
      data: {
        labels:
          ["Budiarto Sanusi",
            "Tanjung Perkasa",
            "Rosi",
            "Bhayang Budiman",
            "Zainab Permata",
            "Susi",
            "Alfredo",
            "Puspa Sukma",
            "Imam Permadi",
            "John Budiarta",]
        ,
        datasets: [
          {
            label: 'My First Dataset',
            data: [335000000, 193000000, 110000000, 228000000, 0, 84000000, 84000000, 135000000, 0, 244000000],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              "#6A2C70",
              '#B83B5E',
              '#F08A5D',
              '#F9ED69',
              '#F38181',
              '#08D9D6',
              '#252A34',
              '#E84545',
            ],
            hoverOffset: 4
          },
        ],
      },
    });

    this.chartJumlahKaryawan = new Chart('canvas4', {
      type: 'pie',
      data: {
        labels:
          ['Solusi Pratama',
            'Jaringan Solusindo',
            'Budi Makmur',
          ]
        ,
        datasets: [
          {
            label: 'My First Dataset',
            data: [3, 3, 1],
            backgroundColor: [
              '#3A3845',
              '#F7CCAC',
              '#C69B7B'
            ],
            hoverOffset: 4
          },
        ],
      },
    });

    this.chartMobilPopuler = new Chart('canvas5', {
      type: 'pie',
      data: {
        labels:
          ['Wuling',
            'Suzuki',
            'Renault',
            'Datsun',
            'Toyota',
            'Daihatsu',
            'Honda',
          ]
        ,
        datasets: [
          {
            label: 'My First Dataset',
            data: [1, 1, 1, 6, 2, 0],
            backgroundColor: [
              '#7D1E6A',
              '#EEB0B0',
              '#FFE59D',
              '#BDE6F1',
              '#6A67CE',
              '#947EC3',
              '#B689C0',
            ],
            hoverOffset: 4
          },
        ],
      },
    });
  }

}
