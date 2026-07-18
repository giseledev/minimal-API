import fastify from "fastify";
import cors from "@fastify/cors";

const server  = fastify ({logger: true})

server.register(cors, {
    origin: "*"
});

const teams = [
    { id: 1, name: "Ferrari", base: "Maranello, Itália" },
    { id: 2, name: "Audi", base: "Hinwil, Suíça" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, Inglaterra" },
    { id: 4, name: "Mercedes", base: "Brackley, Inglaterra" },
    { id: 5, name: "McLaren", base: "Woking, Inglaterra" },
    { id: 6, name: "Williams", base: "Grove, Inglaterra" },
    { id: 7, name: "Aston Martin", base: "Silverstone, Inglaterra" },
    { id: 8, name: "Alpine", base: "Enstone, Inglaterra" },
    { id: 9, name: "Haas", base: "Kannapolis, Estados Unidos" },
    { id: 10, name: "Racing Bulls", base: "Faenza, Itália" },
    { id: 11, name: "Cadillac", base: "Fishers, Estados Unidos" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", titulos: "4 títulos mundiais" },
    { id: 2, name: "Yuki Tsunoda", titulos: "Nenhum título" },

    { id: 3, name: "Charles Leclerc", titulos: "Nenhum título" },
    { id: 4, name: "Lewis Hamilton", titulos: "7 títulos mundiais" },

    { id: 5, name: "Lando Norris", titulos: "1 título mundial" },
    { id: 6, name: "Oscar Piastri", titulos: "Nenhum título" },

    { id: 7, name: "George Russell", titulos: "Nenhum título" },
    { id: 8, name: "Andrea Kimi Antonelli", titulos: "Nenhum título" },

    { id: 9, name: "Fernando Alonso", titulos: "2 títulos mundiais" },
    { id: 10, name: "Lance Stroll", titulos: "Nenhum título" },

    { id: 11, name: "Carlos Sainz Jr.", titulos: "Nenhum título" },
    { id: 12, name: "Alexander Albon", titulos: "Nenhum título" },

    { id: 13, name: "Pierre Gasly", titulos: "Nenhum título" },
    { id: 14, name: "Franco Colapinto", titulos: "Nenhum título" },

    { id: 15, name: "Esteban Ocon", titulos: "Nenhum título" },
    { id: 16, name: "Oliver Bearman", titulos: "Nenhum título" },

    { id: 17, name: "Liam Lawson", titulos: "Nenhum título" },
    { id: 18, name: "Isack Hadjar", titulos: "Nenhum título" },

    { id: 19, name: "Nico Hülkenberg", titulos: "Nenhum título" },
    { id: 20, name: "Gabriel Bortoleto", titulos: "Nenhum título" },

    { id: 21, name: "Valtteri Bottas", titulos: "Nenhum título" },
    { id: 22, name: "Sergio Pérez", titulos: "Nenhum título" }
];

server.get("/teams", async(request, response) => {
    response.type("aplication/json").code(200)

    return [ teams ];
});

server.get("/drivers", async(request, response) => {
    response.type("aplication/json").code(200)

    return [ drivers ];
});

// contrato de como quero receber a variável ID na rota abaixo:
interface DriverParams {
    id: string
};

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);

    // comparar o ID que recebi com o ID dentro de Drivers: recebo o ID e procuro por ele dentro do meu Drivers:
    const driver = drivers.find( d => d.id === id )

    if (!driver) {
        response.type("aplication/json").code(404)
        return {message: "Driver not Found"}
    } else {
        response.type("aplication/json").code(200)
        return {driver};
    }
});

server.listen({port:3333}), () => {
    console.log("Servidor inicializado")
};