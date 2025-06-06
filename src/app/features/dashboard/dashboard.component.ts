import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  atendimentos = [
    { nomeCliente: 'Maria Oliveira', horario: '08:30', status: 'confirmado' },
    { nomeCliente: 'João Santos', horario: '09:00', status: 'cancelado' },
    { nomeCliente: 'Ana Paula', horario: '10:15', status: 'em_espera' }
  ];

  getIcon(status: string): string {
    switch (status) {
      case 'confirmado': return 'check_circle';
      case 'cancelado': return 'cancel';
      case 'em_espera': return 'schedule';
      default: return 'info';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'confirmado': return 'green';
      case 'cancelado': return 'red';
      case 'em_espera': return 'orange';
      default: return 'gray';
    }
  }
}
