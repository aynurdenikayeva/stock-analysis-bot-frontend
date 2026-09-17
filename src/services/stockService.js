const API_URL = "http://localhost:8080/api/stocks";


export const analyzeStock=async(symbol)=>{
const data=await fetch( `${API_URL}/analyze/${symbol}`
)
return await data.json()
}
