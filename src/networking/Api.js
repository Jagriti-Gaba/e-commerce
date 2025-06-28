export const LoadProducts = async(skip,limit) => {
   try{
    const response=await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const result=await response.json();
    return result;
   }catch(error){
     console.log("Error fetching the products:",error);
     return{error:true,message:error.message}
   }
  
};
  
