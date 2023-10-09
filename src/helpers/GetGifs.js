
export const getGifs = async (category) => {

    const apiKey = '57n4dDNuaNo23ivpSV3gpgM5Xxy6Kbmf';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(URL);
    const { data = [] } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url,
    }));
    return gifs;
};