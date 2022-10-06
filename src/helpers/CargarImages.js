

 export const peticion = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=I8K6ZRrOCPIlsDzB9Y2VXlhTiIYk1HnB`;

    const pedir = await fetch(url);

    const {data} = await pedir.json();

    const datosGif = data.map (img => {

       return {
         id: img.id,
         titulo: img.title,
         url: img.images.downsized_still.url

          


       }

    })
     return datosGif;


}