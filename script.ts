import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    // await prisma.user.deleteMany()

    // const users = await prisma.user.createMany({
    //     data:[
    //         {
    //             name:"Neel",
    //             age:12,
    //             email:"neel12@gmail.com"
    //         },   
            
    //     ]
    // })

    const user = await prisma.user.findMany({  //this is for finding unique entries
        where: {
            writtenPosts:{
                every:{
                    // title: {startsWith: "Test"},
                    title: "Test",
                }
            }
            // AND: [{email: {startsWith:"nee"}}, {name:"Neel"}]
            // age: {not:12}
            // age: {in:[12,20]}
            // age: {notIn:[12,20]}
            // age: {lt:20}
            // email:{contains: "@gmail.com"}
            // email:{endsWith: "@gmail.com"}
        },
        // take:1,  //same as limit
        // skip:1,   //skip 1st user and print next one.
        orderBy:{
            age: 'asc'
        }
    }
    )

    //_______This is for finding unique entries__________
    // const user = await prisma.user.findUnique({  //this is for finding unique entries
    //     where: {
    //         age_name:{
    //             age:20,
    //             name: "Vinit"
    //         }
    //     }
    // }
    // )
    // data:[
    //     {
    //         name:"Vinit",
    //         email: "vinit123@gmail.com",
    //         age: 20,
    //     },
    //     {
    //         name:"Neel",
    //         email: "neel123@gmail.com",
    //         age: 21,
    //     }
    // ],
        // include: {
        //     userPreference: true
        // }  //as we have included userPreferences over here it is console logging userPreference
        // select:{
        //     name: true,
        //     userPreference:{select:{
        //         id: true
        //     }}
        // },

    console.log(user);
    
}

main()
    .catch(e=>{
        console.error(e.message);
        console.log("Errorrrrrr");
        
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })

