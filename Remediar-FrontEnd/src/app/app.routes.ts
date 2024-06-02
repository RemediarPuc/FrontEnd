import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SolicitarMedicamentoComponent } from './components/solicitar-medicamento/solicitar-medicamento.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'solicitar',
        component: SolicitarMedicamentoComponent
    }
]