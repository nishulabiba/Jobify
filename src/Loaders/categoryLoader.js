const categoryLoader = async() => {
    const category = await fetch('./featured.json');
    const res = category.json();
    
    console.log(res)
    return res;
}

export default categoryLoader;