import styled from "styled-components";

interface Props {
    users?: string,
}

const UsersList= (props: Props) => {

    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Hotel</td>
                    <td>Last Login</td>
                    <td>Is active</td>
                    <td>&nbsp;</td>
                </tr>
         
            </thead>
            <tbody>
                    <tr>
                        <td>Lux</td>
                        <td><span className="default">0</span></td>
                        <td><span className="category">#suyy</span></td>
                        <td><span className="category">#suyy</span></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Lux</td>
                        <td><span className="default">0</span></td>
                        <td><span className="category">#suyy</span></td>
                        <td><span className="category">#suyy</span></td>
                        <td>&nbsp;</td>
                    </tr>
            </tbody>
        </table>
    )
};

export default UsersList;
