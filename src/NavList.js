function NavList(props){

    const stil = {
        display: 'inline-block',
        margin: '0 10px'
    };

    // const linktus = {
    //     backgroundColor: 'aqua',
    //     color: '#333',
    //     textDecoration: 'none',
    //     padding: '10px',
    //     border: '1px solid #ccc',
    //     borderRadius: '5px',
    //     display: 'inline-block',
    //     margin: '5',
    //     transition: 'background-color 0.2s ease'
    // };

    const hover_btn = {
        className:"btn btn-lg btn-danger"
    
    };

    const normal_btn={
        className:"btn btn-lg btn-warning"
    };

    return (
        <li style={stil}>
            <a href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-lg btn-warning"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default NavList;