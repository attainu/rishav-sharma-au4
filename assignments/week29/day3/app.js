const express = require ( "express" );
const cor = require('cors');
const app = express ();
const db = require ( "./database" );
app . use ( express . json ());

app.use(cor())
const Songs = require ( "./Models/Songs" );
app.post ( "/songs" , async ( req , res ) => {
try {
const { body } = req ;
let songs = await Songs . create ({songname: body . songname, songlength: body . songlength,songreleaseyear: body . songreleaseyear, songaward: body . songaward, songmoviename: body . songmoviename, songgenre: body . songgenre, songlanguage: body . songlanguage});
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/songs" , async ( req , res ) => {
try {

let songs = await Songs . findAll ();
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . put ( "/songs/:id" , async ( req , res ) => {
try {
const { body , params } = req ;

let songs = await Songs . update ({songname: body . songname, songlength: body . songlength,songreleaseyear: body . songreleaseyear, songaward: body . songaward, songmoviename: body . songmoviename, songgenre: body . songgenre, songlanguage: body . songlanguage}, {
where: { id: params . id } });
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . delete ( "/songs/:id" , async ( req , res ) => {
    try {
    const { params } = req ;
    await Songs . destroy ({ where: { id: params . id } });
    res . send ( "Deleted successfully" );
    } catch ( error ) {
    console . log ( error );
    }
    })

    ////Singer
    const Singer= require ( "./Models/Singer" );
app.post ( "/singer" , async ( req , res ) => {
try {
const { body } = req ;
let singer = await Singer . create ({singerage: body . singerage, singeraward: body . singeraward,singernativelanguage: body . singernativelanguage, Issingerclassicallytrained: body . Issingerclassicallytrained, singergender: body . singergender});
res . send ( singer );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/singer" , async ( req , res ) => {
try {

let singer = await Singer . findAll ();
res . send ( singer );
} catch ( error ) {
console . log ( error );
}
});
app . put ( "/singer/:id" , async ( req , res ) => {
try {
const { body , params } = req ;

let singer = await Singer . update ({singerage: body . singerage, singeraward: body . singeraward,singernativelanguage: body . singernativelanguage, Issingerclassicallytrained: body . Issingerclassicallytrained, singergender: body . singergender}, {
where: { id: params . id } });
res . send ( singer );
} catch ( error ) {
console . log ( error );
}
});
app . delete ( "/singer/:id" , async ( req , res ) => {
    try {
    const { params } = req ;
    await Singer . destroy ({ where: { id: params . id } });
    res . send ( "Deleted successfully" );
    } catch ( error ) {
    console . log ( error );
    }
    })

    ////movies

    const Movies= require ( "./Models/Movies" );
    app.post ( "/movies" , async ( req , res ) => {
    try {
    const { body } = req ;
    let movies = await Movies . create ({songmoviename: body . songmoviename});
    res . send ( movies );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . get ( "/movies" , async ( req , res ) => {
    try {
    
    let movies = await Movies . findAll ();
    res . send ( movies );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . put ( "/movies/:id" , async ( req , res ) => {
    try {
    const { body , params } = req ;
    
    let movies = await Movies . update ({songmoviename: body . songmoviename}, {
    where: { id: params . id } });
    res . send ( movies );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . delete ( "/movies/:id" , async ( req , res ) => {
        try {
        const { params } = req ;
        await Movies . destroy ({ where: { id: params . id } });
        res . send ( "Deleted successfully" );
        } catch ( error ) {
        console . log ( error );
        }
        })

        ///genres


        const Genres= require ( "./Models/Genres" );
    app.post ( "/genres" , async ( req , res ) => {
    try {
    const { body } = req ;
    let genres = await Genres . create ({songgenres: body . songgenres});
    res . send ( genres );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . get ( "/genres" , async ( req , res ) => {
    try {
    
    let genres = await Genres . findAll ();
    res . send ( genres );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . put ( "/genres/:id" , async ( req , res ) => {
    try {
    const { body , params } = req ;
    
    let genres = await Genres. update ({songgenres: body . songgenres}, {
    where: { id: params . id } });
    res . send ( genres );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . delete ( "/genres/:id" , async ( req , res ) => {
        try {
        const { params } = req ;
        await Genres . destroy ({ where: { id: params . id } });
        res . send ( "Deleted successfully" );
        } catch ( error ) {
        console . log ( error );
        }
        })


        //awards
        const Awards= require ( "./Models/Awards" );
        app.post ( "/awards" , async ( req , res ) => {
        try {
        const { body } = req ;
        let awards = await Awards . create ({songaward: body . songaward});
        res . send ( awards );
        } catch ( error ) {
        console . log ( error );
        }
        });
        app . get ( "/awards" , async ( req , res ) => {
        try {
        
        let awards = await Awards . findAll ();
        res . send ( awards );
        } catch ( error ) {
        console . log ( error );
        }
        });
        app . put ( "/awards/:id" , async ( req , res ) => {
        try {
        const { body , params } = req ;
        
        let awards = await Awards. update ({songaward: body . songaward}, {
        where: { id: params . id } });
        res . send ( awards );
        } catch ( error ) {
        console . log ( error );
        }
        });
        app . delete ( "/awards/:id" , async ( req , res ) => {
            try {
            const { params } = req ;
            await Awards . destroy ({ where: { id: params . id } });
            res . send ( "Deleted successfully" );
            } catch ( error ) {
            console . log ( error );
            }
            })
