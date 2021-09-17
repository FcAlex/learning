import { ImageEditor } from './image-editor';
import { Memento } from './memento';

// Caretaker
export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`BACKUP: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`BACKUP: ${memento.getName()} foi restaurado com sucesso`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
