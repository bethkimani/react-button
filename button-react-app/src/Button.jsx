

// INLINE STYLYING PREVENT GLOBAL CONFLICTS;
function Button(){


    const styles= {

        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor:"pointer",
    }



    return(<Button className= {styles}>Click</Button>)
}

export default Button