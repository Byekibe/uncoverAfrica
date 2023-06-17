const UncoverModal = (props: any) => {
    return (
        <>
            <div 
            className='modalx'
            style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}
           >
                {props.children}
            </div>
            {props.show ? <div className='backdrop' ></div> : null}
        </>
    );
};

export default UncoverModal;