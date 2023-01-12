import { TestBed } from "@angular/core/testing"
import {UserLdap} from "./user-ldap"

export const LDAP_USERS: UserLdap[] = [
    {
    login : 'test.v1',
    nom : 'V1',
    prenom : 'Test',
    nomComplet : 'V1 test',
    motDePass : null,
    mail : 'test.v1@epsi.fr',
    role : "ROLE_USER",
    employeNumero: 1234,
    employeNiveau: 120,
    dateEmbauche: "2020-01-01",
    publisherId : 1,
    active: true
    },
    {
    login : 'test.v2',
    nom : 'V2',
    prenom : 'Test',
    nomComplet : 'V2 test',
    motDePass : null,
    mail : 'test.v2@epsi.fr',
    role : "ROLE_USER",
    employeNumero: 2234,
    employeNiveau: 220,
    dateEmbauche: "2022-01-01",
    publisherId : 2,
    active: true
    },
]