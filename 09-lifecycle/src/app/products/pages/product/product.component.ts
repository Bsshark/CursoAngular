import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public isProductVisible:boolean = false;
  public currentPrice:number = 10;

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('on Init')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('on Changes')
  }
  ngDoCheck(): void {
    console.log('do Check')
  }
  ngAfterContentInit(): void {
    console.log('after Content Init')
  }
  ngAfterContentChecked(): void {
    console.log('after Content Checked')
  }
  ngAfterViewInit(): void {
    console.log('after View Init')
  }
  ngAfterViewChecked(): void {
    console.log('after View Checked')
  }
  ngOnDestroy(): void {
    console.log('on Destroy')
  }

  increasePrice() {
    this.currentPrice++;
  }

}
