import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#aa7b19',
                '#fffb19',
                '#bbab19',
                '#dd6b19'
            ],
        }
    ],
    labels: [

    ]
};

  constructor(private http: HttpClient) {
  }

  /*
  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      //debugger;
      console.log(res)
      for (var i = 0; i < res.budget.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.budget.myBudget[i].budget;
        this.dataSource.labels[i] = res.budget.myBudget[i].title;
        this.createChart();
      }
    });
  } */

  /*
  createChart() {
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
} */

}
