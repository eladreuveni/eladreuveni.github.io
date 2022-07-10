const favKey = 'ertk7';

export const getLSFavorites = () => {
    const favorites = localStorage.getItem(favKey);
    if (!favorites || favorites[0] === '') { return [] }
    return favorites?.split(',') || [];
}

export const addLSFavorite = (city: string) => {
    const favorites = getLSFavorites();
    if (!favorites.includes(city)) {
        favorites.push(city);
        localStorage.setItem(favKey, favorites.join(','));
    }
}

export const removeLSFavorite = (city: string) => {
    const favorites = getLSFavorites();
    const index = favorites.indexOf(city);
    if (index > -1) {
        favorites.splice(index, 1);
        if (!favorites.length) { localStorage.removeItem(favKey) }
        localStorage.setItem(favKey, favorites.join(','));
    }
}

export const isCityFavorite = (city: string) => {
    const favorites = getLSFavorites();
    return favorites.includes(city);
}