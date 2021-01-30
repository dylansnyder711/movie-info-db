import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.searchForm.value.search);
    if (this.searchForm.valid) {
      this.apiService.search(this.searchForm.value.search);
    }
    this.clearForm();
  }

  clearForm() {
    this.searchForm.reset();
  }
}
