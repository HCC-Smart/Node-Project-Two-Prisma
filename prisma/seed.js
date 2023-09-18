import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    try {
        
        await prisma.bookStore.deleteMany();
        await prisma.book.deleteMany();
        await prisma.author.deleteMany();

        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;

        await prisma.author.create({
            data: {
                name: "nourat",
                email: "nour@gmail"
            },
        });

        await prisma.author.create({
            data: {
                name: "HAnna",
                email: "hanna@gmail",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 1,
                title: "sleeping beauty",
                price: 99,
                image: "https://jayabakti.com/wp-content/uploads/2021/02/Scanned_from_a_Lexmark_Multifunction_Product21-12-2020-133525-1.jpg",
            },
        });

        await prisma.book.create({
            data: {
                authorId: 2,
                title: "sleeping beuty story",
                price: 3,
                image: "https://jayabakti.com/wp-content/uploads/2021/02/Scanned_from_a_Lexmark_Multifunction_Product21-12-2020-133525-1.jpg",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 1,
                name: "nourat book store",
                location: "Hodan",
            },
        });

        await prisma.bookStore.create({
            data: {
                bookId: 2,
                name: "nourat book store",
                location: "D Hodan"
            }
        })

        console.log("succesduly")

    } catch (err) {
        console.log( err)
    } finally {
        await prisma.$disconnect()
    }
}

seed()