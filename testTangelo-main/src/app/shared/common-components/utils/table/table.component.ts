import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {LoanRequestModel} from "../../../../feature/models/loan-request.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent extends MatPaginatorIntl implements OnInit, AfterViewInit, OnChanges {

  @Input() columns: string[] = [];
  @Input() columnsName: string[] = [];
  @Input() arrayElements: any[] = [];
  @Output() sendData = new EventEmitter<LoanRequestModel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns!: string[];
  public dataSource!: MatTableDataSource<any>;
  public sizeUsersTable: number = 6;
  public endIndex!: number;
  public isCollapsedSB!: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.arrayElements);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.arrayElements) {
      this.ngAfterViewInit();
    }
  }

  /** set  paginator **/

  ngAfterViewInit(): void {
    const TIME_TO_RENDER = 100;
    setTimeout(()=>{
        this.displayedColumns = this.columns;
        this.dataSource = new MatTableDataSource(this.arrayElements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.endIndex = Math.ceil(this.arrayElements.length / this.sizeUsersTable)
      },
      TIME_TO_RENDER);
  }

  /** set range of paginator **/

  getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }

    const startIndex = page;
    return `${startIndex + 1}`;
  }

  /** get column selected **/

  getColumnSelected(userLoan: LoanRequestModel, columnSelected: string): void {
    if (columnSelected!== userLoan.isLoanActive) return;
    this.sendData.emit(userLoan);
  }

}
