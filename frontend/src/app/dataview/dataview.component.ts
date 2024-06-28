// src/app/data-view/data-view.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dataview.component.html', 
  styleUrls: ['./dataview.component.css'],
})
export class DataViewComponent implements OnInit, OnDestroy {

  data: any[] = [];
  loading: boolean = true;
  private pollSubscription: Subscription = new Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.data = [];
    this.startPolling();
    console.log("ON INIT CALLED");
  }

  ngOnDestroy(): void {
    this.loading = true;
    this.data = [];
    this.stopPolling();
    console.log("ON DESTROY CALLED");
  }

  startPolling(): void {
    this.pollSubscription = this.dataService.pollData(5000).subscribe( // Poll every 5 seconds
      response => {
        this.data = response;
        this.loading = false;
      },
      error => {
        console.error('Error loading data', error);
        this.loading = false;
      }
    );
  }

  stopPolling(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
