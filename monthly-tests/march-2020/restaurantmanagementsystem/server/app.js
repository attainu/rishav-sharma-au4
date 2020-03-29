const express = require ( "express" );
const cor = require('cors');
const app = express ();
const db = require ( "./database" );
app . use ( express . json ());

app.use(cor())
const Table = require ( "./Models/Table" );
app . post ( "/table" , async ( req , res ) => {
try {
const { body } = req ;
let table = await Table . create ({ strength: body . strength , name: body . name,floor: body . floor });
res . send ( table );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/table" , async ( req , res ) => {
try {

let tables = await Table . findAll ();
res . send ( tables );
} catch ( error ) {
console . log ( error );
}
});
app . put ( "/table/:id" , async ( req , res ) => {
try {
const { body , params } = req ;

let table = await Table . update ({ name: body . name , strength: body . strength ,floor: body . floor}, {
where: { id: params . id } });
res . send ( table );
} catch ( error ) {
console . log ( error );
}
});
app . delete ( "/table/:id" , async ( req , res ) => {
    try {
    const { params } = req ;
    await Table . destroy ({ where: { id: params . id } });
    res . send ( "Deleted successfully" );
    } catch ( error ) {
    console . log ( error );
    }
    })


const Waiters = require ( "./Models/Waiters" );
app . post ( "/waiters" , async ( req , res ) => {
try {
const { body } = req ;
let waiters = await Waiters . create ({ waitername: body . waitername , waiterage: body . waiterage, waitermobile: body . waitermobile , waiterage: body . waiterage, waiterratings: body . waiterratings,waiterexperience: body . waiterexperience});
res . send ( waiters );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/waiters" , async ( req , res ) => {
    try {
    
    let waiters = await Waiters . findAll ();
    res . send ( waiters );
    } catch ( error ) {
    console . log ( error );
    }
    });
    app . put ( "/waiters/:id" , async ( req , res ) => {
        try {
        const { body , params } = req ;
        
        let waiters = await Waiters . update ({ waitername: body . waitername , waiterage: body . waiterage, waitermobile: body . waitermobile , waiterage: body . waiterage, waiterratings: body . waiterratings,waiterexperience: body . waiterexperience}, {
        where: { id: params . id } });
        res . send ( waiters );
        } catch ( error ) {
        console . log ( error );
        }
        });
        app . delete ( "/waiters/:id" , async ( req , res ) => {
            try {
            const { params } = req ;
            await Waiters . destroy ({ where: { id: params . id } });
            res . send ( "Deleted successfully" );
            } catch ( error ) {
            console . log ( error );
            }
            })

            //orders
            //create
            const Order = require ( "./Models/Order" );
            app . post ( "/order" , async ( req , res ) => {
                try {
                const { body } = req ;
                let order = await Order . create ({ name: body . name,mobile: body . mobile });
                res . send ( order );
                } catch ( error ) {
                console . log ( error );
                }
                });
                //get
                app . get ( "/order" , async ( req , res ) => {
                    try {
                    
                    let order = await Order . findAll ();
                    res . send ( order );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    });
                //update
                app . put ( "/order/:id" , async ( req , res ) => {
                    try {
                    const { body , params } = req ;
                    
                    let order = await Order . update ({ name: body . name,mobile: body . mobile}, {
                    where: { id: params . id } });
                    res . send ( order );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    });
                    //delete
                app . delete ( "/order/:id" , async ( req , res ) => {
                    try {
                    const { params } = req ;
                    await Order . destroy ({ where: { id: params . id } });
                    res . send ( "Deleted successfully" );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    })
                    //menu
            //create
            const Menu = require ( "./Models/Menu" );
            app . post ( "/menu" , async ( req , res ) => {
                try {
                const { body } = req ;
                let menu = await Menu . create ({ name: body . name,mobile: body . mobile });
                res . send ( menu );
                } catch ( error ) {
                console . log ( error );
                }
                });
                //get
                app . get ( "/menu" , async ( req , res ) => {
                    try {
                    
                    let menu = await Menu . findAll ();
                    res . send ( menu );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    });
                //update
                app . put ( "/menu/:id" , async ( req , res ) => {
                    try {
                    const { body , params } = req ;
                    
                    let menu = await Menu . update ({ name: body . name,mobile: body . mobile}, {
                    where: { id: params . id } });
                    res . send ( Menu );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    });
                    //delete
                app . delete ( "/menu/:id" , async ( req , res ) => {
                    try {
                    const { params } = req ;
                    await menu . destroy ({ where: { id: params . id } });
                    res . send ( "Deleted successfully" );
                    } catch ( error ) {
                    console . log ( error );
                    }
                    })



module . exports = app ;
