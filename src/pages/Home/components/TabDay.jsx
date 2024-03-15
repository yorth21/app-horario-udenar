import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { capitalizeWords } from '@/utils/capitalizeWords'
import { formatHours } from '@/utils/formatHours'

function TableDay ({ item }) {
  return (
    <Table aria-label='Example static collection table'>
      <TableHeader>
        <TableColumn>Hora</TableColumn>
        <TableColumn>Materia</TableColumn>
        <TableColumn>Ubicacion</TableColumn>
        <TableColumn />
      </TableHeader>
      <TableBody>
        {item.asignaturas.map((asignatura) => (
          <TableRow key={asignatura.codAsignatura}>
            <TableCell>{formatHours(asignatura.horaInicio)} - {formatHours(asignatura.horaFin)}</TableCell>
            <TableCell>{capitalizeWords(asignatura.nombre)}</TableCell>
            <TableCell>{asignatura.ubicacion}</TableCell>
            <TableCell />
          </TableRow>
        ))}
      </TableBody>
    </Table>

  )
}

export default TableDay
