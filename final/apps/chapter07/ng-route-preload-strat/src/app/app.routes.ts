import { Route } from '@angular/router';
import { canActivateLogin, canActivateWithRole } from './auth/auth.guards';
import { UserType } from './constants/user-type';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [canActivateLogin],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [canActivateWithRole(UserType.Admin)],
    data: { loadForAdmin: true }
  },
  {
    path: 'admin-campaign',
    loadComponent: () =>
      import('./admin-campaign/admin-campaign.component').then(
        (m) => m.AdminCampaignComponent
      ),
    canActivate: [canActivateWithRole(UserType.Admin)],
    data: { loadForAdmin: true }
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent),
    canActivate: [canActivateWithRole(UserType.Employee)],
    data: { loadForEmployee: true },
  },
  {
    path: 'employee-campaign',
    loadComponent: () =>
      import('./employee-campaign/employee-campaign.component').then(
        (m) => m.EmployeeCampaignComponent
      ),
    canActivate: [canActivateWithRole(UserType.Employee)],
    data: { loadForEmployee: true },
  },
];
