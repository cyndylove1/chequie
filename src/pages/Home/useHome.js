import {useState, useEffect} from 'react';
const Home = () =>{
    const [content, setContent] = useState([]);

  useEffect(() => {
    const spanContent = [
      { text: "Ajo", color: "#008A48" },
      { text: "Esusu", color: "#4C4486" },
      { text: "Adashe", color: "#F97316" },
      { text: "ROSCA", color: "#0052C4" },
      { text: "Thrift", color: "#f58088" }
    ];
    setContent([...spanContent, ...spanContent]);
  }, []);

    return{content}

}
export default Home;