import { createDirectus, rest, } from '@directus/sdk';

type Articles = {
    id:           number;
    status:       string;
    sort:         null;
    date_created: Date;
    date_updated: Date;
    title:        string;
    cover_image:  null | string;
    author:       string;
    excerpt:      string;
    body:         null | string;
    publish_date: Date;
}

type Alerta = {
    id:           number;
    status:       string;
    user_created: string;
    date_created: Date;
    user_updated: string;
    date_updated: Date;
    titulo:       string;
    fecha:        Date;
    imagen1:      string;
    imagen2:      string;
    semaforo:     string;
    imagen3:      string;
    contenido:    string;
}

type Header = {
    slug:      number;
    Logo:      string;
    titulo:    string;
    carousel1: string;
    carousel2: string;
    carousel3: string;
    mision:    string;
    vision:    string;
}

type Pronostico = {
    id:      number;
    titulo:  string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
    imagen4: string;
    video:   string;
    video2:  string;
}

type expedientes = {
    id: number
    status: string
    sort: any
    user_created: string
    date_created: string
    user_updated: string
    date_updated: string
    FECHA: string
    TIPO_EXPEDIENTE: string
    NUMERO_DE_EXPEDIENTE: string
    Observaciones: string
    Dirreccion: string
    Correo_electronico: any
    Numero_de_Telefono: any
    Nombre_del_expediente: any
}


type Schema = {
  articles: Articles[];
  alertas: Alerta;
  header: Header;
  pronostico: Pronostico;
  expedientes: expedientes[];
}

const directus = createDirectus<Schema>('https://data.copeco.gob.hn').with(rest());

export default directus;