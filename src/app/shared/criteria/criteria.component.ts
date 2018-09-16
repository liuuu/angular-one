import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {
  hitMessage: string;

  @Input()
  hitCount: number;

  @Input()
  displayDetail: Boolean;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  @ViewChild('FilterInput')
  filterElementRef: ElementRef;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

  ngOnInit() {
    console.log('this.listFilter', this.listFilter);
  }

  ngAfterViewInit() {
    if (this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'no matches found';
    } else {
      this.hitMessage = `Hits: ${this.hitCount}`;
    }
  }
}
