import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserLdap } from '../model/user-ldap';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss'],
})
export class LdapListComponent implements OnInit {
  displayColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.filterPredicate = (data: UserLdap, filter: string) =>
    //   this.filterPredicate(data, filter);
    this.getUsers();
  }

  unactiveSelected = false;

  private getUsers(): void {
    this.usersService.getUsers().subscribe((users) => {
      if (this.unactiveSelected) {
        this.dataSource.data = users.filter((user) => user.active === false);
      } else {
        this.dataSource.data = users;
      }
    });
  }

  filterPredicate(data: UserLdap, filter: string): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
}
