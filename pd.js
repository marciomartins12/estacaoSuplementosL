const produtos = [
    {
        nome: "Carnívoro Isolate",
        subtitulo: "Beef protein isolate",
        preco: 170.00,
        descricao: "Adquira o Carnivoro Beef Protein Isolate agora mesmo e aproveite todos os benefícios que ele tem a oferecer. Seja você um atleta profissional, um entusiasta do fitness ou alguém que busca melhorar sua saúde e bem-estar, este suplemento é a escolha certa para você. Invista em sua saúde, invista em qualidade, invista no Carnivoro Beef Protein Isolate!",
        img: "../img/CarnivoroIsolate.png",
        id: 1,
        classe: "%20%20Carnivoro%20Isolate"
    },
    {
        nome: "3Whey",
        subtitulo: "Protein Powder",
        preco: 90.00,
        descricao: "A vantagem do 3Whey é que você obtém o melhor dos três mundos em um único produto. Essa combinação de proteínas de diferentes velocidades de absorção garante uma liberação prolongada de aminoácidos, o que contribui para a síntese proteica contínua, recuperação muscular otimizada e suporte ao crescimento muscular.",
        img: "../img/3whey.png",
        id: 2,
        classe: "%203Whey"
    },
    {
        nome: "Whey Protein 80%",
        subtitulo: "Growth 1kg",
        preco: 170.00,
        descricao: "Não espere mais para investir em sua performance e resultados. Adquira agora mesmo o Whey Protein 80% e experimente a diferença que esse suplemento de qualidade pode fazer em sua vida. Aproveite todos os benefícios de uma proteína premium, comprovada e confiável. Faça a escolha certa, faça a escolha do Whey Protein 80%!",
        img: "../img/WheyProtein80.png",
        id: 3,
        classe: "%20Whey%20Protein%2080%%"
    },
    {
        nome: "Hiper Mass",
        subtitulo: "Hipercalórico",
        preco: 80.00,
        descricao: "Disparado o melhor dos hipercalóricos disponíveis no mercado, com a maior proporção entre carboidratos e proteínas. Especialmente para aqueles que buscam alcançar a hipertrofia e ganhar massa muscular",
        img: "../img/HiperMass.png",
        id: 4,
        classe: "%20Hiper Mass"
    },
    {
        nome: "HiperCalórico",
        subtitulo: "Hipercalórico",
        preco: 120.00,
        descricao: "Seja você um atleta que deseja melhorar seu desempenho, um praticante de musculação que busca ganho de massa muscular ou alguém que necessita de um aumento de peso saudável, o Anabolic Hipercalórico é a escolha ideal para você.",
        img: "../img/Hipercalorico.png",
        id: 5,
        classe: "%20HiperCalorico"
    },
    {
        nome: "Creatina Growth",
        subtitulo: "250g",
        preco: 150.00,
        descricao: "Invista agora mesmo na Creatina Growth e desfrute dos benefícios comprovados que ela pode oferecer. Prepare-se para elevar seus treinos a um novo patamar, aumentar sua força e potência muscular, e alcançar resultados surpreendentes em sua jornada fitness. Faça a escolha inteligente, faça a escolha da Creatina Growth!",
        img: "../img/HiperMass.png",
        id: 6,
        classe: "%20Creatina%20Growth"
    },
    {
        nome: "Creatina 300g",
        subtitulo: "Black Skull",
        preco: 140.00,
        descricao: "Prepare-se para experimentar uma explosão muscular e um desempenho máximo com a Creatina Turbo Black Skull. Aumente sua força, potência e resistência, supere seus objetivos e alcance resultados extraordinários.",
        img: "../img/HiperMass.png",
        id: 7,
        classe: "%20Creatina%20300g%20Black%20Skull"
    },
    {
        nome: "Creatina 150g",
        subtitulo: "Black Skull",
        preco: 85.00,
        descricao: "Prepare-se para experimentar uma explosão muscular e um desempenho máximo com a Creatina Turbo Black Skull. Aumente sua força, potência e resistência, supere seus objetivos e alcance resultados extraordinários.",
        img: "../img/HiperMass.png",
        id: 8,
        classe: "%20Creatina%20150g%20Black%20Skull"
    },
    {
        nome: "Bio Colagen",
        subtitulo: "Max Titanium 150g",
        preco: 75.00,
        descricao: "Invista no Bio Colágeno e promova a saúde da sua pele, articulações e cabelos. Desfrute dos benefícios de uma pele radiante, articulações mais saudáveis e cabelos fortalecidos. Faça a escolha consciente, faça a escolha do Bio Colágeno para uma aparência e um bem-estar excepcionais!",
        img: "../img/HiperMass.png",
        id: 9,
        classe: "%20Bio%20Colagen"
    },
    {
        nome: "Nuclear Rush",
        subtitulo: "Pré-treino",
        preco: 75.00,
        descricao: "Prepare-se para experimentar uma explosão de energia, foco aprimorado e desempenho máximo com o Pré-Treino Nuclear Rush. Elevar seus treinos a um novo patamar, superar seus limites e alcançar resultados impressionantes. Faça a escolha poderosa, faça a escolha do Pré-Treino Nuclear Rush para um treino verdadeiramente explosivo!",
        img: "../img/HiperMass.png",
        id: 10,
        classe: "%20Nuclar%20Rush"
    },
    {
        nome: "Pasta de Amendoim",
        subtitulo: "Chocolate Branco",
        preco: 90.00,
        descricao: "Escolha a Pasta de Amendoim Laganexa e desfrute de um alimento versátil, saboroso e nutritivo. Com sua textura cremosa e sabor irresistível, ela vai conquistar seu paladar e se tornar um ingrediente essencial em sua dieta. Faça a escolha saudável, faça a escolha da Pasta de Amendoim Laganexa para um deleite nutritivo e delicioso!",
        img: "../img/HiperMass.png",
        id: 11,
        classe: "%20Pasta%20de%20Amendoim%20sabor%20chocolate%20branco"
    },
    {
        nome: "Pasta de Amendoim",
        subtitulo: "Leitinho com Chocolate",
        preco: 90.00,
        descricao: "scolha a Pasta de Amendoim Laganexa,possui whey protein em sua composição e desfrute de um alimento versátil, saboroso e nutritivo. Com sua textura cremosa e sabor irresistível, ela vai conquistar seu paladar e se tornar um ingrediente essencial em sua dieta. Faça a escolha saudável, faça a escolha da Pasta de Amendoim Laganexa para um deleite nutritivo e delicioso!",
        img: "../img/HiperMass.png",
        id: 12,
        classe: "%20Pasta%20de%20Amendoim%20%20sabor%20leitinho%20com%20chocolate"
    },
    {
        nome: "Pasta de Amendoim",
        subtitulo: "Castanha de Cajú",
        preco: 90.00,
        descricao: "A Pasta de Amendoim Alaganexa Sabor Doce de Leite com Castanha de Caju é uma opção deliciosa e indulgente para os amantes de sabores doces. Combinando o sabor suave do doce de leite com o crocante das castanhas de caju, essa pasta é uma verdadeira tentação para os sentidos.",
        img: "../img/HiperMass.png",
        id: 13,
        classe: "%20Pasta%20de%20Amendoim%20sabor%20castanha%20de%20caju"
    },
    {
        nome: "Pasta de Amendoim",
        subtitulo: "Avelã ZERO Lactose",
        preco: 80.00,
        descricao: "A Pasta de Amendoim Alaganexa Sabor Avelã é uma opção deliciosa e indulgente para os amantes de sabores doces. Essa pasta é uma verdadeira tentação para os sentidos.",
        img: "../img/HiperMass.png",
        id: 14,
        classe: "%20Pasta%20de%20Amendoim%20sabor%20avelã%20"
    },
    {
        nome: "Coqueteleira",
        subtitulo: "Bater Suplementação",
        preco: 25.00,
        descricao: "Para melhor bater sua suplementação.",
        img: "../img/HiperMass.png",
        id: 15,
        classe: "%20Coqueteleira"
    },

]
export default produtos