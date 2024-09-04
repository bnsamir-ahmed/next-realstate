interface Class{
    className:string;
    children:any;
}
const Grid : React.FC<Class> = ({className , children}) =>{
return(<>
    <div className={className}>
    {children}
    </div></>)
}
export default Grid;