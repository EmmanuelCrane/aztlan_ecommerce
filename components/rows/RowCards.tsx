import grid from '../../styles/components/grid.module.css';

interface Props {
    children: React.ReactNode,
    className:string
}

const rowCards = ( { children, className }: Props ) => {
  return (
    <div className={`${grid.rowCards} ${className}`}>
        {children}
    </div>
  )
}

export default rowCards