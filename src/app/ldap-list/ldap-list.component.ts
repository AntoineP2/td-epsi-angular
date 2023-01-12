import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {LDAP_USERS} from '../model/ldap-mock-data'
import {UserLdap} from '../model/user-ldap'

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss']
})
export class LdapListComponent implements OnInit {
  displayColumns: string[] = ['nomComplet', 'mail', 'employeNumero' ];
  dataSource = new MatTableDataSource<UserLdap>(initialData: []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter);
    this.getUsers();
}

  unactiveSelected = false;



  private getUsers(): void{
    this.dataSource.data= LDAP_USERS;
  }

  filterPredicate(data, filter): boolean{
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  applyFilter($event:KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
}
