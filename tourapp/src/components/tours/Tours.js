function Tour(props){
    return(
        <>
            <h2>Tours</h2>
            {props.arrData.map((item)=>{
                return (
                    <div key={item.ID}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} ></img>
                        <hr></hr>
                    </div>
                    
                )
            })}
        </>
    )
}

export default Tour;