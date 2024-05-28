import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data:{
            name:"Vinit",
            email: "vinit123@gmail.com",
            age: 20,
            
        },
    })

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

