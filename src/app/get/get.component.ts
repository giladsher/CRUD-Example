import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../Business';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  businesses: Business[];
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.businessService.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  onClick(id) {
    this.businessService.deleteBusiness(id).subscribe(res => {
      console.log(res);
      this.businessService.getBusiness().subscribe((data: Business[]) => {
        this.businesses = data;
      });
    });
  }
}