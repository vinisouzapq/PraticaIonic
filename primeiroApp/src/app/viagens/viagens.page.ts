import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    viagens = [
        {
            local: 'Sao Pedro dos Ferros',
            descricao: 'Sao Pedro dos Ferros e um municipio brasileiro do estado de Minas Gerais. Sua populacao, conforme estatisticas do Instituto Brasileiro de Geografia e Estatistica (IBGE), era de 8 339 habitantes em 2014.',
            datadevisita: '01/01/2020',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SaoPedroFerros.jpg/300px-SaoPedroFerros.jpg'
        },

        {
            local: 'Vancouver',
            descricao: 'Vancouver e uma cidade portuaria costeira no oeste do Canada, localizada na regiao de Lower Mainland na provincia canadense da Columbia Britanica.E a cidade mais populosa da provincia e oitava mais populosa do Canada, o censo de 2016 registrou 631 000 pessoas na cidade.A area da Grande Vancouver registrou uma populacao de 2 463 431 em 2016, tornando- se a terceira maior regiao metropolitana do Canada.Vancouver tem a maior densidade populacional no Canada com mais de 5 400 pessoas por quilometro quadrado.De acordo com o recenseamento de 2011, Vancouver e a quarta cidade mais densamente povoada da America do Norte atras da cidade de Nova Iorque, Sao Francisco, e Cidade do Mexico. A cidade e uma das cidades mais etnicas e linguisticamente diversas do Canada de acordo com esse recenseamento, 52 % dos seus residentes tem um idioma nativo diferente do ingles. A cidade e classificada como uma cidade global Beta.',
            datadevisita: '31/12/2022',
            imagem: 'https://mundoviajar.com.br/wp-content/uploads/2018/11/Vancouver4.jpg'
		}

    ]

}
