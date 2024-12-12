import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Amiibo() {
  const { Amiibo } = useParams();
  const [ amiibo, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);


  useEffect(() => {
    const fetchPost = async () => {
        try {
            const response = await axios.get(`https://amiiboapi.com/api/amiibo/`);
            setData(response.data.amiibo);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    fetchPost();
}, [ Amiibo ])

if (loading)
    return <p>Chargement en cours ...</p>

if (error)
    return <p>Une erreur est survenue, veuillez réesayer !</p>

return (
    <div>
        <h1> Les Amiibo de collection </h1>
        { amiibo.map((value,i) =>
        (
        <div key={i}>
                <h3> {value.character}</h3>
                <h4> {value.gameSeries} </h4>
                <img src = {value.image} />
                <hr/>
                
        </div>
        ))

        } 
        


    </div>
)
  
    
  }
  
export default Amiibo;