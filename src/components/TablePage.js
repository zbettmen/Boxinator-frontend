import axios from 'axios'
import React from 'react'
import "../styles/tablepage.scss"
function sendData(data){
    axios.post("http://localhost:8080/box")
}


export default function FormPage(){
    const [rows, setRows] = React.useState([])

    React.useEffect(()=> {
        axios.get("http://localhost:8080/box")
        .then(response => response.data)
        .then(data => {
            setRows(data)
        })
    },[])

    return <table className='table'>
        <tbody>

            
            <tr className='trHead'>
                <th className='th'> Receiver </th>
                <th className='th'> Weight </th>
                <th className='th'> Box colour </th>
                <th className='th'>Country</th>
                <th className='th'> Shipping cost </th>
            </tr>
            
        
            {rows.map((row) => {
                return <tr className='trBody' key={row.id}> 
                    <td className='td'> {row.name} </td>
                    <td className='td'> {row.weight} </td>
                    <td className='td'style={{backgroundColor: row.color}} >  </td>
                    <td className='td'> {row.country} </td> 
                    <td className='td'> {row.shipping} </td>
                    </tr>
            })}

        </tbody>

        
    </table>
    
}