const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Singer = db . define ( "singer" , {
    
songlanguage: {
    FOREIGN KEY(artist) REFERENCES (id)
},
}, {
    timestamps: false
    });
    db . sync (). then ( res => {
    })
    module . exports = Songs ;