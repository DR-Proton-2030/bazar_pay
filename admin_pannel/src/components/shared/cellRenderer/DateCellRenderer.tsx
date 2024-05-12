import { formatMongoDate } from "../../../utils/commonFunction/formatMongoDate"

const DateCellRenderer = ({value}:any) => {
  return (
    <div>{formatMongoDate(value)}</div>
  )
}

export default DateCellRenderer