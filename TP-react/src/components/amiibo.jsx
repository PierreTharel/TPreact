import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Amiibo() {
  const { AmiiboId } = useParams();
  const [ Amiibo, setAmiibo ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);


  useEffect(() => {
    const fetchPost = async () => {
        try {
            const response = await axios.get(`https://amiiboapi.com/api/amiibo/`);
            setAmiibo(response.data);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    fetchPost();
}, [ AmiiboId ])

if (loading)
    return <p>Chargement en cours ...</p>

if (error)
    return <p>Une erreur est survenue, veuillez réesayer !</p>

return (
    <div>
        <h1>Description de l'Amiibo</h1>
        <h2>{ Amiibo.character }</h2>
        <h3>{ Amiibo.gameSeries }</h3>
        <img> { Amiibo.image } </img>
        <h5>{ Amiibo.name} </h5>
    </div>
)
  
    
  }
  
export default Amiibo;