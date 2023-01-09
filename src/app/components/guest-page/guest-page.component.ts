import { productsModal } from './../../models/productsModal';
import { GuestService } from './../../services/guest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css'],
})
export class GuestPageComponent implements OnInit {
  constructor(
    private guestService: GuestService,
    private activatedRoute: ActivatedRoute
  ) {}

  products: productsModal[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProducts();
    });
  }

  getProducts() {
    this.guestService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
