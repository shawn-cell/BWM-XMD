const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nVHuUOVnXVAt5QEVHAy9bUVoAAUW6GoNhd/vct7O7qftiZ7XlLhXByci7fK8gLXKE5uoHBKygJvkCK2iW9lQgMgFZHESKgC0JIIRiA0WKkZsuCNHOlt2VEUWiW0bohtiIVZMqQtZhYW+FwVhmWfwb3LihrP8XBbwAdjUhs2GH9II/qeD8d807flhjHRHPCqWzMqdbpZHN84NjP4N4iQkxwHo/KBGWIwHSObiuIyffoZxaz80plfzw4eqMTu7xCW17tVNE5BGXNecYhrblLXg8n/e/Rz+21liTOVVb749ksyv2O1VwcY1V41SgVF/IEni+GVHqHtHijX+E4R6ERopxievsD3Tlv1UcGNKK5P04Eo1MERx01jF6wdqFJeDjDN7TCZ9b8HvGZsgtqBDEtpXKYiGEYnRJdYjo4JLWfn3u1x1pprzA5zv1KfEU+snL6E92t6b5w4Is86nE5k/rXZjrcbC56B15CSeWGQqKfXbJww42nfo++YqH5crQ0ZtbKiq+HnbxwX4RFc5SPsqjb3MrypTHBezYZm5/0Ia3J71jq5vW0ln2PHPx035xThZhmuVC0s19IemRszv3MtBcde+9aTGXZ1sU9edVuiU6XMI/pbM+IU4EwY7Rjtx1j6UxlNNaS+PnxohO6GSEYMPcuICjGFSWQ4iJv93i+C2B42aCAIPpQF6zWs2jGWfnS38MbdnljiXdubrHCaMLMfK8Xm37ubKKjvXCfQReUpAhQVaFwiitakJuJqgrGqAKDv392QY4a+uZbexvHdEGESUXdvC7TAoYfpn58hEFQ1Dnd3PJAbxeIgEH/cxtRivO4amWsc0iCBF+QnkBagUEE0wrduyBEFxygFg+cLQVPvQtn8+JYIVmae4nUv7aUkyJ/OxIFUsAwSH4SFFF+4kUpeJIZyDz1oQKRxAeSwHCgC/B7Zdp/fukgS71qh0ZmGBZDzRzrznZ7OZe414zdhwtv0iOCQjCgpEZd4MPgVJdOcUL572rOpmamzslVG43Ikoij20WMHV4phsUX3DdLweD1c0zpRdjizSRNnfBbAXRB9kggbl/OCrwkiLIgyqwwUP6qflxbHWFZ/sgRBV2Qw/Yw+GeTwGv+T3vPuwktQogoxGnVxnaur5NQnYyMHW78ajJRR7Gqxyr4NO0j/G/pgmwI42LbDO2tmYxnxwIP19MsFreNyCHWnWx0Vtsvb1tl2n/+D5C2z/0iQ1Vw7pWKnDGO6qEFvW5Mlhtzh159rIysclmqvyxOaIjh8pZuRu4Le2CEPZdCTYmqvSPOmCVETS0WscOOmcLT2qZ8hOfrZR5ZrSXbx5vVxrjhWJlz2YuSRHNWI2e/irdzVzkItohMu9GHlt5xYMCv6Utx9W10nCVaGed4l/Nrrtez3JEyOQ6ZPlbfavkYC+n7OMaPxry+Ry3C6DHd3l34P7M+Q9+/d79AvI/LXwRL29J8W8zHld0fH431Zi8acX8tFFZaIcrRVDvFNN4Og/SyVsD9/rMLyhTSqCAZGIAq8yHoghRWVP0srYMzVFGYlWDASJzAy5Ik8vd/AQozdZvpBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Shawn23",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Shawn A",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Shawn_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

