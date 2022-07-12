import React, {useState} from "react";

const Search =({searchData}) =>{
    const [text, setText] = useState('');
    const [clear, setClear] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!clear){
        searchData(text);
    }
    else{
        searchData(" ");
    }
        setText('');
    }

    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=> setText(e.target.value)}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
       
            { <button className="btn btn-light btn-block" onClick={(e)=>{setClear(true)}}>Clear</button> } 
           
        </>
    );
}
export default Search;