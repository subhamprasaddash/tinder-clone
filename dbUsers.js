
import mongoose from 'mongoose';


// Create Schemat
const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    imageUrl:  { 
        type: String,
        required: true
    },
    age:  { 
        type: String,
        required: true
    } ,
    about: { 
        type: String,
        default: 'Nothing to display'
    },
})
//Collection created
const db = new mongoose.model("users", userSchema);

//Add data to collection
/* const createCollection = async() =>{

    try{
        const user1 = new db ({
            name:'Mahendra Singh Dhoni',
            age: '35',
            imageUrl:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/06/01/976753-715005-ms-dhoni.jpg',
            about: 'Former Captain'
        })

        const result = await user1.save();
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

createCollection();
 */
export default db;  