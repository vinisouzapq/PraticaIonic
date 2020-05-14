import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';



@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {


    constructor(private actionSheetController: ActionSheetController) { }

    amigos = [
        {
            nome: "Yolanda",
            idade: '21',
            nivel: '4'
        },
        {
            nome: "Nicole",
            idade: '21',
            nivel: '3'
        },
        {
            nome: "Justina",
            idade: '24',
            nivel: '4'
        },
        {
            nome: "Elisangela",
            idade: '29',
            nivel: '4'
        },
        {
            nome: "Nayara",
            idade: '28',
            nivel: '5'
        },
        {
            nome: "Daniel",
            idade: '21',
            nivel: '5'
        },
        {
            nome: "Mariana",
            idade: '21',
            nivel: '5'
        },
    ]

  ngOnInit() {
  }

    async deleteFriend(nome: String) {
        let buttons = [
            {
                text: "Deletar", role: "destructive",
                handler: () => {
                    this.deleteAmigo(nome);
                }
            },
            { text: "Editar" },
            { text: "Cancelar", role: "cancel" }
        ];

        const actionSheet = await this.actionSheetController.create({
            header: "Actions",
            buttons: buttons
        });
        await actionSheet.present();
    }

    deleteAmigo(item) {
        var index = this.amigos.findIndex(i => i.nome === item.nome);
        this.amigos.splice(index, 1);

    }
}
