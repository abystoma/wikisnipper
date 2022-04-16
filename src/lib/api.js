import axios from "axios"

const searchWiki = async(query,offset) => {
    const params = {
        action: "query",
        list: "search",
        srsearch: query,
        srlimit: 20,
        sroffset: offset,
        format: "json",
        origin: "*"
    };

    return await axios.get("https://en.wikipedia.org//w/api.php",{params});
};

export default {
    searchWiki,
};
