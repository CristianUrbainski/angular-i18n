import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialogMessage = false;

  dialogMessage = 'Mensagem escrita no controller para apresentar ao usuário.';

  showMessage(): void {
    this.showDialogMessage = true;
  }

  closeMessage(): void {
    this.showDialogMessage = false;
  }

}
