import React from 'react'
import './table.css'

function Table() {
    return (
        <div id='table'>
            <table>
                <tbody>
                    <td className='outerEnclouser' colSpan={10}>
                        <tr border={1}>
                            <td className='boldColumns'   >
                                <tr><td className='bold'>Bill Name</td> <td>  :  202INV24-9260.</td> </tr>
                                <tr ><td className='bold'>Bill Date </td> <td> :  2024-06-13T00:00:00.000Z</td></tr>
                                <tr ><td className='bold'>Branch Address</td> <td>:  PLOT NO. 24,NEAR NILKANTH NAGAR SOCIETY,SEVASHRAM ROAD,BHARUCH - 392001 , GUJARAT , INDIA</td></tr>
                                <tr ><td className='bold'>GSTIN</td><td> :  24AADCK6700F1ZY</td></tr>
                                <tr ><td className='bold'>PAN No</td><td> :  AADCK6700F  </td></tr>
                                <tr ><td className='bold'>Place of Supply</td> <td>:  GUJARAT - 24</td></tr>
                                <tr ><td className='bold'>Sales Person</td><td>  :  KINJAL VIRENDRAKUAMR PATEL </td></tr>
                            </td>
                            <td className='boldColumns'   >
                                <tr><td className='bold'>Party Name</td><td>  : DIGVIJAYSINH KARANSINH TADVI</td> </tr>
                                <tr><td className='bold'>Address</td><td>  : BHILVASI,NARMADA,NARMADA - 393155 , GUJARAT , INDIA </td></tr>
                                <tr><td className='bold'>Mobile No.</td><td>  : +91 8000579645</td>  </tr>
                                <tr><td className='bold'>PAN No</td><td>  : </td>    </tr>
                                <tr><td className='bold'>GSTIN</td><td>  : </td>   </tr>
                                <tr><td className='bold'>Customer Id</td> <td>  : 202-10264</td>  </tr>
                                <tr><td className='bold'>State Name</td><td>  : GUJARAT</td></tr>
                            </td>
                        </tr>
                    </td>


                    {/*           TaxS section                      */}
                    <tr id='tax' style={} >
                        TAX INVOICE
                    </tr>
                    <tr>
                        <td id='bold' colSpan={1} > Sr </td>
                        <td id='bold' colSpan={1} > Category / HSN Code </td>
                        <td id='bold' colSpan={1} > Stock Code </td>
                        <td id='bold' colSpan={1} > Wt </td>
                        <td id='bold' colSpan={1} > Pcs </td>
                        <td id='bold' colSpan={1} > Rate </td>
                        <td id='bold' colSpan={1} > Amount </td>
                        <td id='bold' colSpan={1} > Discount </td>
                        <td id='bold' colSpan={1} > Net Amount </td>
                        <td id='bold' colSpan={1} > Final Amount </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Table
