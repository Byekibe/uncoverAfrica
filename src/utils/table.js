import React, { useEffect, useState, useContext} from 'react';
import { Context }  from '../context';

const Th = (props) => {
   return <th scope="col">{props?.name}</th>
}

const TableHeader = (props) => {

    return (
        <thead className="thead-light">
          <tr>
            { 
                props?.headers?.map((name, index) => {
                   return  <Th name={name} key={index} />
                })
            }
            {
               props.showActions &&  <Th name={"Action"} key={-1} />
            }
          </tr>
        </thead>
    );
}

const TdActions = (props) => {
    const {model, actions, recordId} = props;
    const [ state, dispatch ] =  useContext(Context);

    const onEditFunction = (event, model, id) => {
       dispatch({type:"SET", key:"updaterecord", payload:{id:id, model:model}});
    };

    const deleteItem = (model, id) => {
       dispatch({type:"SET", key:"deleterecord", payload:{id:id, model:model}});
    };


    return (
       <td data-title="Action">
        {
            actions.print && (<a href={`/${model}/report/${recordId}`} target="_blank" className="text-muted m-1" data-placement="top" data-toggle="tooltip" title="Report" data-original-title="Report">
             <i className="fa fa-print"></i>
            </a>)
        }
        {
            actions.view && (<a href={`/${model}/detail/${recordId}`} className="text-success m-1" data-placement="top" data-toggle="tooltip" title="View" data-original-title="View">
              <i className="fa fa-eye"></i>
            </a>)
        }
        {
           actions.edit && (<a href="#" onClick={(event) => onEditFunction(event, model, recordId)}  className="text-primary" >
                <i className="fa fa-edit"></i>
             </a>)             
        }
        {
           actions.delete && (<a href="#"  
               onClick={() => deleteItem(model, recordId)} 
               className="text-danger m-1" data-placement="top" data-toggle="tooltip" title="" data-original-title="Delete">
              <i className="fa fa-trash"></i>
           </a>)   
        }
        
      </td>

    );
}
const Td = (props) => {
    let fontWeight = props?.heading ? "font-weight-bold table-active" :"";
    return (
       <td colSpan={props?.colspan} className={fontWeight}>
           <div className={`d-flex align-items-center` }>
            {props?.value}
           </div>
       </td>
    );
}

const Tr = (props) => {
   const {model, actions} = props.showActions ?? {};

   useEffect(() => {

   }, [props]);

   return (
      <tr>
        { 
            Object.entries(props?.row_data||[]).map(([key, value]) => {
                if(!endsWith(key, "_id") && !(key === 'id')){
                    return <Td value={value} key={`id-${key}`} colspan={props?.colspan||""} heading={props?.heading||false}/>
                }
            })
        }
        {
           props.showActions && (<TdActions actions={actions} model={model} recordId={props.recordId}/>) 
        }

      </tr>
   );
}

const endsWith = (str, suffix) => {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

const DataTable = (props) => {
    const [tableHeaders, setTableHeaders]  = useState([]); 
    const [rowData, setRowData]  = useState([]); 

    const dictValuesToList = (records) => {
          let dictValues = [];
          Object.entries(records||{}).map(([key, value]) =>{
              if(!endsWith(key, "_id") && !(key === 'id')){
                let sentanceCaseKey = key.split('_').map((wd) => {
                    return (wd.charAt(0).toUpperCase() + wd.slice(1) + " ");
                });
                dictValues = [...dictValues, {key:sentanceCaseKey, value:value}];
              }
          });
          return dictValues;
    }

    useEffect(() => {

        if(props?.data && props.data instanceof Array){ 
            let raw_headers = Object.keys(props.data[0]||{}).map((key) => {

                if(!endsWith(key, "_id") && !(key === 'id')){
                    let strs = key.split('_').map((wd) => {
                        return (wd.charAt(0).toUpperCase() + wd.slice(1));
                    });
                    return strs.join(' ');
                }
            }).filter(Boolean);
            setTableHeaders(raw_headers);
            setRowData(props.data);
        } else {
          setRowData(dictValuesToList(props?.data));
        }

    }, [props.data]);

    return (
              <table className="table align-items-center table-flush">
                <TableHeader headers={tableHeaders}  showActions={props.showActions && true}/>
                <tbody>
                
                 {
                    rowData ? (
                        rowData.map((row, index) => {
                            if(row?.value && typeof(row.value) == "object"){
                                let _data = dictValuesToList(row.value);
                                let headerRow = <Tr row_data={{value:row.key}} key={index} recordId={row.id} colspan={2} heading={true}/>
                                let newRows =  _data.map((innerRow, innerIndex) => {
                                   return <Tr  row_data={innerRow}  key={index+"."+innerIndex} showActions={false}  recordId={row.id}/>
                                });
                                return [headerRow, ...newRows];
                            } else {
                                return  <Tr row_data={row} key={index} showActions={props.showActions} recordId={row.id}/>;
                            }
                        })
                    ) : ( <tr><td>No records found </td></tr> )
                 }

                </tbody>
              </table>

    );
}

export default DataTable;
