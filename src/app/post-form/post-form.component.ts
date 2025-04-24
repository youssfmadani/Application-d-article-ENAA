import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  template: `
    <h2>Créer/Modifier un article</h2>
    <form>
      <input placeholder="Titre">
      <textarea placeholder="Contenu"></textarea>
      <button type="submit">Enregistrer</button>
    </form>
  `
})
export class PostFormComponent {}
