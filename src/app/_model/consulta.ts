import { Paciente } from './paciente';
import { Medico } from './medico';
import { Especialidad } from './especialidad';
import { DetalleConsulta } from './detalleConsulta';

export class Consulta{
    detalleConsulta : DetalleConsulta[];
    especialidad : Especialidad;
    // fecha : '2019-10-16T17:47:01.089Z'
    fecha: string;
    idConsulta: number;
    medico : Medico;
    paciente : Paciente;
}

// {
//     'consulta': {
//       'detalleConsulta': [
//         {
//           'diagnostico': 'string',
//           'idDetalle': 0,
//           'tratamiento': 'string'
//         }
//       ],
//       'especialidad': {
//         'idEspecialidad': 0,
//         'nombre': 'string'
//       },
//       'fecha': '2019-10-16T17:47:01.089Z',
//       'idConsulta': 0,
//       'medico': {
//         'apellidos': 'string',
//         'cmp': 'string',
//         'idMedico': 0,
//         'nombres': 'string'
//       },
//       'paciente': {
//         'apellidos': 'string',
//         'direccion': 'string',
//         'dni': 'string',
//         'email': 'string',
//         'idPaciente': 0,
//         'nombres': 'string',
//         'telefono': 'string'
//       }
//     },
//     'examenList': [
//       {
//         'descripcion': 'string',
//         'idExamen': 0,
//         'nombre': 'string'
//       }
//     ]
//   }