import React from 'react';

const country = (props) => {
    // console.log(props.country)
    const{name,flag,subregion,capital,population}=props.country;
    const flagStyle = {height:'70px'}
    const Border = {border:"1px solid red"}
    const handleaddCountry = props.newcart;
    return (
        <div style={Border}>
            <h1>This is a  {name} </h1>
            <img style={flagStyle} src={flag}/>
            <h2>Population:{population}</h2>
            <h2>Subregion :{subregion}</h2>
            <h3>Capital :{capital}</h3>
            <button onClick={()=>handleaddCountry(props.country)}>added</button>
        </div>
    );
};

export default country;