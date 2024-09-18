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

type EXPEDIENTES = {
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

type cocoin = {
    id:                         number;
    pregunta_que_es_cocoin:     string;
    definicion_de_cocoin:       string;
    pregunta_quienes_integran:  string;
    quienes_integran_el_cocoin: string;
    imagen_1_banner:            string;
    imagen_2_banner:            string;
    plan_de_trabajo:            string;
    Funciones_del_COCOIN:       string;
    definicion_Funciones_del_COCOIN:    string;
}


type DCGNE = {
    id:                         number;
    logo:                       string;
    Mision:                     string;
    Vision:                     string;
    carouseldcge1:               string;
    carouseldcge2:               string;
    carouseldcge3:               string;
    imagen_mision:               string;
    imagen_vision:               string;
    imagen_usar:                 string;
    ejes_usar:                   string;
    usar_definicion:             string;
    definicion_parnuh:             string;
    parches_usar:             string;
    definicion_scuh:             string;
    imagen_scuh:             string;
    ciclo_operaciones_usar:             string;
    grupo_usar_acreditados:             string;
}

type comite_probidad_y_etica = {
    id:                    number;
    logo:                   string;
    Quienes_somos:         string;
    imagen_banner1:        string;
    mision:                string;
    vision:                string;
    nuestro_objetivo:      string;
    acta_de_juremantacion: string;
    plan_de_trabajo:       string;
    presidente:            string;
    foto_presidente:       string;
    secretario:            string;
    foto_secretario:       string;
    primera_vocal:         string;
    segunda_vocal:         string;
    foto_segunda_vocal:    string;
    tercera_vocal:         string;
    foto_tercera_vocal:    string;
    acta_de_jurementacion: string;
    foto_primera_vocal:    string;
    imagen_comite:          string;
}

type Schema = {
  articles: Articles[];
  alertas: Alerta;
  header: Header;
  cocoin:cocoin;
  DCGNE:DCGNE;
  comite_probidad_y_etica:comite_probidad_y_etica;
  pronostico: Pronostico;
  EXPEDIENTES: EXPEDIENTES[];
}

const directus = createDirectus<Schema>('https://data.copeco.gob.hn').with(rest());

export default directus;