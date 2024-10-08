export const appLogo =
   "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";

export const bgImgLogin =
   "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg";

export const defaultIconAvatar =
   "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-256.png";

export const MOVIE_OPTIONS = {
   method: "GET",
   headers: {
      accept: "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMDB_KEY,
   },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const OPEN_AI_KEY = import.meta.env.VITE_REACT_APP_OPEN_AI_KEY;
