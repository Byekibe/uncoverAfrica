import styled from "styled-components";

const SectionPreloader = () => {
    return (
        <Loader>
            <section></section>
        </Loader>
    )
}

const TablePreloader = ({ count }: any) => {
    return (
        <>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
        </>
    )
}

const Loader = styled.div`
    section {
        border-radius: 5px;
        padding: .8rem;
        min-width: 3rem;
        animation: pulse 0.75s linear alternate infinite;
    }

    @keyframes pulse {
        0% {
            background-color: #E8FAFC;
        }
        100% {
            background-color: #ccc;
        }
    }
`

export default TablePreloader;