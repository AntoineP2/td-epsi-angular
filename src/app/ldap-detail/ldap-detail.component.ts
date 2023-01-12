import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserLdap } from '../model/user-ldap';
import { UsersService } from '../service/users.service';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.scss'],
})
export class LdapDetailComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}
  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;

  userForm = this.fb.group({
    login: [''],
    nom: [''],
    prenom: [''],
    passwordGroup: this.fb.group({
      password: [''],
      confirmPassword: [''],
    }),
    mail: { value: '', disabled: true },
  });

  ngOnInit(): void {
    this.getUser();
  }
  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(login).subscribe((user) => {
      this.user = user;
      console.log("LdapDetail getUser'= ");
      console.log(user);
    });
  }

  private formGetValue(name: string): any {
    return null;
  }

  goToLdap(): void {
    this.router.navigate(['/users/list']);
  }

  onSubmitForm(): void {}
  updateLogin(): void {}
  updateMail(): void {}
  isFormValid(): boolean {
    return false;
  }
}
