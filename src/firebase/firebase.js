import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBsjM21BOCPje-I6GWjLO614XnMwA2LLDg",
    authDomain: "react-fonsalido2024.firebaseapp.com",
    projectId: "react-fonsalido2024",
    storageBucket: "react-fonsalido2024.appspot.com",
    messagingSenderId: "229416142266",
    appId: "1:229416142266:web:a593c69411d9f915f1c983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/
const prods = [
        {
            "title": "Tourism trips",
            "place": "-Pleasure travel package to discover the beautiful emerald island. Includes flights, accommodation and tourist guides-",
            "price": 2675,
            "stock": 108,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/1.jpg?alt=media&token=4136c901-696e-4d05-977f-de8a5a6a48dd",
            "Category": "Types of trips"
        },
        {
            "title": "Study Holiday",
            "place": "-Visa to study English in the most prestigious schools in Ireland. Includes visa, registration, study materials and accommodation for the first two weeks-",
            "price": 3675,
            "stock": 108,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/12.jpg?alt=media&token=9bc3917d-5d6c-4c83-b8eb-e44780d2c32c",
            "Category": "Types of trips"
        },
        {
            "title": "Working Holiday",
            "place": "-Visa to work and vacation in Ireland. Includes visa procedures, collaboration in putting together a resume, job offers, accommodation for the first two weeks-",
            "price": 4050,
            "stock": 108,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/10.jpeg?alt=media&token=013288d4-29e0-45b9-b945-1f0f46ae4cdb",
            "Category": "Types of trips"
        },
        {
            "title": "Work an study",
            "place": "-The most complete package. You can study and work at the same time. It is the longest visa since it lasts 26 weeks. Includes visa procedures, accommodation for the first month, registration for the English course and study materials-",
            "price": 4980,
            "stock": 108,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/requisitos-para-trabajar-en-irlanda-de-contador.jpg?alt=media&token=6c987e6b-82c9-4064-a9b1-41817f52dd21",
            "Category": "Types of trips"
        },
        {
            "title": "Delfin English School",
            "place": "-It has excellent native teachers, a very good location in Dublin 2, and offers 3 types of courses (15, 20 or 30 hours per week). They have discounts in their dining room for foreign students-",
            "price": 2480,
            "stock": 122,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/7.webp?alt=media&token=e1cef18b-4578-49fe-aed4-3105ae622886",
            "Category": "Study"
        },
        {
            "title": "Atlas Language School",
            "place": "-Atlas Language School Dublin's course selection includes something for learners of all ages and levels. In addition, they offer extracurricular activities for the socialization of their students-",
            "price": 2670,
            "stock": 122,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/6.jpg?alt=media&token=7cbad093-42f9-44f1-ba71-bd0c55dc961f",
            "Category": "Study"
        },    {
            "title": "Everest Languaje School",
            "place": "-Everest Language School is the first school in Dublin to base all academic decisions on linguistic research carried out within the school. They work with departments at Trinity College Dublin to create a unique learning path for each student-",
            "price": 2480,
            "stock": 122,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/5.webp?alt=media&token=111b25fb-0516-46dd-bb08-5d5a74eeead3",
            "Category": "Study"
        },
        {
            "title": "Job Search",
            "place": "-You can hire our job search service. We will rely on your skills to help you find a special job for you-",
            "price": 300,
            "stock": 100,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/18.jpg?alt=media&token=17d45c08-f1d7-40dc-945b-a21127e37006",
            "Category": "Jobs"
        },
        {
            "title": "Resume",
            "place": "-We help you create the best resume and cover letter so that you can start your job search on your own.-",
            "price": 200,
            "stock": 100,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/17.jpg?alt=media&token=fc773ffd-0b46-438b-b576-f6daaa70d3d3",
            "Category": "Jobs"
        },
        {
            "title": "Work With Us",
            "place": "-We offer a service (with a waiting list) to register in our database so that you can work on our campuses as well as in the English institutes performing various tasks.-",
            "price": 35,
            "stock": 100,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/9.jpg?alt=media&token=4f8e0c25-65cd-42cb-864d-2db634d65462",
            "Category": "Jobs"
        },
        {
            "title": "Cliff Of Moher",
            "place": "-full-day tour with tourist guide on cliff of moher-",
            "price": 120,
            "stock": 130,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/15.jpg?alt=media&token=0026c7e3-1c00-486b-bc31-091365260244",
            "Category": "Destinations"
        },
        {
            "title": "Temple Bar",
            "place": "-full-day tour with tourist guide on Temple Bar-",
            "price": 80,
            "stock": 130,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/8.jpg?alt=media&token=ed615a66-4249-45b3-a549-47efdd63f1af",
            "Category": "Destinations"
        },
        {
            "title": "Galway Tour",
            "place": "-full-day tour with tourist guide on Galway city-",
            "price": 100,
            "stock": 130,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/16.jpg?alt=media&token=02b1edad-9ba6-4880-8cbb-b438306460a6",
            "Category": "Destinations"
        },
        {
            "title": "Titanic Museum",
            "place": "-Visit the Titanic museum in Belfast (includes entrance to the museum)-",
            "price": 170,
            "stock": 130,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido2024.appspot.com/o/13.jpg?alt=media&token=94273049-ad3d-424e-8ff4-8603c7ce4992",
            "Category": "Destinations"
        }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "Productos"), {
            title: prod.title,
            place: prod.place,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            Category: prod.Category
        })
    })
}

export const getProducts = async () => {
    const Productos = await getDocs(collection(bdd, "Productos"))
    console.table(Productos.docs)
    const items = Productos.docs.map(prod => {return { ...prod.data(), id: prod.id}})
    return items
}
export const getProduct = async (id) => {
    const Productos = await getDoc(doc(bdd, "Productos", id))
    const items =  { ...Productos.data(), id: Productos.id}
    return items
}

export const updateProduct = async (id, info) => {
    const respuesta = await updateDoc(doc(bdd, "Productos", id), info)
    return respuesta

}

export const deleteProduct = async (id) => {
    const respuesta = await deleteDoc(doc(bdd, "Productos", id))
    return respuesta
}


export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
