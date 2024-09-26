import { Profissional } from '../Profissional'
import { Servico } from '../Servico'

export default interface Agendamento {
    id: number
    emailCliente: string
    data: Date
    profissional: Profissional
    servicos: Servico[]
}
