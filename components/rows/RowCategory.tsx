import grid from '../../styles/components/grid.module.css';



interface Props {
    children: React.ReactNode
}
const RowCategory = ({children}: Props) => {
  return (
    <div className={grid.rowCategoryCards}>
        {children}    
    </div>
  )
}

export default RowCategory