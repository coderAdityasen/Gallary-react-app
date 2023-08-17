import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function FullView(){
    const [newimage , setNewimage] = useState()
    const {id} = useParams();
    const [inLoading , setInloading] = useState(false)
    async function downloadData(){
        const getData = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setNewimage(getData.data.photo)

    }

    useEffect(() =>{
        setInloading(false)
        downloadData()
    } ,[])
    return(
        <>
        {inLoading ? <div class="loader">
	<div class="loader-inner">
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
	</div>
</div> : <div className="full-page">
        <div className="image-view">
            {newimage &&  <img src={newimage.url} alt="" /> }
        </div>
        
        <div className="title">
        {newimage && <h3> {newimage.description} </h3>}

            {newimage && <h2> {newimage.title} </h2>}
        </div>
        </div>}
        
        
        </>
    )
}

export default FullView;